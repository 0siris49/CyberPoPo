import FirebaseClass from "./firebase.js";

export class reaViewManagedPropertiesEntity{
    getREAProps(currentEmail){
        let firebaseObj = new FirebaseClass();
        var allProps = firebaseObj.getREAPropListing(currentEmail);
        return allProps;
    }
}