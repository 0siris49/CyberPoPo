import { reviewEntity } from "./reviewEntity.js";


export class reaViewReviewsController{
    reqReviews(reaEmail){
        let initReaViewReviewsEntity = new reviewEntity();
        var reviews = initReaViewReviewsEntity.reqReviews(reaEmail);
        return reviews;
    }

    displayReviews(allData){
        var stringArr = allData.split("---");
        var totalRevCount = stringArr.length - 1;
        var revName = [];
        var revText = [];
        var revStar = [];
        var revFrom = [];
        const container = document.getElementById('displayRating');

        for (let i = 0; i < totalRevCount; i++) {
            var splitToAttri = stringArr[i].split(",");
            var splitToAttriCount = splitToAttri.length;


            for (let x = 0; x < splitToAttriCount; x++) {
                var attriString = splitToAttri[x].toString();
                var removeEtc = attriString.replace(/['"{}]+/g, '');
                //console.log(attriString);

                if (removeEtc.search("reviewOverview") != -1) {
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                    revText.push(result);
                }

                if (removeEtc.search("reviewerTitle") != -1) {
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                    revName.push(result);
                }

                if (removeEtc.search("revFrom") != -1) {
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                    revFrom.push(result);
                }


            }
        }

        for (let x = 0; x < totalRevCount; x++) {

            const listingElement = document.createElement('div');
            listingElement.classList.add('reviewSlide');
            listingElement.innerHTML = `
                <hr>
                <h2>${revName[x]}</h2>
                <p><strong>Review From: </strong> ${revFrom[x]}</p>
                <p><strong>Overview: </strong> ${revText[x]}</p>
                <hr>
            `;
            container.appendChild(listingElement);

        }
    }

}

document.addEventListener("DOMContentLoaded", async function (e) {

    if(window.location.href.indexOf('REA.html') > -1){
        //This is auto retrieve Reviews + Ratings
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const reaEmail = urlParams.get('rea');
        let initReaViewReviewsController = new reaViewReviewsController();
        var reaReviews = await initReaViewReviewsController.reqReviews(reaEmail);
        initReaViewReviewsController.displayReviews(reaReviews);
    }
    

});