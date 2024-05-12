import FirebaseClass from "./firebase.js";

export class adminViewSpecificUserEntity{
    getUserInfo(userEmail){
        let firebaseObj = new FirebaseClass();
        var userInfo = firebaseObj.getUserInfo(userEmail);
        return userInfo;
    }
}