import { reaEntity } from "./userEntity.js";
var submitReviewBtn = document.getElementById('submit-review-button');
var starRating= "";
document.body.addEventListener("click",function setStarRating(e){
    if(e.target.classList.contains("starRating")){
        starRating = e.target.value;
    }
})

document.addEventListener("DOMContentLoaded", function(){
    if(window.location.href.indexOf('rateNreview.html') > -1){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const reaToRate = urlParams.get('reaEmail');
        document.getElementById('revFor').innerHTML = reaToRate;

        submitReviewBtn.addEventListener("click", function createReview(e){
            e.preventDefault();
            
        
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const reaToRate = urlParams.get('reaEmail');
            var buyerEmail = " ";
            var sellerEmail = " ";
            buyerEmail = urlParams.get("buyerEmail");
            sellerEmail = urlParams.get("sellerEmail");
            const revName = document.getElementById('agent_name').value;
            const revAgentEmail = reaToRate;
            const revText = document.getElementById('review').value;
        
            let rateReviewObj = new rateReviewDetails(revName,revText,starRating,revAgentEmail,buyerEmail,sellerEmail);
            let initRRController = new rateReviewController();
            initRRController.submitRating(rateReviewObj);
        })
    }
    
})






export class rateReviewController{
    submitRating(arg){
        let initREAEntity = new reaEntity();
        initREAEntity.submitRating(arg);
    }

    setControllerMessage(message){
        alert(message);
    }
}

class rateReviewDetails{
    constructor(revName,revText,starRating,revAgentEmail,buyerEmail,sellerEmail){
        this.revName = revName;
        this.revText = revText;
        this.starRating = starRating;
        this.revAgentEmail = revAgentEmail;
        this.buyerEmail = buyerEmail;
        this.sellerEmail = sellerEmail;
    }
}
