//import { auth, createToFireBase} from "./firebase.js";
import FirebaseClass from "./firebase.js";
//import { auth } from "./firebase.js";
import { loginController } from "./loginController.js";
import { sellerController } from "./sellerController.js";
import { buyerController } from "./buyerController.js";
import { buyerViewNewPropController } from "./buyerViewNewPropController.js";
import { reaController } from "./reaController.js";
import { buyerViewSLController } from "./buyerViewSLController.js";
import { rateReviewController } from "./rateReviewController.js";
 

export class registrationEntity{

    createToDB(newUser){
        let firebaseObj = new FirebaseClass();
        firebaseObj.createToFirebase(newUser);
    }
}

export class loginEntity{


    loginToFirebase(arg){       
        let firebaseObj = new FirebaseClass();
        var errorMessage = firebaseObj.checkEmailPassType(arg);
        return errorMessage;
    }

    

}

export class logoutEntity{
    constructor(){

    }
}

export class sellerEntity{
    constructor(){
    }
    getUserToEntity(currentEmail){
        let firebaseObj = new FirebaseClass();
        var name = firebaseObj.getCurrentUserSeller(currentEmail);
        return name;
        
    }

    setEntityDisplayName(displayNameFromFirebase,emailFromFirebase){
        let initSellerController = new sellerController();
        initSellerController.setSellerControllerDisplayName(displayNameFromFirebase,emailFromFirebase);
    }

    /*async getSellerProps(currentEmail){
        let firebaseObj = new FirebaseClass();
        var allSellerProps = await firebaseObj.getSellerProperties(currentEmail);
        return allSellerProps;
        
    }*/
}

export class buyerEntity{
    constructor(){

    }

    getUserToEntity(currentEmail){
        let firebaseObj = new FirebaseClass();
        var name = firebaseObj.getCurrentUserBuyer(currentEmail);
        return name;
    } 

    setEntityDisplayName(displayNameFromFirebase,currentEmail){
        let initBuyerController = new buyerController();
        initBuyerController.setBuyerControllerDisplayName(displayNameFromFirebase,currentEmail);
    }

    passSearchParamsToEntity(arg){
        let firebaseObj = new FirebaseClass();
        var searchResults = firebaseObj.getBuyerSearchListings(arg);
        return searchResults;
    }

    propDetailsSearchParamEntity(propertyID){
        let firebaseObj = new FirebaseClass();
        firebaseObj.retrieveDocWithID(propertyID);
    } 
    
    retrievePropDetailsEntity(details){
        let initFPDC = new fullPropertyDetailsController();
        initFPDC.receivePropDetails(details);
    }
 
    updateClickCount(propertyID){
        let firebaseObj = new FirebaseClass();
        firebaseObj.updateClickCount(propertyID);
    }
    
    /*shortlistProp(propID,currentEmail){
        let firebaseObj = new FirebaseClass();
        firebaseObj.shortlistProp(propID,currentEmail);
    }*/

    setEntityMessage(messageFromFirebase){
        let initBuyerController = new buyerController();
        initBuyerController.setControllerMessage(messageFromFirebase);
    }

    /*fetchBuyerSL(buyerEmail){
        let firebaseObj = new FirebaseClass();
        var allData = firebaseObj.fetchBuyerSL(buyerEmail);
        console.log(allData);
        return allData;
        
    }

    retrieveSL(allData){
        //let initBuyerSLController = new buyerSLController();
        //initBuyerSLController.displaySL(allData);
    }

    unSLProp(propID,buyerEmail){
        let firebaseObj = new FirebaseClass();
        firebaseObj.unSLProp(propID,buyerEmail);
    }*/

    
}

export class reaEntity{
    construtor(){
    
    }

    createPropertyListingToFirebase(arg){
       let firebaseObj = new FirebaseClass();
       var result = firebaseObj.storePropertyListingToDatabase(arg);
    }

    /*setEntityMessage(messageFromFirebase){
        let initCreatePLPageController = new createPropertyListingObject()
        initCreatePLPageController.setControllerMessage(messageFromFirebase);
    }*/

    getREAProps(currentEmail){
        let firebaseObj = new FirebaseClass();
        var allProps = firebaseObj.getREAPropListing(currentEmail);
        return allProps;
    }

    setEntityDisplayName(displayNameFromFirebase,currentREAEmail){
        let initREAController = new reaController();
        initREAController.setREAControllerDisplayName(displayNameFromFirebase,currentREAEmail);
    }

    getREAPropListEntity(allPropList){
        let initREAController = new reaController();
        initREAController.getREAPropListController(allPropList);
    }

    updatePropListDetails(arg){
        console.log("From entity rea", arg.sellerEmail);
        let firebaseObj = new FirebaseClass();
        firebaseObj.updatePropListDetails(arg);
    }

    markPropAsDeleted(propIDValue){
        let firebaseObj = new FirebaseClass();
        firebaseObj.markPropAsDeleted(propIDValue);
    }

    submitRating(arg){
        let firebaseObj = new FirebaseClass();
        firebaseObj.submitRating(arg);
    }

    reqRatings(currentREA){
        let firebaseObj = new FirebaseClass();
        let ratings =  firebaseObj.reqRatings(currentREA);
        return ratings;
    }

    retrieveRating(avgRating, countRating, allData){
        let initREAController = new reaController();
        initREAController.displayREARating(avgRating, countRating, allData);
    }

    setRREntityMessage(message){
        let initRRController = new rateReviewController();
        initRRController.setControllerMessage(message);
    }

    getREAName(currentEmail){
        let firebaseObj = new FirebaseClass();
        var name = firebaseObj.getCurrentUserREA(currentEmail);
        return name;

    }



     
}

export class currentUserEntity{
    constructor(){

    }

    currentUserTypeEntity(email){
        let firebaseObj = new FirebaseClass();
        var userType = firebaseObj.getCurrentUserType(email);
        return userType;
    
    } 

    setCurrentUserType(userType){
        let initbFPDC = new buyerFullPropertyDetailsController();
        initbFPDC.setCurrentUserTypeController(userType);
    }
}

export class propertyDetailsEntity{
    searchPropWithID(propertyID){
        let firebaseObj = new FirebaseClass();
        var propDetails = firebaseObj.retrieveDocWithID(propertyID);
        return propDetails;
    }
}

export class adminEntity{
    getActiveUsers(){
        let firebaseObj = new FirebaseClass();
        var list = firebaseObj.getActiveUsers();

    }
}

export function setEntityMessage(messageFromFirebase){
    
    var message = messageFromFirebase;
    console.log(message,'from Entity');
    setControllerMessage(messageFromFirebase);
}



    




