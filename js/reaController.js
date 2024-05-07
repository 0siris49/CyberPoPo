import {
    reaEntity
} from "./userEntity.js";

export class reaController {

    getREAProps(currentEmail) {
        let initReaEntity = new reaEntity();
        var allProps = initReaEntity.getREAProps(currentEmail);
        return allProps;
    }

    setREAControllerDisplayName(displayNameFromFirebase,currentEmail) {
        document.getElementById('reaName').innerHTML = displayNameFromFirebase;
        
    }

    displayPropList(allPropList) {
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
            <button class="rea-delete-button" name="rea-delete-button" style="cursor: pointer" value="${cleanID[i]}">Delete</button></td>`;
            table.appendChild(row);

        }

    }

    reqRatings(reaEmail) {
        let initREAEntity = new reaEntity();
        let ratings = initREAEntity.reqRatings(reaEmail);
        return ratings;
    }

    displayREARating(avgRating, countRating, allData) {
        var stringArr = allData.split("---");
        var totalRevCount = stringArr.length - 1;
        var revName = [];
        var revText = [];
        var revStar = [];
        var revFrom = [];
        const container = document.getElementById('displayRating');

        for (let i = 0; i < totalRevCount; i++) {
            var splitToAttri = stringArr[i].split(",");
            var splitToAttriCount = splitToAttri.length;


            for (let x = 0; x < splitToAttriCount; x++) {
                var attriString = splitToAttri[x].toString();
                var removeEtc = attriString.replace(/['"{}]+/g, '');
                //console.log(attriString);

                if (removeEtc.search("reviewOverview") != -1) {
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                    revText.push(result);
                }

                if (removeEtc.search("reviewerName") != -1) {
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                    revName.push(result);
                }


                if (removeEtc.search("starRating") != -1) {
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                    revStar.push(result);
                }

                if (removeEtc.search("revFrom") != -1) {
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                    revFrom.push(result);
                }


            }
        }

        document.getElementById('ratingPlusCount').innerHTML = avgRating + "🌟 average based on " + countRating + " reviews";

        for (let x = 0; x < totalRevCount; x++) {

            const listingElement = document.createElement('div');
            listingElement.classList.add('reviewSlide');
            listingElement.innerHTML = `
                <h2>${revName[x]}</h2>
                <p><strong>Review From: </strong> ${revFrom[x]}</p>
                <p><strong>Overview: </strong> ${revText[x]}</p>
                <p><strong>Stars: </strong> ${revStar[x]}🌟</p>
                
            `;
            container.appendChild(listingElement);

        }


    }

}

class updateDetails {
    constructor(propName, propLocation, propPrice, propType, yearBuilt, propAgent, agentEmail, agentLN, sellerEmail, propIDValue, propAvail) {
        this.propName = propName;
        this.propLocation = propLocation;
        this.propPrice = propPrice;
        this.propType = propType;
        this.yearBuilt = yearBuilt;
        this.agentName = propAgent;
        this.agentEmail = agentEmail;
        this.agentLN = agentLN;
        this.sellerEmail = sellerEmail;
        this.propIDValue = propIDValue;
        this.propAvail = propAvail;
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
            let initReaController = new reaController();
            var allProps = await initReaController.getREAProps(reaEmail);
            initReaController.displayPropList(allProps);
        });
        //This is auto retrieve Reviews + Ratings
        let initReaController = new reaController();
        var reaRatings = await initReaController.reqRatings(reaEmail);
        initReaController.displayREARating(reaRatings['avgRating'],reaRatings['countRating'],reaRatings['allData']);
    }
    

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
            var propPrice = document.getElementById('property_price').value;
            var propType = document.getElementById('property_type').value;
            var yearBuilt = document.getElementById('year_built').value;
            var propAgent = document.getElementById('property_agent').value;
            var agentEmail = document.getElementById('property_email').value;
            var agentLN = document.getElementById('agent_id').value;
            var sellerEmail = document.getElementById('property_seller').value;
            var propAvail = document.getElementById('propAvail').value;


            const pEmail = document.getElementById('property_email');
            const aId = document.getElementById('agent_id');
            const pSeller = document.getElementById('property_seller');
            let hasEmptyFields = false;
            let fields = [pEmail, aId, pSeller];

            fields.forEach(field => {
                if (field.value.trim() === "") {
                    field.style.border = "2px solid red";
                    hasEmptyFields = true;
                } else {
                    field.style.border = "";
                }
            });

            if (hasEmptyFields) {
                e.preventDefault(); // Prevent form submission
                alert('Please fill out all required fields.');
            } else {
                console.log("Bro wtf why", agentEmail);
                let newUpdateObj = new updateDetails(propName, propLocation, propPrice, propType, yearBuilt, propAgent, agentEmail, agentLN, sellerEmail, propIDValue, propAvail);
                let initReaEntity = new reaEntity();
                initReaEntity.updatePropListDetails(newUpdateObj);
            }



        })

    }

    if (e.target.classList.contains("rea-delete-button")) {
        var propIDValue = e.target.value;
        console.log(propIDValue);
        let initReaEntity = new reaEntity();
        initReaEntity.markPropAsDeleted(propIDValue);

    }
});
