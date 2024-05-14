import { propertyListingEntity } from "./propertyListingEntity.js";
import {
    userEntity
} from "./userEntity.js";



document.addEventListener("DOMContentLoaded", async function() {
    if(window.location.href.indexOf('fullPropertyDetails.html') > -1){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const propertyID = urlParams.get('propertyId');
        const email = urlParams.get('email');
        let initSellerVCController = new sellerViewViewCountController();
        var userType = await initSellerVCController.getCurrentUserTypeController(email);
        initSellerVCController.setCurrentUserTypeController(userType); 
        var propDetails = await initSellerVCController.passSearchParamPropDetails(propertyID);
        initSellerVCController.displayViewCount(propDetails);
        initSellerVCController.updateClickCount(propertyID);

    }
    
    
});



export class sellerViewViewCountController {

    passSearchParamPropDetails(propertyID) {
        let initPLEntity = new propertyListingEntity();
        var propDetails =  initPLEntity.searchPropWithID(propertyID);
        return propDetails;
    }

    displayViewCount(details) {

        var stringArr = details.split(",");
        var totalPropList = stringArr.length - 1;


        for(let i=0; i<=totalPropList; i++){
            const currentAttri = stringArr[i].toString();
            var removeStuff = currentAttri.replace(/['"{}]+/g, '');
 
            if (removeStuff.search("propViewCount") != -1) {
                var result = removeStuff.substring(removeStuff.lastIndexOf(":") + 1);
                document.getElementById('paraViewCount').innerHTML=result;
            }
        }
 

        

        //console.log(cleanName,"||",cleanLocation,"||",cleanType,"||",cleanDesc,"||",cleanPrice,"||",cleanBedroom,"||",cleanBathroom,"||",cleanSize,"||",cleanYearBuilt,"||",cleanREAName,"||",cleanID,"||",cleanSellerEmail);
    }

    getCurrentUserTypeController(email){
        let initCurrentUserEntity = new userEntity();
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

    updateClickCount(propertyID){
        let initPropListEntity = new propertyListingEntity();
        initPropListEntity.updateClickCount(propertyID);
    }


}


