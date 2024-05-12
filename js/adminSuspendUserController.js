import { adminSuspendUserEntity } from "./adminSuspendUserEntity.js";
export class adminSuspendUserController{
    suspendUser(userToSuspend){
        let initAdminSUEntity = new adminSuspendUserEntity();
        initAdminSUEntity.suspendUser(userToSuspend);
    }
}

document.body.addEventListener("click", function (e) {
    if (location.href.indexOf('AdminPage.html') > -1) {
        if (e.target.classList.contains("suspend-account-icon")) {


            var suspendModal = document.getElementById('suspendModal');
            suspendModal.style.display = "block";
            var userToSuspend = e.target.value;
            console.log("User to suspend, ", userToSuspend);

            var confirmButton = document.getElementById("suspend-confirm");
            confirmButton.addEventListener("click", async function (e) {
                e.preventDefault();

                let initAdminSUController = new adminSuspendUserController();
                initAdminSUController.suspendUser(userToSuspend);
               

            })

        }
    }

});