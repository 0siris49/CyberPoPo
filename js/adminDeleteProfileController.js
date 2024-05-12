//import { adminDeleteProfileEntity } from "./adminDeleteProfileEntity.js";
import { profileEntity } from "./profileEntity.js";
export class adminDeleteProfileController{
    deleteProfile(profileType){
        let initAdminDPEntity = new adminDeleteProfileEntity();
        var result = initAdminDPEntity.deleteProfile(profileType);
        return result;
    }
}

document.body.addEventListener("click", function (e) {
    if (location.href.indexOf('AdminPageProfiles.html') > -1) {
        if (e.target.classList.contains("delete-profile-icon")) {

            var deleteModal = document.getElementById('deleteModal');
            deleteModal.style.display = "block";
            var profileToDelete = e.target.value;
            console.log("Profile to suspend, ", profileToDelete);

            var confirmButton = document.getElementById("delete-confirm");
            confirmButton.addEventListener("click", async function (e) {
                e.preventDefault();
                let initAdminDPController = new adminDeleteProfileController();
                var result = await initAdminDPController.deleteProfile(profileToDelete);
                if(result != ""){
                    alert(result);
                }

               

            })

        }
    }

});