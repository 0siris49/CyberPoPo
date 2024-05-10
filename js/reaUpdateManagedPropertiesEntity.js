import FirebaseClass from "./firebase.js";

export class reaUpdateManagedPropertiesEntity{
    updateProperty(newUpdateObj){
        let firebaseObj = new FirebaseClass();
        firebaseObj.updatePropListDetails(newUpdateObj);
    }
}