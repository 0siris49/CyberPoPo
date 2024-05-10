import FirebaseClass from "./firebase.js";

export class reaViewReviewsEntity{
    reqReviews(reaEmail){
        let firebaseObj = new FirebaseClass();
        var reviews = firebaseObj.reqReviews(reaEmail);
        return reviews;
    }
}