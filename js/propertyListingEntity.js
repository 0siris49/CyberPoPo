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

     deleteProperty(propID){
        let firebaseObj = new FirebaseClass();
        firebaseObj.markPropAsDeleted(propID);
    }

    updateProperty(newUpdateObj){
        let firebaseObj = new FirebaseClass();
        var error = firebaseObj.updatePropListDetails(newUpdateObj);
        return error;
    }
    getREAProps(currentEmail){
        let firebaseObj = new FirebaseClass();
        var allProps = firebaseObj.getREAPropListing(currentEmail);
        return allProps;
    }



}

