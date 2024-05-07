import { reaEntity } from "./userEntity.js";

export class createPropertyListingObject{
    constructor(propName,propLocation,propType,propDesc,propPrice,propBedroom,propBathroom,propSize,propYearBuilt,propAgent
        ,propAgentEmail,propSellerEmail,propAgentID){
            this.propName = propName;
            this.propLocation = propLocation;
            this.propType = propType;
            this.propDesc = propDesc;
            this.propPrice = propPrice;
            this.propBedroom = propBedroom;
            this.propBathroom = propBathroom; 
            this.propSize = propSize;
            this.propYearBuilt = propYearBuilt;
            this.propAgent = propAgent;
            this.propAgentEmail = propAgentEmail;
            this.propSellerEmail = propSellerEmail;
            this.propAgentID = propAgentID;
        }

        setControllerMessage(messageFromEntity){
            alert(messageFromEntity);
        }

}


document.addEventListener("DOMContentLoaded", () => {
    if(window.location.href.indexOf('createPL.html') > -1){
        const submitButton = document.getElementById("submitForm");
        if (submitButton) {
            submitButton.addEventListener("click", function (event) {
                event.preventDefault();
                const propName  = document.getElementById('property_title').value;
                const propLocation = document.getElementById('property_location').value;
                const propType = document.getElementById('property_type').value;
                const propDesc = document.getElementById('property_description').value;
                const propPrice = document.getElementById('property_price').value;
                const propBedroom = document.getElementById('property_bedroom').value;
                const propBathroom = document.getElementById('property_bathroom').value;
                const propSize = document.getElementById('property_size').value;
                const propYearBuilt = document.getElementById('year_built').value;
                const propAgent = document.getElementById('property_agent').value;
                const propAgentEmail = document.getElementById('property_email').value;
                const propSellerEmail = document.getElementById('property_seller').value;
                const propAgentID = document.getElementById('agent_id').value;
    
    
                let newPL = new createPropertyListingObject(propName,propLocation,propType,propDesc,propPrice,propBedroom,propBathroom,propSize,propYearBuilt,propAgent,propAgentEmail,propSellerEmail,propAgentID);
                let initReaEntity = new reaEntity();
                initReaEntity.createPropertyListingToFirebase(newPL);
            });
        }
    }
    
});

