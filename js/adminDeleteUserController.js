import { userEntity } from "./userEntity.js";

export class adminDeleteUserController{
    deleteUser(userToDelete){
        let initAdminDUEntity = new userEntity();
        var result = initAdminDUEntity.deleteUser(userToDelete);
        return result;
    }
}

document.body.addEventListener("click", function (e) {
    if (location.href.indexOf('AdminPage.html') > -1) {
        if (e.target.classList.contains("delete-account-icon")) {


            var deleteModal = document.getElementById('deleteModal');
            deleteModal.style.display = "block";
            var userToDelete = e.target.value;
            console.log("User to delete, ", userToDelete);

            var confirmButton = document.getElementById("delete-confirm");
            confirmButton.addEventListener("click", async function (e) {
                e.preventDefault();
                let initAdminDUController = new adminDeleteUserController();
                var result = await initAdminDUController.deleteUser(userToDelete);
                if(result != ""){
                    alert(result);
                }

               

            })

        }
    }

});