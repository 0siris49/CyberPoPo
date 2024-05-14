
import { profileEntity } from "./profileEntity.js";
export class adminUpdateProfileController {
    updateProfile(userObj){
        let initProfileEntity = new profileEntity();
        var result = initProfileEntity.updateProfile(userObj);
        return result;
    }
}

class userProfileObj{
    constructor(firstName,lastName,phone,password,dayDOB,monthDOB,yearDOB,userToUpdate){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.password = password;
        this.dayDOB = dayDOB;
        this.monthDOB = monthDOB;
        this.yearDOB = yearDOB;
        this.userToUpdate = userToUpdate;
    }
}

document.body.addEventListener("click", function (e) {
    if (location.href.indexOf('AdminPage.html') > -1) {
        if (e.target.classList.contains("update-account-icon")) {


            var updateModal = document.getElementById('updateModal');
            updateModal.style.display = "block";
            var userToUpdate = e.target.value;
            console.log("User to update, ", userToUpdate);

            var submitButton = document.getElementById("submitUpdateForm");
            submitButton.addEventListener("click", async function (e) {
                e.preventDefault();

                var firstName = document.getElementById("account_fname").value;
                var lastName = document.getElementById("account_lname").value;
                var phone = document.getElementById("account_phone").value;
                var password = document.getElementById("account_password").value;
                var dayDOB = document.getElementById("regDobDay").value;
                var monthDOB = document.getElementById("regDobMonth").value;
                var yearDOB = document.getElementById("regDobYear").value;

                let userObj = new userProfileObj(firstName,lastName,phone,password,dayDOB,monthDOB,yearDOB,userToUpdate);
                let initAdminUpdateProfileController = new adminUpdateProfileController();
                var error = await initAdminUpdateProfileController.updateProfile(userObj);
                if(error == true){
                    alert("User updated successfully");
                }
                




            })

        }
    }

});