import { shortlistEntity } from "./shortlistEntity.js";
//Add shortlists
export class buyerShortlistAvailPropController{
    addBuyerNewPropShortlist(propID,buyerEmail){
        let initShortlistEntity = new shortlistEntity();
        var result = initShortlistEntity.shortlistProp(propID,buyerEmail);
        return result;
    }
}

document.body.addEventListener("click",async function(e){
    if(window.location.href.indexOf('buyer.html') > -1){
        if(e.target.classList.contains("shortlist-button")){
            if(e.target.id == "Available"){
                var propID = e.target.value;
                const queryString = window.location.search;
                const urlParams = new URLSearchParams(queryString);
                const buyerEmail = urlParams.get('buyer');
        
                let initBuyerShortlistAvailPropController = new buyerShortlistAvailPropController();
                var result = await initBuyerShortlistAvailPropController.addBuyerNewPropShortlist(propID,buyerEmail);
                alert(result);
            }
            
            
        }
    }
    
})
