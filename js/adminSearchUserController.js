import {
    adminSearchUserEntity
} from "./adminSearchUserEntity.js";

export class adminSearchUserController {
    searchUser(searchEmail){
        let initAdminSUEntity = new adminSearchUserEntity();
        var result = initAdminSUEntity.searchUser(searchEmail);
        return result;
    }

    displayUser(result){
        if(result == ""){
            alert("User does not exist in database");
        }else{
            var resultSplit = result.split(",");
            var email = [];
            var firstName = [];
            var lastName = [];
            var status = [];
            var type = [];

            const table = document.getElementById('data-table');
            var tableRows = document.getElementsByTagName('tr');
            var rowCount = tableRows.length;
    
            for (let i = rowCount - 1; i > 0; i--) {
                table.removeChild(tableRows[i]);
            }


            for(let i=0;i<resultSplit.length;i++){
                var removeEtc = resultSplit[i].replace(/['"{}]+/g, '');
                if (removeEtc.search("Email") != -1) {
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                    //console.log(result);
                    email.push(result);
                }
                if (removeEtc.search("FirstName") != -1) {
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                    //console.log(result);
                    firstName.push(result);
                }
                if (removeEtc.search("LastName") != -1) {
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                    //console.log(result);
                    lastName.push(result);
                }
                if (removeEtc.search("userStatus") != -1) {
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                    //console.log(result);
                    status.push(result);
                }
                if (removeEtc.search("userType") != -1) {
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                    //console.log(result);
                    type.push(result);
                }

            }

            for (let i = 0; i < email.length; i++) {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${type[i]}</td>
                <td>${firstName[i]}</td>
                <td>${lastName[i]}</td>
                <td><a href="userDetails.html?email=${email[i]}">${email[i]}</a></td>
                <td>${status[i]}</td>
                <td><button class="update-account-icon" style="cursor: pointer" value="${email[i]}">
                Update Account
            </button>
            <button class="delete-account-icon" style="cursor: pointer" value="${email[i]}">
                Delete Account
            </button>
            <button class="suspend-account-icon" style="cursor: pointer" value="${email[i]}">
                Suspend Account
            </button></td>`;
                table.appendChild(row);
            }

            
        }
    }
}


if (location.href.indexOf('AdminPage.html') > -1) {
    const searchBtn = document.getElementById('admin-search-button');
    searchBtn.addEventListener("click",async function(){
        var searchEmail = document.getElementById('search-id').value;
        let initAdminSUController = new adminSearchUserController();
        var result = await initAdminSUController.searchUser(searchEmail);
        initAdminSUController.displayUser(result);
        
    })
}