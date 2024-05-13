
import { propertyListingEntity } from "./propertyListingEntity.js";
/*export class reaUpdateManagedPropertiesController{
    updateProperty(newUpdateObj){
        let initReaUpdateManagedPropertiesEntity = new reaUpdateManagedPropertiesEntity();
        var error = initReaUpdateManagedPropertiesEntity.updateProperty(newUpdateObj);
        return error;
    }

}*/

export class reaUpdateManagedPropertiesController {
    updateProperty(newUpdateObj) {
        let propListEntity = new propertyListingEntity();
        var error = propListEntity.updateProperty(newUpdateObj);
        return error;
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
        var propIDValue = e.target.value;  // Storing the property ID when the update button is clicked

        // Reset fields when the update button is clicked
        resetInputFields();
    }
});

var submitButton = document.getElementById("submitUpdateForm");
submitButton.addEventListener("click", async function (e) {
    e.preventDefault();

    // Retrieving all the form field values
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

    // Checking for empty required fields
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

    // If no fields are empty, proceed to update the property
    if (!hasEmptyFields) {
        let newUpdateObj = new updateDetails(propName, propLocation, propPrice, propType, yearBuilt, propAgent, agentEmail, agentLN, sellerEmail, propIDValue, propAvail);
        let initReaUpdateManagedPropertiesController = new reaUpdateManagedPropertiesController();
        var error = await initReaUpdateManagedPropertiesController.updateProperty(newUpdateObj);
        if (error != null) {
            alert(error);
        } else {
            // Clear fields on successful update
            resetInputFields();
        }
    } else {
        // If there are empty fields, prevent form submission and alert the user
        alert('Please fill out all required fields.');
    }
});

function resetInputFields() {
    document.getElementById("property_title").value = '';
    document.getElementById('property_location').value = '';
    document.getElementById('property_price').value = '';
    document.getElementById('property_type').value = '';
    document.getElementById('year_built').value = '';
    document.getElementById('property_agent').value = '';
    document.getElementById('property_email').value = '';
    document.getElementById('agent_id').value = '';
    document.getElementById('property_seller').value = '';
    document.getElementById('propAvail').value = '';
}



