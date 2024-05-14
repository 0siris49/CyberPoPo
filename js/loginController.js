import { userEntity } from "./userEntity.js";
var controllerMessage = "";

export class loginController {
    

    setControllerMessage(entityMessage) {
        controllerMessage = entityMessage;
        console.log(controllerMessage, "from Controller");
        if (controllerMessage != "") {
            alert(controllerMessage);
        }
    }

    loginToFirebase(newUser){
        let initLoginEntity = new userEntity();
        var errorMessage = initLoginEntity.loginToFirebase(newUser);
        return errorMessage;
    }

}

class User{
    constructor(userEmail, userPass, userType) {
        this.userEmail = userEmail;
        this.userPass = userPass;
        this.userType = userType;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if(window.location.href.indexOf('Login.html') > -1){
        const loginButton = document.getElementById("loginBtn");
        if (loginButton) {
            loginButton.addEventListener("click", async function (event) {
                event.preventDefault();
                const userEmail = document.getElementById('loginEmail').value;
                const userPass = document.getElementById('loginPass').value;
                const userType = document.getElementById('role').value;
    
                let newUser = new User(userEmail, userPass, userType);
                let initLoginController = new loginController();
                var errorMessage = await initLoginController.loginToFirebase(newUser);
                if(errorMessage != null){
                    alert(errorMessage);
                }
                
    
            });
        }
    }
    
});

document.addEventListener("DOMContentLoaded", function () {
    if(window.location.href.indexOf('Login.html') > -1){
        const loginBtn = document.getElementById('loginBtn');
        const emailInput = document.getElementById('loginEmail');
        const passwordInput = document.getElementById('loginPass');
    
        loginBtn.addEventListener('click', function (event) {
            let hasEmptyFields = false;
            if (emailInput.value.trim() === "") {
                emailInput.style.border = "2px solid red";
                hasEmptyFields = true;
            } else {
                emailInput.style.border = "";
            }
            if (passwordInput.value.trim() === "") {
                passwordInput.style.border = "2px solid red";
                hasEmptyFields = true;
            } else {
                passwordInput.style.border = "";
            }
    
            if (hasEmptyFields) {
                event.preventDefault();
                alert('Please fill out all fields.');
            }
        });
    }
    
});


//Login system
