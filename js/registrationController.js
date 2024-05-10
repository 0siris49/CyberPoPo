//Registration Controller

import { registrationEntity } from "./userEntity.js";
class User {
    constructor(userEmail, userPass, userType, dayDOB, monthDOB, yearDOB, firstName, lastName, phoneNum) {
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


document.getElementById('regBtn').addEventListener('click', function (event) {
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
    if (document.getElementById('buyer').checked) {
        const userRole = document.getElementById('buyer').value;
        userType = userRole;
    } else if (document.getElementById('seller').checked) {
        const userRole = document.getElementById('seller').value;
        userType = userRole;
    } else if (document.getElementById('REA').checked) {
        const userRole = document.getElementById('REA').value;
        userType = userRole;
    }
    let newUser = new User(userEmail, userPass, userType, dayDOB, monthDOB, yearDOB, firstName, lastName, phoneNum);
    let initRegEntity = new registrationEntity();
    initRegEntity.createToDB(newUser);
})

document.addEventListener("DOMContentLoaded", function() {
    if(window.location.href.indexOf('register.html') > -1){
        const regBtn = document.getElementById('regBtn');
        const fName = document.getElementById('regFName');
        const lName = document.getElementById('regLName');
        const email = document.getElementById('regEmail');
        const phone = document.getElementById('regNum');
        const password = document.getElementById('regPassword');
        const dobDay = document.getElementById('regDobDay');
        const dobMonth = document.getElementById('regDobMonth');
        const dobYear = document.getElementById('regDobYear');
    
        regBtn.addEventListener('click', function(event) {
            let hasEmptyFields = false;
            let fields = [fName, lName, email, phone, password, dobDay, dobMonth, dobYear];
    
            fields.forEach(field => {
                if (field.value.trim() === "") {
                    field.style.border = "2px solid red";
                    hasEmptyFields = true;
                } else {
                    field.style.border = "";
                }
            });
    
            if (hasEmptyFields) {
                event.preventDefault(); // Prevent form submission
                alert('Please fill out all required fields.');
            }
        });
    }
    
});

//Registers user to Firebase
