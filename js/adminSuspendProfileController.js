
import { profileEntity } from "./profileEntity.js";
export class adminSuspendProfileController{
    suspendProfile(profileToSuspend){
        let initProfileEntity = new profileEntity();
        var result = initProfileEntity.suspendProfile(profileToSuspend);
        return result;
    }
}

document.body.addEventListener("click", function (e) {
    if (location.href.indexOf('AdminPageProfiles.html') > -1) {
        if (e.target.classList.contains("suspend-profile-icon")) {

            var suspendModal = document.getElementById('suspendModal');
            suspendModal.style.display = "block";
            var profileToSuspend = e.target.value;
            console.log("Profile to suspend, ", profileToSuspend);

            var confirmButton = document.getElementById("suspend-confirm");
            confirmButton.addEventListener("click", async function (e) {
                e.preventDefault();

                let initAdminSPController = new adminSuspendProfileController();
                var result = await initAdminSPController.suspendProfile(profileToSuspend);
                if(result != ""){
                    alert(result);
                }
               

            })

        }
    }

});