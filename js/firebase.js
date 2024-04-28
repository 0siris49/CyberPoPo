import {
    initializeApp
} from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile
} from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js';
import {
    getFirestore,
    collection,
    addDoc,
    setDoc,
    getDocs,
    query,
    where,
    doc,
} from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js'
import {
    reaEntity,
    setEntityMessage
} from './userEntity.js';

import { sellerEntity,buyerEntity } from './userEntity.js';

const firebaseConfig = {
    apiKey: "AIzaSyDnSLz1ZbiZCKYoETZ-7jGPzYuelhE1DXE",
    authDomain: "csit314-116c9.firebaseapp.com",
    projectId: "csit314-116c9",
    storageBucket: "csit314-116c9.appspot.com",
    messagingSenderId: "258574865076",
    appId: "1:258574865076:web:e5c4bcbf078733b2607de1",
    measurementId: "G-WK2SZ56571"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const auth = getAuth(app);

export default class FirebaseClass {

    constructor(){
        console.log("Created Firebase Object");
    }


    //Just an async function to write to Firestore
    async storeToDatabase(type,email,dayDOB,monthDOB,yearDOB,firstName,lastName,phoneNum) {

        if (type === "REA") {
            try {
                const docRef = await addDoc(collection(db, "CSIT314/User-Profiles/REA-Profile"), {
                    FirstName: firstName,
                    LastName: lastName,
                    Phone: phoneNum,
                    Email: email,
                    DayDOB: dayDOB,
                    MonthDOB: monthDOB,
                    YearDOB: yearDOB
                });

                const userData = collection(db,"CSIT314/All-Users/UserData");
                await setDoc(doc(userData,email),{
                    FirstName: firstName,
                    LastName: lastName,
                    Phone: phoneNum,
                    Email: email,
                    DayDOB: dayDOB,
                    MonthDOB: monthDOB,
                    YearDOB: yearDOB
                })
                
            } catch (e) {
                console.error("Error adding document: ", e);
            }

        } else if (type === "buyer") {
            try {
                const docRef = await addDoc(collection(db, "CSIT314/User-Profiles/Buyer-Profile"), {
                    FirstName: firstName,
                    LastName: lastName,
                    Phone: phoneNum,
                    Email: email,
                    DayDOB: dayDOB,
                    MonthDOB: monthDOB,
                    YearDOB: yearDOB
                });

                const userData = collection(db,"CSIT314/All-Users/UserData");
                await setDoc(doc(userData,email),{
                    FirstName: firstName,
                    LastName: lastName,
                    Phone: phoneNum,
                    Email: email,
                    DayDOB: dayDOB,
                    MonthDOB: monthDOB,
                    YearDOB: yearDOB
                })
                
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        } else if (type === "seller") {
            try {
                //const sellerRef = collection(db,'')
                const docRef = await addDoc(collection(db, "CSIT314/User-Profiles/Seller-Profile"), {
                    FirstName: firstName,
                    LastName: lastName,
                    Phone: phoneNum,
                    Email: email,
                    DayDOB: dayDOB,
                    MonthDOB: monthDOB,
                    YearDOB: yearDOB
                });

                const userData = collection(db,"CSIT314/All-Users/UserData");
                await setDoc(doc(userData,email),{
                    FirstName: firstName,
                    LastName: lastName,
                    Phone: phoneNum,
                    Email: email,
                    DayDOB: dayDOB,
                    MonthDOB: monthDOB,
                    YearDOB: yearDOB
                })
                
            } catch (e) {
                console.error("Error adding document: ", e);

            }
        }
    }

    //Create and store user to Firebase Authentication + Firestore
    createToFireBase(auth,email,password,type,dayDOB,monthDOB,yearDOB,firstName,lastName,phoneNum) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                console.log("User Created");
                this.storeToDatabase(type,email,dayDOB,monthDOB,yearDOB,firstName,lastName,phoneNum);
                updateProfile(auth.currentUser, {
                    displayName: firstName,
                    email: email,
                    phoneNumber: phoneNum,
                    type: type
                  }).then(() => {
                    console.log("Display Name Set ",firstName );
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);

            });
    }

    pageRedirect(type) {
        if (type === 'REA') {
            window.location.href = 'REA.html';
        } else if (type === 'buyer') {
            window.location.href = 'buyer.html';
        } else if (type === 'seller') {
            window.location.href = 'seller.html';
        } else if (type === 'sysadmin') {
            window.location.href = 'AdminPage.html';
        }
    }

    //Login to Website
    loginToFirebase(auth, email, password, type) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                //const user = userCredential.user;
                console.log("Login Successful");
                this.pageRedirect(type);
            })
            .catch((error) => {
                const errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
                setEntityMessage(errorMessage);
            });
    }



    //Function to read from Firebase to check whether the email + type exists
    async checkEmailPassType(email, password, type) {
        console.log("Starting login process");
        const q1 = query(collection(db, "CSIT314/User-Profiles/REA-Profile"), where("Email", "==", email));
        const q2 = query(collection(db, "CSIT314/User-Profiles/Buyer-Profile"), where("Email", "==", email));
        const q3 = query(collection(db, "CSIT314/User-Profiles/Seller-Profile"), where("Email", "==", email));
        const q4 = query(collection(db, "CSIT314/User-Profiles/SysAdmin"), where("Email", "==", email));

        if (type === 'REA') {

            var responseToString = "";
            var responseLength = "";
            const queryAns1 = await getDocs(q1);
            queryAns1.forEach((doc) => {

                responseToString = doc.id;
            });

            if (responseToString != "") {
                this.loginToFirebase(auth, email, password, type);
            }else{
                console.log("User does not exist");
            }

        } else if (type === 'buyer') {

            var responseToString = "";
            var responseLength = "";
            const queryAns2 = await getDocs(q2);
            queryAns2.forEach((doc) => {
                //console.log(doc.id, " => ", doc.data()); 
                responseToString = doc.id;
            });

            if (responseToString != "") {
                this.loginToFirebase(auth, email, password, type);
            }else{
                console.log("User does not exist");
            }

        } else if (type === 'seller') {

            var responseToString = "";
            var responseLength = "";
            const queryAns3 = await getDocs(q3);
            queryAns3.forEach((doc) => {
                //console.log(doc.id, " => ", doc.data()); 
                responseToString = doc.id;
            });

            if (responseToString != "") {
                this.loginToFirebase(auth, email, password, type);
            }else{
                console.log("User does not exist");
            }
        } else if (email === "sysadmin@gmail.com") {

            var responseToString = "";
            var responseLength = "";
            const queryAns4 = await getDocs(q4);
            queryAns4.forEach((doc) => {
                //console.log(doc.id, " => ", doc.data()); 
                responseToString = doc.id;
            });

            if (responseToString != "") {
                this.loginToFirebase(auth, email, password, 'sysadmin');
            }else{
                console.log("User does not exist");
            }
        }



    }

    getCurrentUserSeller(){
        auth.onAuthStateChanged(async user => {
            //console.log(user);
            //console.log("From getCurrentUser");
            if(user){
                var displayNameString = user.displayName;
                let initSellerEntity = new sellerEntity();
                initSellerEntity.setEntityDisplayName(displayNameString);
                var currentUserEmail = user.email;
                var allPropsList = await this.getSellerProperties(currentUserEmail);
                
                initSellerEntity.getSellerPropList(allPropsList);
                
                //-------------------------------------------------------------------------------
            }else{
                console.log("No one");
            }
        })
          
    }

    async getSellerProperties(currentUserEmail){
        let userDataPLQuery = "CSIT314/All-Users/UserData/"+currentUserEmail+"/ownedPropList";
        const currentUserOwnedPL = collection(db,userDataPLQuery);
        const querySnapshot = await getDocs(currentUserOwnedPL);
        var allData = ''; 
        querySnapshot.forEach((doc) => {
            var docStringify = JSON.stringify(doc.data());
            allData += docStringify + "---";
          });

          return allData;
          
          //console.log(allData);
    }


    getCurrentUserBuyer(){
        auth.onAuthStateChanged(user => {
            //console.log(user);
            //console.log("From getCurrentUser");
            if(user){
                console.log(user.displayName);
                var displayNameString = user.displayName;
                let initBuyerEntity = new buyerEntity();
                initBuyerEntity.setEntityDisplayName(displayNameString);
            }else{
                console.log("No one");
            }
        })
          
    }
    async storePropertyListingToDatabase(arg) {
        try {
            const createdPL = collection(db,"CSIT314/PropertyListings/createdPLs");
            let userDataPLQuery = "CSIT314/All-Users/UserData/"+arg.propSellerEmail+"/ownedPropList";
            const userDataPL = collection(db,userDataPLQuery)
            var i =1;
            const createPLCount = await getDocs(createdPL);
            const q = query(collection(db, "CSIT314/User-Profiles/Seller-Profile"), where("Email", "==", arg.propSellerEmail));
            var responseToString = "";
            const queryAns = await getDocs(q);
            queryAns.forEach((doc) => {
                responseToString = doc.id;
            });

            if (responseToString != "") {
                createPLCount.forEach((doc) => { 
                    i++;
                  });
    
                  console.log(i);            
                await setDoc(doc(createdPL,i.toString()),{
                    propertyID: i,
                    propertyName: arg.propName,
                    propertyLocation: arg.propLocation,
                    propertyType: arg.propType,
                    propertyDescription: arg.propDesc,
                    propertyPrice: arg.propPrice,
                    propertyBedroom: arg.propBedroom,
                    propertyBathroom: arg.propBathroom,
                    propertySize: arg.propSize,
                    propertyYearBuilt: arg.propYearBuilt,
                    propertyAgent: arg.propAgent,
                    propertySeller: arg.propSellerEmail,
                    propertyAgentID: arg.propAgentID
                })
    
                await setDoc(doc(userDataPL,i.toString()),{
                    propertyID: i,
                    propertyName: arg.propName,
                    propertyAgent: arg.propAgent,
                    AgentID: arg.propAgentID
                })
                
                console.log("Document written with ID: ", i);
            }else{
                let initReaEntity = new reaEntity();
                initReaEntity.setEntityMessage("No such seller email");
            }

        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    
    async getAllPropertyListings() {
        try {
            const querySnapshot = await getDocs(collection(db, "CSIT314/PropertyListings/createdPLs"));
            return querySnapshot.docs.map(doc => doc.data());
        } catch (error) {
            console.error("Error fetching property listings:", error);
            return [];
        }
    }
}
// Your web app's Firebase configuration
