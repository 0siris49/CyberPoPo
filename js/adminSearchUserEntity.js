import FirebaseClass from "./firebase.js";

export class adminSearchUserEntity{
    searchUser(searchEmail){
        let firebaseObj = new FirebaseClass();
        var result = firebaseObj.searchUser(searchEmail);
        return result;
    }
}