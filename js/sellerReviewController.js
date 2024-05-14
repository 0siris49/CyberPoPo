import { reviewEntity } from "./reviewEntity.js";


document.addEventListener("DOMContentLoaded", function(){
    if(window.location.href.indexOf('rateNreview.html') > -1){
        var submitReviewBtn = document.getElementById('submit-review-button');
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const reaToRate = urlParams.get('reaEmail');
        var reviewer = null;
        reviewer = urlParams.get('sellerEmail');
        submitReviewBtn.addEventListener("click", function sendRating(e){
            
            if(reviewer != null){
                console.log(reviewer);
                e.preventDefault();
                var review = document.getElementById('review').value;
                var reviewTitle = document.getElementById('title').value;
                let initSellerReviewController = new sellerReviewController();
                initSellerReviewController.submitSellerReview(reviewTitle,reviewer,review,reaToRate);
            }
            
        })
    }
    
})

export class sellerReviewController{
    submitSellerReview(reviewTitle,reviewer,review,reaToRate){
        let initSellerReviewEntity = new reviewEntity();
        initSellerReviewEntity.submitSellerReview(reviewTitle,reviewer,review,reaToRate);
    }
}