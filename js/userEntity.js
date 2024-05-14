
import FirebaseClass from "./firebase.js";

export class userEntity{
    //User ownself register
    createToDB(newUser){
        let firebaseObj = new FirebaseClass();
        firebaseObj.createToFirebase(newUser);
    }

    loginToFirebase(arg){       
        let firebaseObj = new FirebaseClass();
        var errorMessage = firebaseObj.checkEmailPassType(arg);
        return errorMessage;
    }
    //Determine display for each user
    currentUserTypeEntity(email){
        let firebaseObj = new FirebaseClass();
        var userType = firebaseObj.getCurrentUserType(email);
        return userType;
    
    } 

    /*setCurrentUserType(userType){
        let initbFPDC = new buyerFullPropertyDetailsController();
        initbFPDC.setCurrentUserTypeController(userType);
    }*/
    
    //Admin create user
    createUser(newUserObj){
        let firebaseObj = new FirebaseClass();
        var message = firebaseObj.createUser(newUserObj);
        return message;
    }
    //Admin delete user
    deleteUser(userToDelete){
        let firebaseObj = new FirebaseClass();
        var result = firebaseObj.deleteUser(userToDelete);
        return result;
    }
    //Admin search user
    searchUser(searchEmail){
        let firebaseObj = new FirebaseClass();
        var result = firebaseObj.searchUser(searchEmail);
        return result;
    }
    //Admin suspend user
    suspendUser(userToSuspend){
        let firebaseObj = new FirebaseClass();
        firebaseObj.suspendUser(userToSuspend);
    }
    //Admin update user
    updateUser(userObj){
        let firebaseObj = new FirebaseClass();
        var error = firebaseObj.updateUser(userObj);
        return error;
    }
    //Admin view all users
    getUserList(){
        let firebaseObj = new FirebaseClass();
        var userList = firebaseObj.getUserList();
        return userList;
    }
    //Admin view specific user
    getUserInfo(userEmail){
        let firebaseObj = new FirebaseClass();
        var userInfo = firebaseObj.getUserInfo(userEmail);
        return userInfo;
    }
}



    




