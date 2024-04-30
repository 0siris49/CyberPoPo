import { buyerEntity } from "./userEntity.js";
import FirebaseClass from './firebase.js';

export class buyerController {
    //Actually calls for Firebase to check whether there's a user logged in, and if it does, return their displayName
    getUserToController() {
        let initBuyerEntity = new buyerEntity();
        initBuyerEntity.getUserToEntity();
    }


    setBuyerControllerDisplayName(displayNameFromEntity) {
        var displayUserName = displayNameFromEntity;
        
        
        const buyerNameTag = document.getElementById('buyerName');
            if(buyerNameTag){
                document.getElementById('buyerName').innerHTML=displayUserName;
            }
    
    }

    retrieveSearchResultsController(searchResult){
        var stringArr = searchResult.split("---");
        var totalPropList = stringArr.length - 1;
        const container = document.getElementById('property-listings-container');
        const cleanLocation = [];
        const cleanPrice = [];
        const cleanName = [];
        const cleanType = [];
        const cleanDesc = [];
        const cleanBedroom = [];
        const cleanREAEmail= [];
        const cleanREAName = [];
        const cleanID = [];

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
                <button class="shortlisted-button">Shortlist this Property</button>
                <a href="fullPropertyDetails.html?propertyId=${cleanID[x]}" class="view-details-button" id="viewDetails" value="${cleanID[x]}">View Details</a>
            ` + `
            <div class="rea-info">
            <h4>Real Estate Agent Information</h4>
            <p><strong>Name:</strong> ${cleanREAName[x]}</p>
            <p><strong>Contact:</strong> ${cleanREAEmail[x]}</p>
            </div>
            `;
            container.appendChild(listingElement);

        }

    }

}



window.onload = function () {
    let initBuyerController = new buyerController();
    initBuyerController.getUserToController();
};

class searchParams{
    constructor(propLocation,propPriceRange,propType,propBedrooms){
        this.propLocation = propLocation;
        this.propPriceRange = propPriceRange;
        this.propType = propType;
        this.propBedrooms = propBedrooms;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchBtn");
    if (searchButton) {
        searchButton.addEventListener("click", function (event) {
            event.preventDefault();
            const propLocation = document.getElementById('property_location').value;
            const propPriceRange = document.getElementById('property_range').value;
            const propType = document.getElementById('property_type').value;
            const propBedrooms  = document.getElementById('property_bedroom').value;

            let searchParamsObj = new searchParams(propLocation,propPriceRange,propType,propBedrooms);
            let initBuyerEntity = new buyerEntity();
            initBuyerEntity.passSearchParamsToEntity(searchParamsObj);

            
            
        });
    }
});
