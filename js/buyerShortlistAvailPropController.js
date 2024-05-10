import { shortlistEntity } from "./shortlistEntity.js";
//Add shortlists
export class buyerShortlistAvailPropController{
    addBuyerNewPropShortlist(propID,buyerEmail){
        let initShortlistEntity = new shortlistEntity();
        initShortlistEntity.shortlistProp(propID,buyerEmail);
    }
}

document.body.addEventListener("click", function(e){
    if(window.location.href.indexOf('buyer.html') > -1){
        if(e.target.classList.contains("shortlist-button")){
            if(e.target.id == "Available"){
                var propID = e.target.value;
                const queryString = window.location.search;
                const urlParams = new URLSearchParams(queryString);
                const buyerEmail = urlParams.get('buyer');
        
                let initBuyerShortlistAvailPropController = new buyerShortlistAvailPropController();
                initBuyerShortlistAvailPropController.addBuyerNewPropShortlist(propID,buyerEmail);
            }
            
            
        }
    }
    
})
