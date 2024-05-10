import {
    adminViewAllAccountsEntity
} from "./adminViewAllAccountsEntity.js";

export class adminViewAllAccountsController {
    getUserList() {
        let initAdminVAAEntity = new adminViewAllAccountsEntity();
        var userList = initAdminVAAEntity.getUserList();
        return userList;
    }

    displayUserList(userList) {
        var stringArr = userList.split("---");
        var totalUserList = stringArr.length - 1;
        const table = document.getElementById('data-table');
        var email = [];
        var firstName = [];
        var lastName = [];
        var status = [];
        var type = [];
        var tableRows = document.getElementsByTagName('tr');
        var rowCount = tableRows.length;

        for (let i = rowCount - 1; i > 0; i--) {
            table.removeChild(tableRows[i]);
        }


        for (let i = 0; i < totalUserList; i++) {
            var splitToAttri = stringArr[i].split(",");
            var splitToAttriCount = splitToAttri.length;


            for (let x = 0; x < splitToAttriCount; x++) {
                var attriString = splitToAttri[x].toString();
                var removeEtc = attriString.replace(/['"{}]+/g, '');
                //console.log(attriString);

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
        }


        for (let i = 0; i < totalUserList; i++) {
            const row = document.createElement('tr');
            row.innerHTML = `<td>X</td>
            <td>${firstName[i]}</td>
            <td>${lastName[i]}</td>
            <td>${email[i]}</td>
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


if (window.location.href.indexOf('AdminPage.html') > -1) {
    var viewAccBtn = document.getElementById('viewAccounts');
    viewAccBtn.addEventListener("click", async function () {
        let initAdminVAAController = new adminViewAllAccountsController();
        var userList = await initAdminVAAController.getUserList();
        initAdminVAAController.displayUserList(userList);

    })
}