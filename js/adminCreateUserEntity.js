import FirebaseClass from "./firebase.js";

export class adminCreateUserEntity{
    createUser(newUserObj){
        let firebaseObj = new FirebaseClass();
        var message = firebaseObj.createUser(newUserObj);
        return message;
    }
}