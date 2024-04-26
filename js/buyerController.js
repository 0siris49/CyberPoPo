import { buyerEntity } from "./userEntity.js";

window.onload = function() {
    let initBuyerController = new buyerController();
    initBuyerController.getUserToController();
  };

export class buyerController{
    //Actually calls for Firebase to check whether there's a user logged in, and if it does, return their displayName
    getUserToController(){
        let initBuyerEntity = new buyerEntity();
        initBuyerEntity.getUserToEntity();
    }

    setBuyerControllerDisplayName(displayNameFromEntity){
        var displayUserName = displayNameFromEntity;
        document.getElementById('buyerName').innerHTML=displayUserName;
    }

}