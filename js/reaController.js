import { reaEntity } from "./userEntity.js";

document.addEventListener("DOMContentLoaded", function (e) {
    let initReaController = new reaController();
    initReaController.getUserToController();
});

document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("rea-update-button")) {


        var updateModal = document.getElementById('updateModal');
        updateModal.style.display = "block";
        var propIDValue = e.target.value;

        var submitButton = document.getElementById("submitUpdateForm");
        submitButton.addEventListener("click", function (e) {
            e.preventDefault();

            var propName = document.getElementById("property_title").value;
            var propLocation = document.getElementById('property_location').value;
            var propType = document.getElementById('property_type').value;
            var yearBuilt = document.getElementById('year_built').value;
            var propAgent = document.getElementById('property_agent').value;
            var agentEmail = document.getElementById('property_email').value;
            var agentLN = document.getElementById('agent_id').value;
            var sellerEmail = document.getElementById('property_seller').value;

            //console.log(propName, propLocation, propType, yearBuilt, propAgent, agentEmail, agentLN, sellerEmail, propIDValue);

            let newUpdateObj = new updateDetails(propName, propLocation, propType, yearBuilt, propAgent, agentEmail, agentLN, sellerEmail, propIDValue);
            let initReaEntity = new reaEntity();
            initReaEntity.updatePropListDetails(newUpdateObj);
        })

    }

    if (e.target.id == "submitUpdateForm") {
        console.log("Submit looooooo");

    }
});

export class reaController {

    getUserToController() {
        let initReaEntity = new reaEntity();
        initReaEntity.getUserToEntity();
    }

    setREAControllerDisplayName(displayNameFromFirebase) {
        document.getElementById('reaName').innerHTML = displayNameFromFirebase;

    }

    getREAPropListController(allPropList) {
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
            <td><a href="fullPropertyDetails.html?propertyId=${cleanID[i]}"> <div>${cleanPropName[i]}</div>  </a></td>
            <td>${cleanLocation[i]}</td>
            <td>${cleanAvgRating[i]}</td>
            <td></td>
            <td>${cleanStatus[i]}</td>
            <td><button class="rea-update-button" name="rea-update-button" style="cursor: pointer" value="${cleanID[i]}"}>Update</button>
            <button class="rea-delete-button" name="rea-delete-button" style="cursor: pointer">Delete</button></td>`;
            table.appendChild(row);

        }

    }
}

class updateDetails {
    constructor(propName, propLocation, propType, yearBuilt, agentName, agentEmail, agentLN, sellerEmail, propIDValue) {
        this.propName = propName;
        this.propLocation = propLocation;
        this.propType = propType;
        this.yearBuilt = yearBuilt;
        this.agentName = agentName;
        this.agentEmail = agentEmail;
        this.agentLN = agentLN;
        this.sellerEmail = sellerEmail;
        this.propIDValue = propIDValue;
    }

}

document.getElementById('searchButton').addEventListener('click', function () {
    const email = document.getElementById('searchEmail').value;
    const initFirebase = new FirebaseClass();
    initFirebase.getREAByEmail(email).then(data => {
        if (data) {
            updateSearchResults(data);
        } else {
            console.error('No data found for the provided email');
        }
    }).catch(error => {
        console.error('Error fetching data:', error);
    });
});

function updateSearchResults(data) {
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = '';
    data.forEach(review => {
        const p = document.createElement('p');
        p.textContent = `Rating: ${review.rating}, Review: ${review.comment}`;
        resultsDiv.appendChild(p);
    });
}

