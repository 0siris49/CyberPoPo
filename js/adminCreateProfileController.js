
import { profileEntity } from "./profileEntity.js";
export class adminCreateProfileController {
    createUserProfile(profileName) {
        let initProfileEntity = new profileEntity();
        var result = initProfileEntity.createUserProfile(profileName);
        return result;
    }
}

document.addEventListener("DOMContentLoaded", () => {

    if (window.location.href.indexOf('createProfile.html') > -1) {
        const createBtn = document.getElementById("createBtn");
        createBtn.addEventListener("click", async function () {
            var profileName = document.getElementById('profileName').value;
            let initAdminCPController = new adminCreateProfileController();
            var result = await initAdminCPController.createUserProfile(profileName);
            if (result != "") {
                alert(result);
            }

        })
    }

});