import { shortlistEntity } from "./shortlistEntity.js";

document.addEventListener("DOMContentLoaded", async () => {
    if(window.location.href.indexOf('buyerShortlist.html') > -1){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const buyerEmail = urlParams.get('buyer');
        let initBuyerViewSLController = new buyerViewSLController();
        var allSL = await initBuyerViewSLController.fetchSL(buyerEmail);
        initBuyerViewSLController.displaySL(allSL);
    }   
    
});

document.addEventListener("DOMContentLoaded", () => {

    if(window.location.href.indexOf('buyer.html') > -1){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const currentEmail = urlParams.get('buyer');
        console.log("Clicked");
        const shortlistPage = document.getElementById('shortlistPage');
        shortlistPage.addEventListener("click",function redirect(){
            document.location.href = `buyerShortlist.html?buyer=${currentEmail}`;
        })
    }
    
});



export class buyerViewSLController{

    setCurrentBuyerEmail(currentEmail){
        currentBuyer = currentEmail;
    }
    
    fetchSL(buyerEmail){
        let initShortlistEntity = new shortlistEntity();
        var allSL = initShortlistEntity.fetchBuyerSL(buyerEmail);
        return allSL;
    }

    displaySL(allData){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const buyerEmail = urlParams.get('buyer');
        var stringArr = allData.split("---");
        var totalPropList = stringArr.length - 1;
        const container = document.getElementById('shortlistings-container');
        const cleanLocation = [];
        const cleanPrice = [];
        const cleanName = [];
        const cleanType = [];
        const cleanDesc = [];
        const cleanBedroom = [];
        const cleanREAEmail= [];
        const cleanREAName = [];
        const cleanID = [];
        const cleanAvail = [];

        for(let i=0; i<totalPropList;i++){
            var splitToAttri = stringArr[i].split(",");
            var splitToAttriCount = splitToAttri.length;


            for(let x=0; x<splitToAttriCount;x++){
                var attriString = splitToAttri[x].toString();
                var removeEtc = attriString.replace(/['"{}]+/g, '');
                //console.log(attriString);
                
                if(removeEtc.search("propertyPrice") != -1){
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":")+1);
                    //console.log(result);
                    cleanPrice.push(result);
                }
                
                if(removeEtc.search("propertyName") != -1){
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":")+1);
                    //console.log(result);
                    cleanName.push(result);
                }

                if(removeEtc.search("propertyDescription") != -1){
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":")+1);
                    ///console.log(result);
                    cleanDesc.push(result);
                }

                if(removeEtc.search("propertyType") != -1){
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":")+1);
                    ///console.log(result);
                    cleanType.push(result);
                }

                if(removeEtc.search("propertyBedroom") != -1){
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":")+1);
                    ///console.log(result);
                    cleanBedroom.push(result);
                }

                if(removeEtc.search("propertyAgentEmail") != -1){
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":")+1);
                    ///console.log(result);
                    cleanREAEmail.push(result);
                }

                if(removeEtc.search("propAgent") != -1){
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":")+1);
                    ///console.log(result);
                    cleanREAName.push(result);
                }

                if(removeEtc.search("propertyLocation") != -1){
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":")+1);
                    ///console.log(result);
                    cleanLocation.push(result);
                }
                if(removeEtc.search("propertyID") != -1){
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":")+1);
                    ///console.log(result);
                    cleanID.push(result);
                }
                if(removeEtc.search("propStatus") != -1){
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":")+1);
                    ///console.log(result);
                    cleanAvail.push(result);
                }

                
            }
        }

        for(let x=0; x<totalPropList; x++){
            
            const listingElement = document.createElement('div');
            listingElement.classList.add('property-listing');
            listingElement.innerHTML = `
                <h2>${cleanName[x]}</h2>
                <p><strong>Location:</strong> ${cleanLocation[x]}</p>
                <p><strong>Type:</strong> ${cleanType[x]}</p>
                <p><strong>Description:</strong> ${cleanDesc[x]}</p>
                <p><strong>Price: SGD </strong> ${cleanPrice[x]}</p>
                <p><strong>Availibility: </strong> ${cleanAvail[x]}</p>
                <tr>
                <td><button class="unshortlist-button" value="${cleanID[x]}">Remove from Shortlist</button></td>
                <td><a href="rateNreview.html?reaEmail=${cleanREAEmail[x]}&buyerReviewer=${buyerEmail}" class="view-details-button"> Leave a review for ${cleanREAName[x]}</a></td>
                <td><a href="fullPropertyDetails.html?propertyId=${cleanID[x]}&email=${buyerEmail}&avail=${cleanAvail[x]}" class="view-details-button" id="viewDetails" value="${cleanID[x]}">View Details</a></td>
                </tr>
                
            `;
            container.appendChild(listingElement);

        }
    }
}
