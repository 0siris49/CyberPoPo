import FirebaseClass from "./firebase.js";

export class reaViewRatingEntity{
    reqRatings(currentREA){
        let firebaseObj = new FirebaseClass();
        let ratings =  firebaseObj.reqRatings(currentREA);
        return ratings;
    }
}