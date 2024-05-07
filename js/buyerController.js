import { buyerEntity } from "./userEntity.js";

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

    displaySearchResultsController(searchResult){
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
                <button class="shortlist-button" value="${cleanID[x]}">Shortlist this Property</button>
                <a href="fullPropertyDetails.html?propertyId=${cleanID[x]}" class="view-details-button" id="viewDetails" value="${cleanID[x]}">View Details</a>
            ` + `
            <div class="rea-info">
            <h4>Real Estate Agent Information</h4>
            <p><strong>Name:</strong> <a href="rateNreview.html?reaEmail=${cleanREAEmail[x]}" class="view-details-button" id="viewDetails" value="${cleanREAEmail[x]}">${cleanREAName[x]}</a> </p>
            <p><strong>Contact:</strong> ${cleanREAEmail[x]}</p>
            </div>
            `;
            container.appendChild(listingElement);

        }

    }

    setControllerMessage(messageFromEntity){
        alert(messageFromEntity);
    }

    

}



window.onload = function () {
    if(window.location.href.indexOf('buyer.html') > -1){
        let initBuyerController = new buyerController();
        initBuyerController.getUserToController();
    }
    
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

    if(window.location.href.indexOf('buyer.html') > -1){
        const searchButton = document.getElementById("searchBtn");
        if (searchButton) {
            searchButton.addEventListener("click", function (event) {
                event.preventDefault();
    
                var listingElement = document.getElementsByClassName("property-listing");
                while(listingElement.length > 0){
                    listingElement[0].parentNode.removeChild(listingElement[0])
                }
    
                const propLocation = document.getElementById('property_location').value;
                const propPriceRange = document.getElementById('property_range').value;
                const propType = document.getElementById('property_type').value;
                const propBedrooms  = document.getElementById('property_bedroom').value;
    
                let searchParamsObj = new searchParams(propLocation,propPriceRange,propType,propBedrooms);
                let initBuyerEntity = new buyerEntity();
                initBuyerEntity.passSearchParamsToEntity(searchParamsObj);
    
                
                
            });
        }
    }
    
});

document.body.addEventListener("click", function(e){
    if(window.location.href.indexOf('buyer.html') > -1){
        if(e.target.classList.contains("shortlist-button")){
            var propID = e.target.value;
    
            let initBuyerEntity = new buyerEntity();
            initBuyerEntity.shortlistProp(propID);
            
        }
    }
    
})
