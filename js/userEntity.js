//import { auth, createToFireBase} from "./firebase.js";
import FirebaseClass from "./firebase.js";
import { auth } from "./firebase.js";
import { setControllerMessage } from "./loginController.js";
import { sellerController } from "./sellerController.js";
import { buyerController } from "./buyerController.js";
import { createPropertyListingObject } from "./createPLPageController.js";


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
    constructor(arg){
        var email = arg.userEmail;
        var password = arg.userPass;
        var type = arg.userType;
        console.log("From Login Entity, ",email,password,type);
        
        let firebaseObj = new FirebaseClass();
        firebaseObj.checkEmailPassType(email,password,type);
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
        initSellerController.setSellerPropList(propList);
        
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

    
}

export class reaEntity{
    construtor(){
    
    }

    createPropertyListingToFirebase(arg){
        let firebaseObj = new FirebaseClass();
       var result = firebaseObj.storePropertyListingToDatabase(arg);
       console.log(result," From reaEntity")
    }

    setEntityMessage(messageFromFirebase){
        let initCreatePLPageController = new createPropertyListingObject()
        initCreatePLPageController.setControllerMessage(messageFromFirebase);
    }



    
}

export function setEntityMessage(messageFromFirebase){
    
    var message = messageFromFirebase;
    console.log(message,'from Entity');
    setControllerMessage(messageFromFirebase);
}



    




