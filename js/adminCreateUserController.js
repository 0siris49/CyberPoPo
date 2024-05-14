import { userEntity } from "./userEntity.js";
export class adminCreateUserController{
    createUser(newUserObj){
        let initAdminCUEntity = new userEntity();
        var message = initAdminCUEntity.createUser(newUserObj);
        return message;
    }
}

class newUser{
    constructor(fN,lN,email,phone,userType,password){
        this.fN = fN;
        this.lN = lN;
        this.email = email;
        this.phone = phone;
        this.userType = userType;
        this.password = password;
    }
}

if (window.location.href.indexOf('createAccount.html') > -1) {
    var createBtn = document.getElementById('createBtn');
    createBtn.addEventListener("click", async function () {

        var fN = document.getElementById('firstName').value;
        var lN = document.getElementById('lastName').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var userType = document.getElementById('role').value;
        var password = document.getElementById('password').value;

        const newUserObj = new newUser(fN,lN,email,phone,userType,password);
        let initAdminCUController = new adminCreateUserController();
        var message = await initAdminCUController.createUser(newUserObj);
        if(message != ""){
            alert(message);
        }
    })
}