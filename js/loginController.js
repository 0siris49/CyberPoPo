import { loginUser } from "./loginEntity.js";

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

//Old Event Listener, causes Uncaught TypeError upon href at/to register page
/*document.getElementById('loginBtn').addEventListener('click',function(event){
    event.preventDefault();
    const userEmail = document.getElementById('loginEmail').value;
    const userPass = document.getElementById('loginPass').value;
    const userType = document.getElementById('role').value;

    let newUser = new User(userEmail,userPass,userType);
    
    loginUser(newUser);
 
})*/

document.addEventListener("DOMContentLoaded", () => {
    // your javascript code here
    const loginButton = document.querySelector("loginBtn");
    if (loginButton) {
        loginButton.addEventListener("click", function (event) {
            event.preventDefault();
            const userEmail = document.getElementById('loginEmail').value;
            const userPass = document.getElementById('loginPass').value;
            const userType = document.getElementById('role').value;

            let newUser = new User(userEmail, userPass, userType);

            loginUser(newUser);
        });
    }
});
//Login system
