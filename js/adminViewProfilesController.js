import { profileEntity } from "./profileEntity.js";
export class adminViewProfilesController{
    getProfileList(){
        let initProfileEntity = new profileEntity();
        var profileList = initProfileEntity.getProfileList();
        return profileList;
    }

    displayProfileList(profileList){
      var profileType = profileList.allProfiles;
      var profileStatus = profileList.allStatus;  
      var table = document.getElementById('data-table');
      for(let i=0;i<profileType.length;i++){
        const row = document.createElement('tr');
            row.innerHTML = `
            <td>${profileType[i]}</td>
            <td>${profileStatus[i]}</td>
            <td>
                <button class="suspend-profile-icon" style="cursor: pointer" value="${profileType[i]}">
                Suspend Profile
                </button>
                <button class="search-profile-icon" style="cursor: pointer" value="${profileType[i]}">
                Search Profile
                </button>
                <button class="delete-profile-icon" style="cursor: pointer" value="${profileType[i]}">
                Delete Profile
                </button>
            </td>
            `;
            table.appendChild(row);
      }
    }
}

if (window.location.href.indexOf('AdminPageProfiles.html') > -1) {
    
    let initadminVPController = new adminViewProfilesController();
    var profileList = await initadminVPController.getProfileList();
    initadminVPController.displayProfileList(profileList);
    
    
    
}

