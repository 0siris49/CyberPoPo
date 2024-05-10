import FirebaseClass from "./firebase.js";

export class buyerReviewEntity{
    submitBuyerReview(reviewTitle,reviewer,review,reaToRate){
        let firebaseObj = new FirebaseClass();
        firebaseObj.submitBuyerReview(reviewTitle,reviewer,review,reaToRate);
    }
}