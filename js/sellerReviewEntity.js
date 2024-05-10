import FirebaseClass from "./firebase.js";

export class sellerReviewEntity{
    submitSellerReview(reviewTitle,reviewer,review,reaToRate){
        let firebaseObj = new FirebaseClass();
        firebaseObj.submitSellerReview(reviewTitle,reviewer,review,reaToRate);
    }
}