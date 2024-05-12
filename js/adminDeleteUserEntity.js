import FirebaseClass from "./firebase.js";

export class adminDeleteUserEntity{
    deleteUser(userToDelete){
        let firebaseObj = new FirebaseClass();
        var result = firebaseObj.deleteUser(userToDelete);
        return result;
    }
}