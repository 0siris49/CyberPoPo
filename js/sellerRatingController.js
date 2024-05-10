import { sellerRatingEntity } from "./sellerRatingEntity.js";

var starRating = "";
document.body.addEventListener("click",function setStarRating(e){
    if(e.target.classList.contains("starRating")){
        starRating = e.target.value;
    }
}) 

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
                e.preventDefault();
                let initSellerRatingController = new sellerRatingController()
                initSellerRatingController.submitStarRating(starRating, reaToRate);
            }
            
        })
    }
    
})

export class sellerRatingController{
    submitStarRating(starRating,reaToRate){
        let initSellerRatingEntity = new sellerRatingEntity();
        initSellerRatingEntity.submitStarRating(starRating,reaToRate);
    }
}