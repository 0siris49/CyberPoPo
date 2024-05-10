import FirebaseClass from "./firebase.js";

export class sellerRatingEntity{
    submitStarRating(starRating,reaToRate) {
        let firebaseObj = new FirebaseClass();
        firebaseObj.submitStarRating(starRating,reaToRate);
    }
}