import FirebaseClass from "./firebase.js";

export class buyerRatingEntity {
    submitStarRating(starRating,reaToRate) {
        let firebaseObj = new FirebaseClass();
        firebaseObj.submitStarRating(starRating,reaToRate);
    }
}