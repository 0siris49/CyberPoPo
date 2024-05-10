import { adminEntity } from "./userEntity.js";

const fetchButton = document.getElementById('viewAccounts');
fetchButton.addEventListener("click", function fetchAccounts(){
    let initAdminController = new adminController();
    var list = initAdminController.getActiveUsers();
})

export class adminController{
    getActiveUsers(){
        let initAdminEntity = new adminEntity();
        var list = initAdminEntity.getActiveUsers();
    }
}