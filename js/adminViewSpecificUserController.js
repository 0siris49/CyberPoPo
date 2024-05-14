import { userEntity } from "./userEntity.js";

export class adminViewSpecificUserController{
    getUserInfo(userEmail){
        let initAdminVSUEntity = new userEntity();
        var userInfo = initAdminVSUEntity.getUserInfo(userEmail);
        return userInfo;
    }

    displayUserInfo(userInfo){
        
        var removeEtc = userInfo.replace(/['"{}]+/g, '');
        var splitDoc = removeEtc.split(",");
        //console.log(splitDoc);
        
        var fN = "";
        var lN = "";
        var email = "";
        var day = "";
        var month = "";
        var year = "";
        var phone = "";
        var status = "";
        var profile = "";
        var avgRating = "NIL";

        for (let i = 0; i < splitDoc.length; i++) {
            if (splitDoc[i].search("FirstName") != -1) {
                fN = splitDoc[i].substring(splitDoc[i].lastIndexOf(":") + 1);
            }
            if (splitDoc[i].search("LastName") != -1) {
                lN = splitDoc[i].substring(splitDoc[i].lastIndexOf(":") + 1);
            }
            if (splitDoc[i].search("Email") != -1) {
                email = splitDoc[i].substring(splitDoc[i].lastIndexOf(":") + 1);
            }
            if (splitDoc[i].search("DayDOB") != -1) {
                day = splitDoc[i].substring(splitDoc[i].lastIndexOf(":") + 1);
            }

            if (splitDoc[i].search("MonthDOB") != -1) {
                month = splitDoc[i].substring(splitDoc[i].lastIndexOf(":") + 1);
            }
            if (splitDoc[i].search("YearDOB") != -1) {
                year = splitDoc[i].substring(splitDoc[i].lastIndexOf(":") + 1);
            }
            if (splitDoc[i].search("Phone") != -1) {
                phone = splitDoc[i].substring(splitDoc[i].lastIndexOf(":") + 1);
            }
            if (splitDoc[i].search("userStatus") != -1) {
                status = splitDoc[i].substring(splitDoc[i].lastIndexOf(":") + 1);
            }
            if (splitDoc[i].search("userType") != -1) {
                profile = splitDoc[i].substring(splitDoc[i].lastIndexOf(":") + 1);
            }
            if (splitDoc[i].search("reaRatingAverage") != -1) {
                avgRating = splitDoc[i].substring(splitDoc[i].lastIndexOf(":") + 1);
            }
        }

        document.getElementById('user_FN').innerHTML = fN ;
        document.getElementById('user_LN').innerHTML = lN;
        document.getElementById('user_Email').innerHTML = email ;
        document.getElementById('user_DOB').innerHTML = day +"/"+month+"/"+year ;
        document.getElementById('user_Phone').innerHTML = phone; 
        document.getElementById('user_Status').innerHTML = status ;
        document.getElementById('user_Profile').innerHTML = profile;
        document.getElementById('user_Rating').innerHTML = avgRating ;
    }
}


if (window.location.href.indexOf('userDetails.html') > -1) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const userEmail = urlParams.get('email');

    let initadminVSUController = new adminViewSpecificUserController();
    var userInfo = await initadminVSUController.getUserInfo(userEmail);
    initadminVSUController.displayUserInfo(userInfo);

    
    
    
}