import FirebaseClass from "./firebase.js";

export class adminViewAllAccountsEntity{
    getUserList(){
        let firebaseObj = new FirebaseClass();
        var userList = firebaseObj.getUserList();
        return userList;
    }
}