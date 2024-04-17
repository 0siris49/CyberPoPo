//Registration Controller
import { registerUser } from "./registrationEntity.js";

class User {
    constructor (userEmail, userPass, userType){
        this.userEmail = userEmail;
        this.userPass = userPass;
        this.userType = userType;
    }
}//Creating User Object


document.getElementById('regBtn').addEventListener('click',function(event){
    event.preventDefault();
    const userEmail = document.getElementById('regEmail').value;
    const userPass = document.getElementById('regPassword').value;
    const userType = document.getElementById('role').value;

    let newUser = new User(userEmail,userPass,userType);
    
    //storeByUserType(newUser);
    registerUser(newUser);
})
//Registers user to Firebase
