import { propertyListingEntity } from "./propertyListingEntity.js";
import { userEntity } from "./userEntity.js";



document.addEventListener("DOMContentLoaded", async function() {
    if(window.location.href.indexOf('fullPropertyDetails.html') > -1){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const propertyID = urlParams.get('propertyId');
        const email = urlParams.get('email');
        const avail = urlParams.get('avail');
        
        let initFPDC = new buyerViewOldPropController();
        var userType = await initFPDC.getCurrentUserTypeController(email);
        //This function is just to set the shortlist button visible, all stats invisible to BUYER
        //Will be the opposite for Seller, so that seller can see all stats but cannot shortlist
        initFPDC.setCurrentUserTypeController(userType); 
        if(avail == "Unavailable"){
            console.log("From buyerViewOLDProp");
            var propDetails = await initFPDC.passSearchParamPropDetails(propertyID);
            initFPDC.receivePropDetails(propDetails);
        }
        

    }
    
    
});



export class buyerViewOldPropController {

    passSearchParamPropDetails(propertyID) {
        let initPLEntity = new propertyListingEntity();
        var propDetails =  initPLEntity.searchPropWithID(propertyID);
        return propDetails;
    }

    receivePropDetails(details) {

        var stringArr = details.split(",");
        var totalPropList = stringArr.length - 1;


        for(let i=0; i<=totalPropList; i++){
            const currentAttri = stringArr[i].toString();
            var removeStuff = currentAttri.replace(/['"{}]+/g, '');
            //console.log(removeStuff);

            if (removeStuff.search("propertyPrice")!= -1) {
                var result = removeStuff.substring(removeStuff.lastIndexOf(":") + 1);
                document.getElementById('property_price').innerHTML=result;
            }

            if (removeStuff.search("propertyName") != -1) {
                var result = removeStuff.substring(removeStuff.lastIndexOf(":") + 1);
                document.getElementById('property_name').innerHTML=result;
            }
            if (removeStuff.search("propertyDescription") != -1) {
                var result = removeStuff.substring(removeStuff.lastIndexOf(":") + 1);
                document.getElementById('property_description').innerHTML=result;
            }

            if (removeStuff.search("propertyType") != -1) {
                var result = removeStuff.substring(removeStuff.lastIndexOf(":") + 1);
                document.getElementById('property_type').innerHTML=result;
            }

            if (removeStuff.search("propertyBedroom") != -1) {
                var result = removeStuff.substring(removeStuff.lastIndexOf(":") + 1);
                document.getElementById('property_bedroom').innerHTML=result;
            }

            if (removeStuff.search("propAgent") != -1) {
                var result = removeStuff.substring(removeStuff.lastIndexOf(":") + 1);
                document.getElementById('property_agent').innerHTML=result;
            }

            if (removeStuff.search("propertyLocation") != -1) {
                var result = removeStuff.substring(removeStuff.lastIndexOf(":") + 1);
                document.getElementById('property_location').innerHTML=result;
            }

            if (removeStuff.search("propertyBathroom") != -1) {
                var result = removeStuff.substring(removeStuff.lastIndexOf(":") + 1);
                document.getElementById('property_bathroom').innerHTML=result;
            }
            if (removeStuff.search("propertyYearBuilt") != -1) {
                var result = removeStuff.substring(removeStuff.lastIndexOf(":") + 1);
                document.getElementById('year_built').innerHTML=result;
            }
            if (removeStuff.search("propertySize") != -1) {
                var result = removeStuff.substring(removeStuff.lastIndexOf(":") + 1);
                document.getElementById('property_size').innerHTML=result;
            }
            if (removeStuff.search("propertyAGTID") != -1) {
                var result = removeStuff.substring(removeStuff.lastIndexOf(":") + 1);
                document.getElementById('agent_id').innerHTML=result;
            }
            if (removeStuff.search("propertySeller") != -1) {
                var result = removeStuff.substring(removeStuff.lastIndexOf(":") + 1);
                document.getElementById('property_seller').innerHTML=result;
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
        if(userType == "buyer"){
            //console.log("Current User, ",userType);
            document.getElementById('propertyShortlisted-button').style.display = "block";
            document.getElementById('propertyView').style.display = "none";
            document.getElementById('propertyShortlisted').style.display = "none";
            document.getElementById('mortgageCalc').style.display = "block";
        }
    }

    updateClickCount(propertyID){
        let initPropListEntity = new propertyListingEntity();
        initPropListEntity.updateClickCount(propertyID);
    }


}


