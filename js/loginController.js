import { loginEntity } from "./userEntity.js";

var controllerMessage = "";

export class User {
    constructor(userEmail, userPass, userType) {
        this.userEmail = userEmail;
        this.userPass = userPass;
        this.userType = userType;
    }

    setControllerMessage(entityMessage) {
        controllerMessage = entityMessage;
        console.log(controllerMessage, "from Controller");
        if (controllerMessage != "") {
            alert(controllerMessage);
        }
    }

}

export function setControllerMessage(entityMessage) {
    controllerMessage = entityMessage;
    console.log(controllerMessage, "from Controller");
    if (controllerMessage != "") {
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
            let initLoginEntity = new loginEntity();
            initLoginEntity.loginToFirebase(newUser);

        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
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
});


//Login system
