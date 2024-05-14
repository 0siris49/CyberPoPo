/* import {
    sellerEntity
} from "./userEntity.js";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const currentEmail = urlParams.get('seller');*/


/*

export class sellerController {
    //Actually calls for Firebase to check whether there's a user logged in, and if it does, return their displayName
     getUserToController(currentEmail) {
        let initSellerEntity = new sellerEntity();
        var name = initSellerEntity.getUserToEntity(currentEmail);
        return name;
        
    }

    /*getSellerProps(currentEmail){
        let initSellerEntity = new sellerEntity();
        var allSellerProps = initSellerEntity.getSellerProps(currentEmail);
        return allSellerProps;

    }*/

    /*setSellerPropList(string) {
        //console.log(string,"From seller controller");
        var stringArr = string.split("---");
        var totalPropList = stringArr.length - 1;
        const table = document.getElementById('table');
        var cleanID = [];
        var cleanPropName = [];
        var cleanAgent = [];
        var cleanStatus = [];
        var cleanAvgRating = [];
        var cleanREAEmail = [];
        var sellerEmail = [];
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
                if (removeEtc.search("propertySeller") != -1) {
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                    console.log(result, "Push push push");
                    sellerEmail.push(result);
                }

                if (removeEtc.search("propRating") != -1) {
                    resultRating = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);


                }
                if (removeEtc.search("propertyAgentEmail") != -1) {
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                    cleanREAEmail.push(result);

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


        for (let i = 0; i < totalPropList; i++) {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${cleanID[i]}</td>
            <td><a href="fullPropertyDetails.html?propertyId=${cleanID[i]}&email=${currentEmail}"> <div>${cleanPropName[i]}</div>  </a></td>
            <td>${cleanAvgRating[i]}</td>
            <td></td>
            <td>${cleanStatus[i]}</td>
            <td><a href="rateNreview.html?reaEmail=${cleanREAEmail[i]}&sellerEmail=${sellerEmail[i]}"> <div>${cleanAgent[i]}</div>  </a></td>`;
            table.appendChild(row);
        }


    }




}*/
