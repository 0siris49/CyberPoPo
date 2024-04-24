//Registration Controller
import { registerUser } from "./registrationEntity.js";

class User {
    constructor (userEmail, userPass, userType, dayDOB, monthDOB, yearDOB,firstName,lastName,phoneNum){
        this.userEmail = userEmail;
        this.userPass = userPass;
        this.userType = userType;
        this.dayDOB = dayDOB;
        this.monthDOB = monthDOB;
        this.yearDOB = yearDOB;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNum = phoneNum;
    }
}//Creating User Object


document.getElementById('regBtn').addEventListener('click',function(event){
    event.preventDefault();
    const userEmail = document.getElementById('regEmail').value;
    const userPass = document.getElementById('regPassword').value;
    const dayDOB = document.getElementById('regDobDay').value;
    const monthDOB = document.getElementById('regDobMonth').value;
    const yearDOB = document.getElementById('regDobYear').value;
    const firstName = document.getElementById('regFName').value;
    const lastName = document.getElementById('regLName').value;
    const phoneNum = document.getElementById('regNum').value;
    var userType = '';
    if(document.getElementById('buyer').checked){
        const userRole = document.getElementById('buyer').value;
        userType = userRole;
    }else if(document.getElementById('seller').checked){
        const userRole = document.getElementById('seller').value;
        userType = userRole;
    }else if(document.getElementById('REA').checked){
        const userRole = document.getElementById('REA').value;
        userType = userRole;
    }
    let newUser = new User(userEmail,userPass,userType,dayDOB,monthDOB,yearDOB,firstName,lastName,phoneNum);
    
    registerUser(newUser);
})
//Registers user to Firebase
