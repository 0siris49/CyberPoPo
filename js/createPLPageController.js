import { reaEntity } from "./userEntity.js";

class propertyListing{
    constructor(propName,propLocation,propType,propDesc,propPrice,propBedroom,propBathroom,propSize,propYearBuilt,propAgent
        ,propAgentID){
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
            this.propAgentID = propAgentID;
        }
}


document.addEventListener("DOMContentLoaded", () => {
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
            const propAgentID = document.getElementById('agent_id').value;

            console.log(propName,propLocation,propType,propDesc,propPrice,propBedroom,propBathroom,propSize,propYearBuilt,propAgent
            ,propAgentID);

            let newPL = new propertyListing(propName,propLocation,propType,propDesc,propPrice,propBedroom,propBathroom,propSize,propYearBuilt,propAgent,propAgentID);
            let initReaEntity = new reaEntity();
            initReaEntity.createPropertyListingToFirebase(newPL);
        });
    }
});