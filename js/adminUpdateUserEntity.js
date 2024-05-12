import FirebaseClass from "./firebase.js";

export class adminUpdateUserEntity{
    updateUser(userObj){
        let firebaseObj = new FirebaseClass();
        var error = firebaseObj.updateUser(userObj);
        return error;
    }
}