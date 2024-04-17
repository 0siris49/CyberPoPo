import { checkEmailPassType } from "./firebase.js";

export function loginUser(arg){
    var email = arg.userEmail;
    var password = arg.userPass;
    var type = arg.userType;

    checkEmailPassType(email, password, type);
}