//import { auth, createToFireBase} from "./firebase.js";
import FirebaseClass from "./firebase.js";
import { auth } from "./firebase.js";
import { setControllerMessage } from "./loginController.js";


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

export function setEntityMessage(messageFromFirebase){
    
    var message = messageFromFirebase;
    console.log(message,'from Entity');
    setControllerMessage(messageFromFirebase);
}



    




