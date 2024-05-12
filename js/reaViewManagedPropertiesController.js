
import { propertyListingEntity } from "./propertyListingEntity.js";
export class reaViewManagedPropertiesController{
    /*getREAProps(currentEmail) {
        let initReaViewManagedPropertiesEntity = new reaViewManagedPropertiesEntity();
        var allProps = initReaViewManagedPropertiesEntity.getREAProps(currentEmail);
        return allProps;
    }*/

    getREAProps(currentEmail) {
        let propListEntity = new propertyListingEntity();
        var allProps = propListEntity.getREAProps(currentEmail);
        return allProps;
    }


    displayPropList(allPropList) {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const email = urlParams.get('rea');
        var stringArr = allPropList.split("---");
        var totalPropList = stringArr.length - 1;
        const table = document.getElementById('table');
        var cleanID = [];
        var cleanPropName = [];
        var cleanAgent = [];
        var cleanStatus = [];
        var cleanAvgRating = [];
        var cleanLocation = [];
        var resultRating = 0;
        var ratingCount = 0;


        for (let i = 0; i < totalPropList; i++) {
            var splitToAttri = stringArr[i].split(",");
            var splitToAttriCount = splitToAttri.length;


            for (let x = 0; x < splitToAttriCount; x++) {
                var attriString = splitToAttri[x].toString();
                var removeEtc = attriString.replace(/['"{}]+/g, '');
                //console.log(attriString);

                if (removeEtc.search("propertyID") != -1) {
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                    //console.log(result);
                    cleanID.push(result);
                }

                if (removeEtc.search("propertyName") != -1) {
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                    //console.log(result);
                    cleanPropName.push(result);
                }

                if (removeEtc.search("propertyAgent") != -1) {
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                    ///console.log(result);
                    cleanAgent.push(result);
                }

                if (removeEtc.search("propStatus") != -1) {
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                    ///console.log(result);
                    cleanStatus.push(result);
                }

                if (removeEtc.search("propertyLocation") != -1) {
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                    ///console.log(result);
                    cleanLocation.push(result);
                }

                if (removeEtc.search("propRating") != -1) {
                    resultRating = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);


                }



                if (removeEtc.search("propRTC") != -1) {
                    ratingCount = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                }
                if (resultRating == 0 && ratingCount == 0) {
                    cleanAvgRating.push("No Ratings Yet");
                } else {
                    cleanAvgRating.push(resultRating / ratingCount);
                }
            }
        }


        for (let x = 0; x < totalPropList; x++) {
            //console.log(cleanID[x]);
            ///console.log(cleanPropName[x]);
            ///console.log(cleanAgent[x]);

        }

        for (let i = 0; i < totalPropList; i++) {
            const row = document.createElement('tr');
            row.innerHTML = `<td id="p">${cleanID[i]}</td>
            <td><a href="fullPropertyDetails.html?propertyId=${cleanID[i]}&email=${email}"> <div>${cleanPropName[i]}</div>  </a></td>
            <td>${cleanLocation[i]}</td>
            <td>${cleanAvgRating[i]}</td>
            <td></td>
            <td>${cleanStatus[i]}</td>
            <td><button class="rea-update-button" name="rea-update-button" style="cursor: pointer" value="${cleanID[i]}"}>Update</button>
            <button class="rea-delete-button" name="rea-delete-button" style="cursor: pointer" value="${cleanID[i]}">Delete</button></td>`;
            table.appendChild(row);

        }

    }
}

document.addEventListener("DOMContentLoaded", async function (e) {

    if(window.location.href.indexOf('REA.html') > -1){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const reaEmail = urlParams.get('rea');
        var fetchButton = document.getElementById('rea-viewProperties');

        fetchButton.addEventListener("click", async function () {
    
            var table = document.getElementById('table');
            var tableRows = document.getElementsByTagName('tr');
            var rowCount = tableRows.length;
    
            for (let i = rowCount - 1; i > 0; i--) {
                table.removeChild(tableRows[i]);
            }
            
            //This is to retrieve all properties as string and display via displayPropList
            let initReaViewManagedPropertiesController = new reaViewManagedPropertiesController();
            var allProps = await initReaViewManagedPropertiesController.getREAProps(reaEmail);
            initReaViewManagedPropertiesController.displayPropList(allProps);
        });
    }
    

});