
import { profileEntity } from "./profileEntity.js";

export class adminSearchProfileController {
    searchProfile(searchType) {
        let initProfileEntity = new profileEntity();
        var userList = initProfileEntity.searchProfile(searchType);
        return userList;
    }

    displayProfileUserList(userList) {
        var ProfileTable = document.getElementById('retrieved-profile');
        ProfileTable.style.display = 'inline-block';
        var stringArr = userList.split("---");
        var totalUserList = stringArr.length - 1;
        const tableDiv = document.getElementById('profileSearchTable');
        const table = document.getElementById('tableDiv');
        var email = [];
        var status = [];
        var type = [];
        var tableRows = document.getElementsByClassName("searchResult");
        var rowCount = tableRows.length;

        for (let i = rowCount-1; i >= 0; i--) {
            tableDiv.removeChild(tableRows[i]);
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
            row.setAttribute("class","searchResult");
            row.innerHTML = `<td>${type[i]}</td>
            <td>${status[i]}</td>
            <td>${email[i]}</td>
            `;
            tableDiv.appendChild(row);
        }
    }
}

document.body.addEventListener("click", async function (e) {
    if (location.href.indexOf('AdminPageProfiles.html') > -1) {
        if (e.target.classList.contains("search-profile-icon")) {
            var searchType = e.target.value;

            let initAdminSPController = new adminSearchProfileController();
            var userList = await initAdminSPController.searchProfile(searchType);
            initAdminSPController.displayProfileUserList(userList);

        }
    }

});
