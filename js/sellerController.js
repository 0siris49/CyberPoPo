import { sellerEntity } from "./userEntity.js";

window.onload = function() {
    let initSellerController = new sellerController();
    initSellerController.getUserToController();
  }; 

export class sellerController{
    //Actually calls for Firebase to check whether there's a user logged in, and if it does, return their displayName
    getUserToController(){
        let initSellerEntity = new sellerEntity();
        initSellerEntity.getUserToEntity();
    }

    setSellerControllerDisplayName(displayNameFromEntity){
        var displayUserName = displayNameFromEntity;
        document.getElementById('sellerName').innerHTML=displayUserName;
    }

    setSellerPropList(string){
        //console.log(string,"From seller controller");
        var stringArr = string.split("---");
        var totalPropList = stringArr.length - 1;
        const table = document.getElementById('table');
        var cleanID = [];
        var cleanPropName = [];
        var cleanAgent = [];
        var cleanStatus = [];
        var cleanAvgRating = [];
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
            <td>${cleanAvgRating[i]}</td>
            <td></td>
            <td>${cleanStatus[i]}</td>
            <td>${cleanAgent[i]}</td>`;
            table.appendChild(row);
        }


    }


 
}
