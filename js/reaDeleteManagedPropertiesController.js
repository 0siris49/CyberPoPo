
import { propertyListingEntity } from "./propertyListingEntity.js";

/*export class reaDeleteManagedPropertiesController{
    deleteProp(propID){
        let initReaDeleteManagedPropertiesEntity = new reaDeleteManagedPropertiesEntity();
        initReaDeleteManagedPropertiesEntity.deleteProperty(propID);
    }
}*/

export class reaDeleteManagedPropertiesController{
    deleteProp(propID){
        let propListEntity = new propertyListingEntity();
        propListEntity.deleteProperty(propID);
    }
}

document.body.addEventListener("click", function (e) {
    if(location.href.indexOf('REA.html') > -1){
        if (e.target.classList.contains("rea-delete-button")) {
            var propIDValue = e.target.value;
            let initReaDeleteManagedPropertiesController = new reaDeleteManagedPropertiesController();
            initReaDeleteManagedPropertiesController.deleteProp(propIDValue);
        }
    }
    
});