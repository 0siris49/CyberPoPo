import { loginUser } from "./loginEntity.js";

class User {
    constructor (userEmail, userPass, userType){
        this.userEmail = userEmail;
        this.userPass = userPass;
        this.userType = userType;
    }
}

document.getElementById('loginBtn').addEventListener('click',function(event){
    event.preventDefault();
    const userEmail = document.getElementById('loginEmail').value;
    const userPass = document.getElementById('loginPass').value;
    const userType = document.getElementById('role').value;

    let newUser = new User(userEmail,userPass,userType);
    
    loginUser(newUser);
})
//Login system
