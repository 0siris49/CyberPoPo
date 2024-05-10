import FirebaseClass from "./firebase.js";

export class reaUpdateManagedPropertiesEntity{
    updateProperty(newUpdateObj){
        let firebaseObj = new FirebaseClass();
        var error = firebaseObj.updatePropListDetails(newUpdateObj);
        return error;
    }
}