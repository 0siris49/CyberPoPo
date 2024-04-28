import { buyerEntity } from "./userEntity.js";
import FirebaseClass from './firebase.js';

window.onload = function () {
    let initBuyerController = new buyerController();
    initBuyerController.getUserToController();
    initBuyerController.getPropertyListings();
};

export class buyerController {
    //Actually calls for Firebase to check whether there's a user logged in, and if it does, return their displayName
    getUserToController() {
        let initBuyerEntity = new buyerEntity();
        initBuyerEntity.getUserToEntity();
    }

    async getPropertyListings() {
        const firebase = new FirebaseClass();
        const propertyListings = await firebase.getAllPropertyListings();
        this.pullPropertyListings(propertyListings);
    }

    setBuyerControllerDisplayName(displayNameFromEntity) {
        var displayUserName = displayNameFromEntity;
        document.getElementById('buyerName').innerHTML = displayUserName;
    }

    pullPropertyListings(propertyListings) {
        const container = document.getElementById('property-listings-container');
        container.innerHTML = '';
        propertyListings.forEach(listing => {
            const listingElement = document.createElement('div');
            listingElement.classList.add('property-listing');
            listingElement.innerHTML = `
                    <h2>${listing.propertyName}</h2>
                    <p><strong>Location:</strong> ${listing.propertyLocation}</p>
                    <p><strong>Type:</strong> ${listing.propertyType}</p>
                    <p><strong>Description:</strong> ${listing.propertyDescription}</p>
                    <p><strong>Price:</strong> ${listing.propertyPrice}</p>
                    <!-- Buttons for actions on the property -->
                    <button class="shortlisted-button">Shortlisted</button>
                    <a href="fullPropertyDetails.html?propertyId=${listing.propertyId}" class="view-details-button">View Details</a>
                `;
            container.appendChild(listingElement);
        });
    }
    
}