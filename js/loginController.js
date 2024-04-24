import { loginEntity } from "./userEntity.js";

var controllerMessage = "";

class User {
    constructor (userEmail, userPass, userType){
        this.userEmail = userEmail;
        this.userPass = userPass;
        this.userType = userType;
    }
}

export function setControllerMessage(entityMessage){
    controllerMessage = entityMessage;
    console.log(controllerMessage,"from Controller");
    if(controllerMessage != ""){
        alert(controllerMessage);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("loginBtn");
    if (loginButton) {
        loginButton.addEventListener("click", function (event) {
            event.preventDefault();
            const userEmail = document.getElementById('loginEmail').value;
            const userPass = document.getElementById('loginPass').value;
            const userType = document.getElementById('role').value;

            let newUser = new User(userEmail, userPass, userType);
            let initLoginEntity = new loginEntity(newUser);
            
        });
    }
});
//Login system
