
import { shortlistEntity } from "./shortlistEntity.js";
//Add shortlists
export class buyerRemoveShortlistController{
    removeBuyerShortlist(propID,buyerEmail){
        let initShortlistEntity = new shortlistEntity();
        initShortlistEntity.unSLProp(propID,buyerEmail);
    }
}

document.body.addEventListener("click", function(e){
    if(window.location.href.indexOf('buyerShortlist.html') > -1){
        if(e.target.classList.contains("unshortlist-button")){
            var propID = e.target.value;
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const buyerEmail = urlParams.get('buyer');

            if(e.target.classList.contains("unshortlist-button")){
                var propID = e.target.value;
                //console.log("Unshortlisting ",propID);
                var option = confirm("Are you sure you want to remove this property from your shortlist?");
                if(option == true){
                    let initBuyerRemoveShortlistController = new buyerRemoveShortlistController();
                    initBuyerRemoveShortlistController.removeBuyerShortlist(propID,buyerEmail);
                }
            }
    
            
            
        }
    }
    
})
