import { reaUpdateManagedPropertiesEntity } from "./reaUpdateManagedPropertiesEntity.js";

export class reaUpdateManagedPropertiesController{
    updateProperty(newUpdateObj){
        let initReaUpdateManagedPropertiesEntity = new reaUpdateManagedPropertiesEntity();
        initReaUpdateManagedPropertiesEntity.updateProperty(newUpdateObj);
    }

}

class updateDetails {
    constructor(propName, propLocation, propPrice, propType, yearBuilt, propAgent, agentEmail, agentLN, sellerEmail, propIDValue, propAvail) {
        this.propName = propName;
        this.propLocation = propLocation;
        this.propPrice = propPrice;
        this.propType = propType;
        this.yearBuilt = yearBuilt;
        this.agentName = propAgent;
        this.agentEmail = agentEmail;
        this.agentLN = agentLN;
        this.sellerEmail = sellerEmail;
        this.propIDValue = propIDValue;
        this.propAvail = propAvail;
    }

}

document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("rea-update-button")) {


        var updateModal = document.getElementById('updateModal');
        updateModal.style.display = "block";
        var propIDValue = e.target.value;

        var submitButton = document.getElementById("submitUpdateForm");
        submitButton.addEventListener("click", function (e) {
            e.preventDefault();

            var propName = document.getElementById("property_title").value;
            var propLocation = document.getElementById('property_location').value;
            var propPrice = document.getElementById('property_price').value;
            var propType = document.getElementById('property_type').value;
            var yearBuilt = document.getElementById('year_built').value;
            var propAgent = document.getElementById('property_agent').value;
            var agentEmail = document.getElementById('property_email').value;
            var agentLN = document.getElementById('agent_id').value;
            var sellerEmail = document.getElementById('property_seller').value;
            var propAvail = document.getElementById('propAvail').value;


            const pEmail = document.getElementById('property_email');
            const aId = document.getElementById('agent_id');
            const pSeller = document.getElementById('property_seller');
            let hasEmptyFields = false;
            let fields = [pEmail, aId, pSeller];

            fields.forEach(field => {
                if (field.value.trim() === "") {
                    field.style.border = "2px solid red";
                    hasEmptyFields = true;
                } else {
                    field.style.border = "";
                }
            });

            if (hasEmptyFields) {
                e.preventDefault(); // Prevent form submission
                alert('Please fill out all required fields.');
            } else {
                console.log("Bro wtf why", agentEmail);
                let newUpdateObj = new updateDetails(propName, propLocation, propPrice, propType, yearBuilt, propAgent, agentEmail, agentLN, sellerEmail, propIDValue, propAvail);
                let initReaUpdateManagedPropertiesController = new reaUpdateManagedPropertiesController();
                initReaUpdateManagedPropertiesController.updateProperty(newUpdateObj);
            }



        })

    }

    /*if (e.target.classList.contains("rea-delete-button")) {
        var propIDValue = e.target.value;
        console.log(propIDValue);
        let initReaEntity = new reaEntity();
        initReaEntity.markPropAsDeleted(propIDValue);

    }*/
});