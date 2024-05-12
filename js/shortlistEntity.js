import FirebaseClass from "./firebase.js";

export class shortlistEntity{
    shortlistProp(propID,currentEmail){
        let firebaseObj = new FirebaseClass();
        firebaseObj.shortlistProp(propID,currentEmail);
    }

    fetchBuyerSL(buyerEmail){
        let firebaseObj = new FirebaseClass();
        var allData = firebaseObj.fetchBuyerSL(buyerEmail);
        console.log(allData);
        return allData;
        
    }

    unSLProp(propID,buyerEmail){
        let firebaseObj = new FirebaseClass();
        firebaseObj.unSLProp(propID,buyerEmail);
    }
}