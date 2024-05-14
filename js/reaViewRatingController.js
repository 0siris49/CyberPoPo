import { ratingEntity } from "./ratingEntity.js";
export class reaViewRatingController{
    reqRatings(reaEmail) {
        let initReaViewRatingEntity = new ratingEntity();
        let ratings = initReaViewRatingEntity.reqRatings(reaEmail);
        return ratings;
    }

    displayREARating(avgRating, countRating) {  
        document.getElementById('ratingPlusCount').innerHTML = avgRating + "🌟 average based on " + countRating + " reviews";
    }
}

document.addEventListener("DOMContentLoaded", async function (e) {

    if(window.location.href.indexOf('REA.html') > -1){
        //This is auto retrieve Reviews + Ratings
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const reaEmail = urlParams.get('rea');
        let initReaViewRatingController = new reaViewRatingController();
        var reaRatings = await initReaViewRatingController.reqRatings(reaEmail);
        initReaViewRatingController.displayREARating(reaRatings['avgRating'],reaRatings['countRating']);
    }
    

});