//import { auth, createToFireBase} from "./firebase.js";
import FirebaseClass from "./firebase.js";
import { auth } from "./firebase.js";
import { User } from "./loginController.js";
import { sellerController } from "./sellerController.js";
import { buyerController } from "./buyerController.js";
import { createPropertyListingObject } from "./createPLPageController.js";
import { fullPropertyDetailsController } from "./fullPropertyDetailsController.js";
import { reaController } from "./reaController.js";
import { buyerSLController } from "./buyerSLController.js";
import { rateReviewController } from "./rateReviewController.js";
 

export class registrationEntity{
 
    constructor(arg){
    var email = arg.userEmail;
    var password = arg.userPass;
    var type = arg.userType;
    var dayDOB = arg.dayDOB; 
    var monthDOB = arg.monthDOB;
    var yearDOB = arg.yearDOB;
    var firstName = arg.firstName;
    var lastName = arg.lastName;
    var phoneNum = arg.phoneNum;
    
    
    let firebaseObj = new FirebaseClass();
    firebaseObj.createToFireBase(auth,email,password,type,dayDOB,monthDOB,yearDOB,firstName,lastName,phoneNum);
    
    }   
}

export class loginEntity{
    constructor(){ 
        
    }

    loginToFirebase(arg){
        var email = arg.userEmail;
        var password = arg.userPass;
        var type = arg.userType;
        //console.log("From Login Entity, ",email,password,type);
        
        let firebaseObj = new FirebaseClass();
        firebaseObj.checkEmailPassType(email,password,type);
    }

    setEntityMessage(messageFromFirebase){
    
        var message = messageFromFirebase;
        console.log(message,'from Entity');
        let initLoginController = new User();
        initLoginController.setControllerMessage(messageFromFirebase);
    }

}

export class logoutEntity{
    constructor(){

    }
}

export class sellerEntity{
    constructor(){
    }
    getUserToEntity(){
        let firebaseObj = new FirebaseClass();
        firebaseObj.getCurrentUserSeller();
    }

    setEntityDisplayName(displayNameFromFirebase){
        let initSellerController = new sellerController();
        initSellerController.setSellerControllerDisplayName(displayNameFromFirebase);
    }

    getSellerPropList(propList){
        let initSellerController = new sellerController();
        initSellerController.holdSellerPropList(propList);
        
    }
}

export class buyerEntity{
    constructor(){

    }

    getUserToEntity(){
        let firebaseObj = new FirebaseClass();
        firebaseObj.getCurrentUserBuyer();
    }

    setEntityDisplayName(displayNameFromFirebase){
        let initBuyerController = new buyerController();
        initBuyerController.setBuyerControllerDisplayName(displayNameFromFirebase);
    }

    passSearchParamsToEntity(arg){
        let firebaseObj = new FirebaseClass();
        firebaseObj.getBuyerSearchListings(arg);
    }

    retrieveSearchResultsEntity(searchResult){
        let initBuyerController = new buyerController();
        initBuyerController.displaySearchResultsController(searchResult);
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
    
    shortlistProp(propID){
        let firebaseObj = new FirebaseClass();
        firebaseObj.shortlistProp(propID);
    }

    setEntityMessage(messageFromFirebase){
        let initBuyerController = new buyerController();
        initBuyerController.setControllerMessage(messageFromFirebase);
    }

    fetchBuyerSL(){
        let firebaseObj = new FirebaseClass();
        firebaseObj.fetchBuyerSL();
        
    }

    retrieveSL(allData){
        let initBuyerSLController = new buyerSLController();
        initBuyerSLController.displaySL(allData);
    }

    unSLProp(propID){
        let firebaseObj = new FirebaseClass();
        firebaseObj.unSLProp(propID);
    }

    
}

export class reaEntity{
    construtor(){
    
    }

    createPropertyListingToFirebase(arg){
       let firebaseObj = new FirebaseClass();
       var result = firebaseObj.storePropertyListingToDatabase(arg);
    }

    setEntityMessage(messageFromFirebase){
        let initCreatePLPageController = new createPropertyListingObject()
        initCreatePLPageController.setControllerMessage(messageFromFirebase);
    }

    getUserToEntity(){
        let firebaseObj = new FirebaseClass();
        firebaseObj.getCurrentUserREA();
    }

    setEntityDisplayName(displayNameFromFirebase){
        let initREAController = new reaController();
        initREAController.setREAControllerDisplayName(displayNameFromFirebase);
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

    reqRatings(){
        let firebaseObj = new FirebaseClass();
        firebaseObj.reqRatings();
    }

    retrieveRating(avgRating, countRating, allData){
        let initREAController = new reaController();
        initREAController.displayREARating(avgRating, countRating, allData);
    }

    setRREntityMessage(message){
        let initRRController = new rateReviewController();
        initRRController.setControllerMessage(message);
    }



    
}

export class currentUserEntity{
    constructor(){

    }

    currentUserTypeEntity(){
        let firebaseObj = new FirebaseClass();
        firebaseObj.getCurrentUserType();
    
    }

    setCurrentUserType(userType){
        let initFPDC = new fullPropertyDetailsController();
        initFPDC.setCurrentUserTypeController(userType);
    }
}

export function setEntityMessage(messageFromFirebase){
    
    var message = messageFromFirebase;
    console.log(message,'from Entity');
    setControllerMessage(messageFromFirebase);
}



    




