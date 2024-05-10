import FirebaseClass from "./firebase.js";

export class propertyListingEntity{
    passSearchParamsToEntity(arg){
        let firebaseObj = new FirebaseClass();
        var searchResults = firebaseObj.getBuyerSearchListings(arg);
        return searchResults;
    }

    searchPropWithID(propertyID){
        let firebaseObj = new FirebaseClass();
        var propDetails = firebaseObj.retrieveDocWithID(propertyID);
        return propDetails;
    }

    updateClickCount(propertyID){
        let firebaseObj = new FirebaseClass();
        firebaseObj.updateClickCount(propertyID);
    } 

    async getSellerProps(currentEmail){
        let firebaseObj = new FirebaseClass();
        var allSellerProps = await firebaseObj.getSellerProperties(currentEmail);
        return allSellerProps;
        
    }

    createPL(newPL){
        let firebaseObj = new FirebaseClass();
        var result = firebaseObj.storePropertyListingToDatabase(newPL);
        return result;
     }



}

