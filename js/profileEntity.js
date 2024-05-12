import FirebaseClass from "./firebase.js";

export class profileEntity{
    createUserProfile(profileName){
        let firebaseObj = new FirebaseClass();
        var result = firebaseObj.createUserProfile(profileName);
        return result;
    }

    deleteProfile(profileType){
        let firebaseObj = new FirebaseClass();
        var result = firebaseObj.deleteProfile(profileType);
        return result;
    }

    searchProfile(searchType){
        let firebaseObj = new FirebaseClass();
        var userList = firebaseObj.searchProfile(searchType);
        return userList;
    }

    suspendProfile(profileToSuspend){
        let firebaseObj = new FirebaseClass();
        var result = firebaseObj.suspendProfile(profileToSuspend);
        return result;
    }

    updateProfile(userObj){
        let firebaseObj = new FirebaseClass();
        var error = firebaseObj.updateProfile(userObj);
        return error;
    }
    getProfileList(){
        let firebaseObj = new FirebaseClass();
        var profileList = firebaseObj.getProfileList();
        return profileList;
    }
}