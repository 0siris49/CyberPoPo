import FirebaseClass from "./firebase.js";

export class reviewEntity{
    submitBuyerReview(reviewTitle,reviewer,review,reaToRate){
        let firebaseObj = new FirebaseClass();
        firebaseObj.submitBuyerReview(reviewTitle,reviewer,review,reaToRate);
    }

    submitSellerReview(reviewTitle,reviewer,review,reaToRate){
        let firebaseObj = new FirebaseClass();
        firebaseObj.submitSellerReview(reviewTitle,reviewer,review,reaToRate);
    }
    //Rea view reviews
    reqReviews(reaEmail){
        let firebaseObj = new FirebaseClass();
        var reviews = firebaseObj.reqReviews(reaEmail);
        return reviews;
    }
}