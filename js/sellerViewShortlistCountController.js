import { propertyListingEntity } from "./propertyListingEntity.js";
import { currentUserEntity } from "./userEntity.js";



document.addEventListener("DOMContentLoaded", async function() {
    if(window.location.href.indexOf('fullPropertyDetails.html') > -1){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const propertyID = urlParams.get('propertyId');
        const email = urlParams.get('email');
        let initSellerVSLCount = new sellerViewShortlistCountController();
        var userType = await initSellerVSLCount.getCurrentUserTypeController(email);
        initSellerVSLCount.setCurrentUserTypeController(userType); 
        var propDetails = await initSellerVSLCount.passSearchParamPropDetails(propertyID);
        initSellerVSLCount.setShortlistCount(propDetails);

    }
    
    
});



export class sellerViewShortlistCountController{

    passSearchParamPropDetails(propertyID) {
        let initPLEntity = new propertyListingEntity();
        var propDetails =  initPLEntity.searchPropWithID(propertyID);
        return propDetails;
    }

    setShortlistCount(details) {

        var stringArr = details.split(",");
        var totalPropList = stringArr.length - 1;


        for(let i=0; i<=totalPropList; i++){
            const currentAttri = stringArr[i].toString();
            var removeStuff = currentAttri.replace(/['"{}]+/g, '');

            if (removeStuff.search("propSLC") != -1) {
                var result = removeStuff.substring(removeStuff.lastIndexOf(":") + 1);
                document.getElementById('shortlistCount').innerHTML=result;
            }
        }

    }

    getCurrentUserTypeController(email){
        let initCurrentUserEntity = new currentUserEntity();
        var userType = initCurrentUserEntity.currentUserTypeEntity(email);
        return userType;
    }
 
    setCurrentUserTypeController(userType){
        if(userType == "seller"){
            //console.log("Current User, ",userType);
            document.getElementById('propertyShortlisted-button').style.display = "none";
            document.getElementById('propertyView').style.display = "block";
            document.getElementById('propertyShortlisted').style.display = "block";
        }
    }

    


}


