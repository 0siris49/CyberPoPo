import FirebaseClass from "./firebase.js";

export class ratingEntity{
    buyerSubmitStarRating(starRating,reaToRate) {
        let firebaseObj = new FirebaseClass();
        firebaseObj.submitStarRating(starRating,reaToRate);
    }

    sellerSubmitStarRating(starRating,reaToRate) {
        let firebaseObj = new FirebaseClass();
        firebaseObj.submitStarRating(starRating,reaToRate);
    }
    //Rea view their own rating
    reqRatings(currentREA){
        let firebaseObj = new FirebaseClass();
        let ratings =  firebaseObj.reqRatings(currentREA);
        return ratings;
    }
}