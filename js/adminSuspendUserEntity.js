import FirebaseClass from "./firebase.js";

export class adminSuspendUserEntity{
    suspendUser(userToSuspend){
        let firebaseObj = new FirebaseClass();
        firebaseObj.suspendUser(userToSuspend);
    }
}