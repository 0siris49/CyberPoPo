import FirebaseClass from "./firebase.js";

export class reaDeleteManagedPropertiesEntity{
    deleteProperty(propID){
        let firebaseObj = new FirebaseClass();
        firebaseObj.markPropAsDeleted(propID);
    }
}