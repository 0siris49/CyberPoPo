import { reaEntity } from "./userEntity.js";

document.addEventListener("DOMContentLoaded", function() {
    let initReaController = new reaController();
    initReaController.getUserToController();
    
});

export class reaController{

    getUserToController(){
        let initReaEntity = new reaEntity();
        initReaEntity.getUserToEntity();
    }

    setREAControllerDisplayName(displayNameFromFirebase){
        document.getElementById('reaName').innerHTML = displayNameFromFirebase;

    }

    getREAPropListController(allPropList){
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


        for(let i=0; i<totalPropList;i++){
            var splitToAttri = stringArr[i].split(",");
            var splitToAttriCount = splitToAttri.length;


            for(let x=0; x<splitToAttriCount;x++){
                var attriString = splitToAttri[x].toString();
                var removeEtc = attriString.replace(/['"{}]+/g, '');
                //console.log(attriString);
                
                if(removeEtc.search("propertyID") != -1){
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":")+1);
                    //console.log(result);
                    cleanID.push(result);
                }
                
                if(removeEtc.search("propertyName") != -1){
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":")+1);
                    //console.log(result);
                    cleanPropName.push(result);
                }

                if(removeEtc.search("propertyAgent") != -1){
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":")+1);
                    ///console.log(result);
                    cleanAgent.push(result);
                }

                if(removeEtc.search("propStatus") != -1){
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":")+1);
                    ///console.log(result);
                    cleanStatus.push(result);
                }

                if(removeEtc.search("propertyLocation") != -1){
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":")+1);
                    ///console.log(result);
                    cleanLocation.push(result);
                }

                if(removeEtc.search("propRating") != -1){
                    resultRating = removeEtc.substring(removeEtc.lastIndexOf(":")+1);
                    
                    
                }

                

                if(removeEtc.search("propRTC") != -1){
                    ratingCount = removeEtc.substring(removeEtc.lastIndexOf(":")+1);
                }
                if(resultRating == 0 && ratingCount == 0 ){
                    cleanAvgRating.push("No Ratings Yet");
                }else{
                    cleanAvgRating.push(resultRating/ratingCount);
                }
            }
        }


        for(let x=0; x<totalPropList; x++){
            //console.log(cleanID[x]);
            ///console.log(cleanPropName[x]);
            ///console.log(cleanAgent[x]);
            
        }

        for(let i=0; i<totalPropList;i++){
            const row = document.createElement('tr');
            row.innerHTML = `<td>${cleanID[i]}</td>
            <td><a href="fullPropertyDetails.html?propertyId=${cleanID[i]}"> <div>${cleanPropName[i]}</div>  </a></td>
            <td>${cleanLocation[i]}</td>
            <td>${cleanAvgRating[i]}</td>
            <td></td>
            <td>${cleanStatus[i]}</td>
            <td></td>`;
            table.appendChild(row);
        }

    }
}