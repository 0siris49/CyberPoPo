import { sellerEntity } from "./userEntity.js";

window.onload = function() {
    let initSellerController = new sellerController();
    initSellerController.getUserToController();
  };

export class sellerController{
    //Actually calls for Firebase to check whether there's a user logged in, and if it does, return their displayName
    getUserToController(){
        let initSellerEntity = new sellerEntity();
        initSellerEntity.getUserToEntity();
    }

    setSellerControllerDisplayName(displayNameFromEntity){
        var displayUserName = displayNameFromEntity;
        document.getElementById('sellerName').innerHTML=displayUserName;
    }

}