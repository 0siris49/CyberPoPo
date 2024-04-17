import { auth, createToFireBase} from "./firebase.js";

export function registerUser(arg){
    var email = arg.userEmail;
    var password = arg.userPass;
    var type = arg.userType;

    createToFireBase(auth,email,password,type);
    
}




