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
    getDoc,
    updateDoc,
    deleteDoc,
    query,
    where,
    doc,
} from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js'
import {
    reaEntity,
    loginEntity,
    currentUserEntity
} from './userEntity.js';

import {
    sellerEntity,
    buyerEntity
} from './userEntity.js';

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

    constructor() {
        //console.log("Created Firebase Object");
    }
    //Just an async function to write to Firestore
    async createToFirebase(arg) {

        const q = query(collection(db, "CSIT314/All-Users/UserData"), where("Email", "==", arg.userEmail));
        var responseToString = "";
        const queryAns = await getDocs(q);
        queryAns.forEach((doc) => {
            responseToString = doc.id;
        });
        if (responseToString == "") {
            if (arg.userType === "REA") {
                try {
                    const docRef = await addDoc(collection(db, "CSIT314/User-Profiles/REA-Profile"), {
                        FirstName: arg.firstName,
                        LastName: arg.lastName,
                        Phone: arg.phoneNum,
                        Email: arg.userEmail,
                        DayDOB: arg.dayDOB,
                        MonthDOB: arg.monthDOB,
                        YearDOB: arg.yearDOB
                    });

                    const userData = collection(db, "CSIT314/All-Users/UserData");
                    await setDoc(doc(userData, arg.userEmail), {
                        FirstName: arg.firstName,
                        LastName: arg.lastName,
                        Phone: arg.phoneNum,
                        Email: arg.userEmail,
                        DayDOB: arg.dayDOB,
                        MonthDOB: arg.monthDOB,
                        YearDOB: arg.yearDOB,
                        userType: arg.userType,
                        password: arg.userPass,
                        reaRatingTotal: "0",
                        reaRatingCount: "0",
                        reaRatingAverage: "0"
                    })
                    //window.location.href='Login.html';
                } catch (e) {
                    console.error("Error adding document: ", e);
                }

            } else if (arg.userType === "buyer") {
                try {
                    const docRef = await addDoc(collection(db, "CSIT314/User-Profiles/Buyer-Profile"), {
                        FirstName: arg.firstName,
                        LastName: arg.lastName,
                        Phone: arg.phoneNum,
                        Email: arg.userEmail,
                        DayDOB: arg.dayDOB,
                        MonthDOB: arg.monthDOB,
                        YearDOB: arg.yearDOB
                    });

                    const userData = collection(db, "CSIT314/All-Users/UserData");
                    await setDoc(doc(userData, arg.userEmail), {
                        FirstName: arg.firstName,
                        LastName: arg.lastName,
                        Phone: arg.phoneNum,
                        Email: arg.userEmail,
                        DayDOB: arg.dayDOB,
                        MonthDOB: arg.monthDOB,
                        YearDOB: arg.yearDOB,
                        userType: arg.userType,
                        password: arg.userPass,
                    })
                    //window.location.href='Login.html';
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            } else if (arg.userType === "seller") {
                try {
                    //const sellerRef = collection(db,'')
                    const docRef = await addDoc(collection(db, "CSIT314/User-Profiles/Seller-Profile"), {
                        FirstName: arg.firstName,
                        LastName: arg.lastName,
                        Phone: arg.phoneNum,
                        Email: arg.userEmail,
                        DayDOB: arg.dayDOB,
                        MonthDOB: arg.monthDOB,
                        YearDOB: arg.yearDOB
                    });

                    const userData = collection(db, "CSIT314/All-Users/UserData");
                    await setDoc(doc(userData, arg.userEmail), {
                        FirstName: arg.firstName,
                        LastName: arg.lastName,
                        Phone: arg.phoneNum,
                        Email: arg.userEmail,
                        DayDOB: arg.dayDOB,
                        MonthDOB: arg.monthDOB,
                        YearDOB: arg.yearDOB,
                        userType: arg.userType,
                        password: arg.userPass,
                    })
                    //window.location.href='Login.html';
                } catch (e) {
                    console.error("Error adding document: ", e);

                }
            }
        } else {
            console.log("Account already exists.");
        }




    }

    //Create and store user to Firebase Authentication + Firestore
    /*createToFireBase(auth, email, password, type, dayDOB, monthDOB, yearDOB, firstName, lastName, phoneNum) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                var uid = user.uid;
                console.log("User Created");
                console.log(auth.currentUser, "What is this even");
                this.storeToDatabase(type, email, dayDOB, monthDOB, yearDOB, firstName, lastName, phoneNum, uid);
                updateProfile(auth.currentUser, {
                    displayName: firstName,
                    email: email,
                    phoneNumber: phoneNum,
                    type: type
                }).then(() => {
                    console.log("Display Name Set ", firstName);
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
    }*/

    pageRedirect(type, email) {
        if (type === 'REA') {
            window.location.href = `REA.html?rea=${email}`;
        } else if (type === 'buyer') {
            window.location.href = `buyer.html?buyer=${email}`;
        } else if (type === 'seller') {
            window.location.href = `seller.html?seller=${email}`;
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
                this.pageRedirect(type, email);
            })
            .catch((error) => {
                const errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
                let initLoginEntity = new loginEntity();
                initLoginEntity.setEntityMessage(errorMessage);
            });
    }



    //Function to read from Firebase to check whether the email + type exists
    async checkEmailPassType(arg) {
        console.log("Starting login process");
        const q = query(collection(db, "CSIT314/All-Users/UserData"), where("Email", "==", arg.userEmail), where("password", "==", arg.userPass), where("userType", "==", arg.userType));
        var responseToString = "";
        const queryAns = await getDocs(q);
        queryAns.forEach((doc) => {
            responseToString = doc.id;
        });
        if (responseToString == "") {
            console.log("No such user found");
        } else {
            this.pageRedirect(arg.userType, arg.userEmail);
        }




    }

    async getCurrentUserSeller(currentEmail) {

        const q = query(collection(db, "CSIT314/All-Users/UserData"), where("Email", "==", currentEmail));
        const querySnapshot = await getDocs(q);
        var response = '';
        var currentSellerName = "";
        querySnapshot.forEach((doc) => {
            var docStringify = JSON.stringify(doc.data());
            response += docStringify;
        });

        var splitDoc = response.split(",");
        var splitDocLength = splitDoc.length;


        for (let i = 0; i < splitDocLength; i++) {
            var currentAttri = splitDoc[i].toString();
            var removeEtc = currentAttri.replace(/['"{}]+/g, '');
            //console.log(removeEtc);
            if (removeEtc.search("FirstName") != -1) {
                var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                currentSellerName = result;
            }
        }

        return currentSellerName;



        //let initSellerEntity = new sellerEntity();
        //initSellerEntity.setEntityDisplayName(displayNameString);



    }

    async getSellerProperties(currentUserEmail) {
        //let userDataPLQuery = "CSIT314/All-Users/UserData/"+currentUserEmail+"/ownedPropList";
        //const currentUserOwnedPL = collection(db,userDataPLQuery);
        const q = query(collection(db, "CSIT314/PropertyListings/createdPLs"), where("propertySeller", "==", currentUserEmail));
        const querySnapshot = await getDocs(q);
        var allData = '';
        querySnapshot.forEach((doc) => {
            var docStringify = JSON.stringify(doc.data());
            allData += docStringify + "---";
        });
        return allData;


    }


    async getCurrentUserBuyer(currentEmail) {
        const q = query(collection(db, "CSIT314/All-Users/UserData"), where("Email", "==", currentEmail));
        const querySnapshot = await getDocs(q);
        var response = '';
        var currentBuyerName = "";
        querySnapshot.forEach((doc) => {
            var docStringify = JSON.stringify(doc.data());
            response += docStringify;
        });

        var splitDoc = response.split(",");
        var splitDocLength = splitDoc.length;


        for (let i = 0; i < splitDocLength; i++) {
            var currentAttri = splitDoc[i].toString();
            var removeEtc = currentAttri.replace(/['"{}]+/g, '');
            //console.log(removeEtc);
            if (removeEtc.search("FirstName") != -1) {
                var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                currentBuyerName = result;
            }
        }

        return currentBuyerName;

    }
    async storePropertyListingToDatabase(arg) {
        console.log("We were hereeee");
        try {
            const createdPL = collection(db, "CSIT314/PropertyListings/createdPLs");
            let userDataPLQuery = "CSIT314/All-Users/UserData/" + arg.propSellerEmail + "/ownedPropList";
            const userDataPL = collection(db, userDataPLQuery)
            var i = 1;
            const createPLCount = await getDocs(createdPL);
            const q1 = query(collection(db, "CSIT314/User-Profiles/Seller-Profile"), where("Email", "==", arg.propSellerEmail));
            const q2 = query(collection(db, "CSIT314/User-Profiles/REA-Profile"), where("Email", "==", arg.propAgentEmail));
            var responseToStringq1 = "";
            var responseToStringq2 = "";
            const queryAns = await getDocs(q1);
            queryAns.forEach((doc) => {
                responseToStringq1 = doc.id;
            });
            const queryAns2 = await getDocs(q2);
            queryAns2.forEach((doc) => {
                responseToStringq2 = doc.id;
            });

            if (responseToStringq1 != "") {
                if (responseToStringq2 != "") {
                    createPLCount.forEach((doc) => {
                        i++;
                    });

                    console.log(i);
                    await setDoc(doc(createdPL, i.toString()), {
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
                        propAgent: arg.propAgent,
                        propertyAgentEmail: arg.propAgentEmail,
                        propertySeller: arg.propSellerEmail,
                        propertyAGTID: arg.propAgentID,
                        propRating: "0",
                        propRTC: "0",
                        propViewCount: "0",
                        propStatus: "Available",
                        propSLC: "0"
                    })

                    /*await setDoc(doc(userDataPL,i.toString()),{
                        propertyID: i,
                        propertyName: arg.propName,
                        propertyAgent: arg.propAgent,
                        propertyAgentEmail: arg.propAgentEmail,
                        AgentID: arg.propAgentID,
                        propStatus: "Available"
                    })*/

                    console.log("Document written with ID: ", i);
                } else {
                    let initReaEntity = new reaEntity();
                    initReaEntity.setEntityMessage("No such REA Email")
                }
            } else {
                let initReaEntity = new reaEntity();
                initReaEntity.setEntityMessage("No such Seller Email");
            }
            return null;
        } catch (e) {
            console.error("Error adding document: ", e);
            return 1;
        }
    }

    async getBuyerSearchListings(arg) {
        const priceRangeOpt = arg.propPriceRange;
        var priceUpperString = 0;
        var priceLowerString = 0;
        const propTypeOpt = arg.propType;
        const propBedrooms = arg.propBedrooms;
        if (priceRangeOpt == 1) {
            priceUpperString = 100000;
            priceLowerString = 0;
        } else if (priceRangeOpt == 2) {
            priceUpperString = 200000;
            priceLowerString = 100001;
        } else if (priceRangeOpt == 3) {
            priceUpperString = 300000;
            priceLowerString = 200001;
        } else if (priceRangeOpt == 4) {
            priceUpperString = 400000;
            priceLowerString = 300001;
        } else if (priceRangeOpt == 5) {
            priceUpperString = 500000;
            priceLowerString = 400001;
        } else if (priceRangeOpt == 6) {
            priceLowerString = 500001;
        }


        var q = query(collection(db, "CSIT314/PropertyListings/createdPLs"), where("propertyPrice", ">=", priceLowerString.toString()), where("propertyPrice", "<=", priceUpperString.toString()), where("propertyType", "==", propTypeOpt.toString()), where("propertyBedroom", "==", propBedrooms.toString()),where("propStatus","==",arg.propStatus));
        if (priceRangeOpt == 6) {
            q = query(collection(db, "CSIT314/PropertyListings/createdPLs"), where("propertyPrice", ">=", priceLowerString.toString()), where("propertyType", "==", propTypeOpt.toString()), where("propertyBedroom", "==", propBedrooms.toString()),where("propStatus","==",arg.propStatus));
        }
        const queryAns = await getDocs(q);
        var allData = '';
        queryAns.forEach((doc) => {
            var docStringify = JSON.stringify(doc.data());
            allData += docStringify + "---";
        });


        //console.log(allData);
        //let initBuyerEntity = new buyerEntity();
        //initBuyerEntity.retrieveSearchResultsEntity(allData);
        return allData;
    }

    async retrieveDocWithID(propertyID) {
        const docRef = doc(db, "CSIT314/PropertyListings/createdPLs", propertyID.toString());
        const docSnap = await getDoc(docRef);

        var docStringify = JSON.stringify(docSnap.data());
        return docStringify;

    }

    async getCurrentUserType(email) {

        const docRef = doc(db, "CSIT314/All-Users/UserData", email);
        const docSnap = await getDoc(docRef);
        var docStringify = JSON.stringify(docSnap.data());
        //console.log(docStringify);
        var splitDoc = docStringify.split(",");
        var splitDocLength = splitDoc.length;
        var userType = '';

        for (let i = 0; i < splitDocLength; i++) {
            var currentAttri = splitDoc[i].toString();
            var removeEtc = currentAttri.replace(/['"{}]+/g, '');
            //console.log(removeEtc);
            if (removeEtc.search("userType") != -1) {
                var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                userType = result;
            }
        }

        console.log(userType);

        return userType;






    }

    async updateClickCount(propertyID) {
        //console.log(propertyID,"From Firebase about property ID to update clicks")
        const propRef = doc(db, "CSIT314/PropertyListings/createdPLs", propertyID.toString());
        const propSnap = await getDoc(propRef);
        var docStringify = JSON.stringify(propSnap.data());
        var splitDoc = docStringify.split(",");
        var splitDocLength = splitDoc.length;
        var currentClickCount = '';

        for (let i = 0; i < splitDocLength; i++) {
            var currentAttri = splitDoc[i].toString();
            var removeEtc = currentAttri.replace(/['"{}]+/g, '');
            //console.log(removeEtc);
            if (removeEtc.search("propViewCount") != -1) {
                var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                currentClickCount = result;
            }
        }

        currentClickCount = +currentClickCount + +1;

        await updateDoc(propRef, {
            propViewCount: currentClickCount
        });




    }

    async getCurrentUserREA(currentEmail) {
        const q = query(collection(db, "CSIT314/All-Users/UserData"), where("Email", "==", currentEmail));
        const querySnapshot = await getDocs(q);
        var response = '';
        var currentREAName = "";
        querySnapshot.forEach((doc) => {
            var docStringify = JSON.stringify(doc.data());
            response += docStringify;
        });

        var splitDoc = response.split(",");
        var splitDocLength = splitDoc.length;


        for (let i = 0; i < splitDocLength; i++) {
            var currentAttri = splitDoc[i].toString();
            var removeEtc = currentAttri.replace(/['"{}]+/g, '');
            //console.log(removeEtc);
            if (removeEtc.search("FirstName") != -1) {
                var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                currentREAName = result;
            }
        }

        return currentREAName;


    }



    async getREAPropListing(currentREAEmail) {
        const q = query(collection(db, "CSIT314/PropertyListings/createdPLs"), where("propertyAgentEmail", "==", currentREAEmail));
        const querySnapshot = await getDocs(q);
        var allData = '';
        querySnapshot.forEach((doc) => {
            var docStringify = JSON.stringify(doc.data());
            allData += docStringify + "---";
        });
        //console.log(allData);
        return allData;

    }

    async updatePropListDetails(arg) {
        //console.log("HELP MAN", arg.agentEmail);
        const propRef = doc(db, "CSIT314/PropertyListings/createdPLs", arg.propIDValue.toString());
        const q1 = query(collection(db, "CSIT314/User-Profiles/Seller-Profile"), where("Email", "==", arg.sellerEmail));
        const q2 = query(collection(db, "CSIT314/User-Profiles/REA-Profile"), where("Email", "==", arg.agentEmail));

        var responseToStringq1 = "";
        var responseToStringq2 = "";
        const queryAns = await getDocs(q1);
        queryAns.forEach((doc) => {
            responseToStringq1 = doc.id;
        });
        const queryAns2 = await getDocs(q2);
        queryAns2.forEach((doc) => {
            responseToStringq2 = doc.id;
        });

        if (responseToStringq2 != "") {

            if (responseToStringq1 != "") {
                if (arg.propName != "") {
                    await updateDoc(propRef, {
                        propertyName: arg.propName,
                    });
                }
                if (arg.propLocation != "") {
                    await updateDoc(propRef, {
                        propertyLocation: arg.propLocation,
                    });
                }
                if (arg.propPrice != "") {
                    await updateDoc(propRef, {
                        propertyPrice: arg.propPrice,
                    });
                }
                if (arg.propType != "") {
                    await updateDoc(propRef, {
                        propertyType: arg.propType,
                    });
                }
                if (arg.yearBuilt != "") {
                    await updateDoc(propRef, {
                        propertyYearBuilt: arg.yearBuilt,
                    });
                }
                if (arg.agentName != "") {
                    await updateDoc(propRef, {
                        propAgent: arg.agentName,
                    });
                }
                if (arg.agentLN != "") {
                    await updateDoc(propRef, {
                        propertyAGTID: arg.agentLN,
                    });
                }
                if (arg.agentEmail != "") {
                    await updateDoc(propRef, {
                        propertyAgentEmail: arg.agentEmail,
                    });
                }
                if (arg.sellerEmail != "") {
                    await updateDoc(propRef, {
                        propertySeller: arg.sellerEmail,
                    });
                }
                if (arg.propAvail != "") {
                    await updateDoc(propRef, {
                        propStatus: arg.propAvail,
                    });
                }

                location.reload();
            } else {
                let initREAEntity = new reaEntity();
                initREAEntity.setEntityMessage("This Seller Email does not exist");
            }

        } else {
            let initREAEntity = new reaEntity();
            initREAEntity.setEntityMessage("This REA Email does not exist");
        }

    }

    async markPropAsDeleted(propIDValue) {
        const propRef = doc(db, "CSIT314/PropertyListings/createdPLs", propIDValue.toString());
        await updateDoc(propRef, {
            propStatus: "Deleted"
        });
        location.reload();
    }

    async submitStarRating(starRating, reaToRate) {
        const reaRef = doc(db, "CSIT314/All-Users/UserData/", reaToRate.toString());
        const reaSnap = await getDoc(reaRef);
        var docStringify = JSON.stringify(reaSnap.data());
        var splitDoc = docStringify.split(",");
        var splitDocLength = splitDoc.length;
        var currentRatingTotal = '';
        var currentRatingCount = '';
        var currentRatingAverage = '';

        for (let i = 0; i < splitDocLength; i++) {
            var currentAttri = splitDoc[i].toString();
            var removeEtc = currentAttri.replace(/['"{}]+/g, '');
            //console.log(removeEtc);
            if (removeEtc.search("reaRatingTotal") != -1) {
                var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                currentRatingTotal = result;
            }
            if (removeEtc.search("reaRatingCount") != -1) {
                var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                currentRatingCount = result;
            }
        }

        currentRatingTotal = +currentRatingTotal + +starRating;
        currentRatingCount = +currentRatingCount + +1;
        currentRatingAverage = currentRatingTotal / currentRatingCount;

        await updateDoc(reaRef, {
            reaRatingCount: currentRatingCount,
            reaRatingTotal: currentRatingTotal,
            reaRatingAverage: currentRatingAverage
        });
        location.reload();
    }

    async submitBuyerReview(reviewTitle,reviewer,review,reaToRate){
        //console.log(reaToRate,"FN");
        let storeRatingsToREA = collection(db, "CSIT314/All-Users/UserData/" + reaToRate + "/Reviews");
        await setDoc(doc(storeRatingsToREA, reviewTitle), {
            reviewerTitle: reviewTitle,
            reviewOverview: review,
            revFrom: reviewer

        });
    }

    async submitSellerReview(reviewTitle,reviewer,review,reaToRate){
        //console.log(reaToRate,"FN");
        let storeRatingsToREA = collection(db, "CSIT314/All-Users/UserData/" + reaToRate + "/Reviews");
        await setDoc(doc(storeRatingsToREA, reviewTitle), {
            reviewerTitle: reviewTitle,
            reviewOverview: review,
            revFrom: reviewer

        });
    }

    async submitRating(arg) {
        var buyerEmail = arg.buyerEmail;
        var sellerEmail = arg.sellerEmail;
        var existingEmail = "";


        if (sellerEmail != null) {
            existingEmail = sellerEmail;
            const q1 = query(collection(db, "CSIT314/PropertyListings/createdPLs"), where("propertySeller", "==", existingEmail.toString()), where("propertyAgentEmail", "==", arg.revAgentEmail.toString()));
            let storeRatingsToREA = collection(db, "CSIT314/All-Users/UserData/" + arg.revAgentEmail + "/createdRatings");
            let updateREARatings = doc(db, "CSIT314/All-Users/UserData/", arg.revAgentEmail.toString());
            var responseToStringq1 = "";

            const queryAns = await getDocs(q1);
            queryAns.forEach((doc) => {
                responseToStringq1 = doc.id;
            });

            if (responseToStringq1 != "") {
                await setDoc(doc(storeRatingsToREA, arg.revName), {
                    reviewerName: arg.revName,
                    reviewOverview: arg.revText,
                    starRating: arg.starRating,
                    revFrom: existingEmail

                });

                const reaRef = doc(db, "CSIT314/All-Users/UserData/", arg.revAgentEmail.toString());
                const reaSnap = await getDoc(reaRef);
                var docStringify = JSON.stringify(reaSnap.data());
                var splitDoc = docStringify.split(",");
                var splitDocLength = splitDoc.length;
                var currentRatingTotal = '';
                var currentRatingCount = '';
                var currentRatingAverage = '';

                for (let i = 0; i < splitDocLength; i++) {
                    var currentAttri = splitDoc[i].toString();
                    var removeEtc = currentAttri.replace(/['"{}]+/g, '');
                    //console.log(removeEtc);
                    if (removeEtc.search("reaRatingTotal") != -1) {
                        var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                        currentRatingTotal = result;
                    }
                    if (removeEtc.search("reaRatingCount") != -1) {
                        var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                        currentRatingCount = result;
                    }
                }

                currentRatingTotal = +currentRatingTotal + +arg.starRating;
                currentRatingCount = +currentRatingCount + +1;
                currentRatingAverage = currentRatingTotal / currentRatingCount;

                await updateDoc(reaRef, {
                    reaRatingCount: currentRatingCount,
                    reaRatingTotal: currentRatingTotal,
                    reaRatingAverage: currentRatingAverage
                });

                location.reload();
            } else {
                let initREAEntity = new reaEntity();
                initREAEntity.setRREntityMessage("You cannot review an REA you have not worked with before!!! U N E T H I C A L");
            }

        } /*else {
            //This is for Buyer leaving review
            auth.onAuthStateChanged(async user => {
                if (user) {
                    existingEmail = user.email;
                    let storeRatingsToREA = collection(db, "CSIT314/All-Users/UserData/" + arg.revAgentEmail + "/createdRatings");
                    await setDoc(doc(storeRatingsToREA, arg.revName), {
                        reviewerName: arg.revName,
                        reviewOverview: arg.revText,
                        starRating: arg.starRating,
                        revFrom: existingEmail

                    });

                    const reaRef = doc(db, "CSIT314/All-Users/UserData/", arg.revAgentEmail.toString());
                    const reaSnap = await getDoc(reaRef);
                    var docStringify = JSON.stringify(reaSnap.data());
                    var splitDoc = docStringify.split(",");
                    var splitDocLength = splitDoc.length;
                    var currentRatingTotal = '';
                    var currentRatingCount = '';
                    var currentRatingAverage = '';

                    for (let i = 0; i < splitDocLength; i++) {
                        var currentAttri = splitDoc[i].toString();
                        var removeEtc = currentAttri.replace(/['"{}]+/g, '');
                        //console.log(removeEtc);
                        if (removeEtc.search("reaRatingTotal") != -1) {
                            var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                            currentRatingTotal = result;
                        }
                        if (removeEtc.search("reaRatingCount") != -1) {
                            var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                            currentRatingCount = result;
                        }
                    }

                    currentRatingTotal = +currentRatingTotal + +arg.starRating;
                    currentRatingCount = +currentRatingCount + +1;
                    currentRatingAverage = currentRatingTotal / currentRatingCount;

                    await updateDoc(reaRef, {
                        reaRatingCount: currentRatingCount,
                        reaRatingTotal: currentRatingTotal,
                        reaRatingAverage: currentRatingAverage
                    });
                    location.reload();
                } else {
                    console.log("No one");
                }
            })

        }*/





    }

    async shortlistProp(propID, currentEmail) {


        const q1 = query(collection(db, "CSIT314/All-Users/UserData/" + currentEmail + "/shortlistedPLs"), where("propID", "==", propID));
        var responseToStringq1 = "";

        const queryAns = await getDocs(q1);
        queryAns.forEach((doc) => {
            responseToStringq1 = doc.id;
        });

        if (responseToStringq1 == "") {
            const userRef = collection(db, "CSIT314/All-Users/UserData/" + currentEmail + "/shortlistedPLs");
            await setDoc(doc(userRef, propID.toString()), {
                propID: propID
            });
            //-------------------------------------------------------------------------------------------
            const propRef = doc(db, "CSIT314/PropertyListings/createdPLs", propID.toString());
            const propSnap = await getDoc(propRef);
            var docStringify = JSON.stringify(propSnap.data());
            var splitDoc = docStringify.split(",");
            var splitDocLength = splitDoc.length;
            var currentShortlistCount = '';

            for (let i = 0; i < splitDocLength; i++) {
                var currentAttri = splitDoc[i].toString();
                var removeEtc = currentAttri.replace(/['"{}]+/g, '');
                //console.log(removeEtc);
                if (removeEtc.search("propSLC") != -1) {
                    var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                    currentShortlistCount = result;
                }
            }

            currentShortlistCount = +currentShortlistCount + +1;

            await updateDoc(propRef, {
                propSLC: currentShortlistCount
            });

            let initBuyerEntity = new buyerEntity();
            initBuyerEntity.setEntityMessage("Property successfully shortlisted!");

        } else {
            let initBuyerEntity = new buyerEntity();
            initBuyerEntity.setEntityMessage("You have already shortlisted this property before!");
        }

    };

    async fetchBuyerSL(buyerEmail) {

        var SLPropArray = [];
        const q = query(collection(db, "CSIT314/All-Users/UserData/" + buyerEmail + "/shortlistedPLs"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            var propID = doc.id;
            SLPropArray.push(propID);
        });
        var SLCount = SLPropArray.length;
        var allData = "";

        for (let i = 0; i < SLCount; i++) {
            var qx = doc(db, "CSIT314/PropertyListings/createdPLs", SLPropArray[i].toString());

            const queryAns = await getDoc(qx);
            if (queryAns.exists()) {
                //console.log("Document data:", queryAns.data());
                var docStringify = JSON.stringify(queryAns.data());
                allData += docStringify + "---";
            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
            }
        }
        //console.log(allData);
        return allData;





    }

    async unSLProp(propID, buyerEmail) {


        await deleteDoc(doc(db, "CSIT314/All-Users/UserData/" + buyerEmail + "/shortlistedPLs", propID));
        //----------------------------------------------------------
        const propRef = doc(db, "CSIT314/PropertyListings/createdPLs", propID.toString());
        const propSnap = await getDoc(propRef);
        var docStringify = JSON.stringify(propSnap.data());
        var splitDoc = docStringify.split(",");
        var splitDocLength = splitDoc.length;
        var currentShortlistCount = '';

        for (let i = 0; i < splitDocLength; i++) {
            var currentAttri = splitDoc[i].toString();
            var removeEtc = currentAttri.replace(/['"{}]+/g, '');
            //console.log(removeEtc);
            if (removeEtc.search("propSLC") != -1) {
                var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                currentShortlistCount = result;
            }
        }

        currentShortlistCount = +currentShortlistCount - +1;

        await updateDoc(propRef, {
            propSLC: currentShortlistCount
        });

        location.reload();
    }

    async reqRatings(currentREA) {
        const reaRef = doc(db, "CSIT314/All-Users/UserData", currentREA);
        const reaSnap = await getDoc(reaRef);
        var docStringify = JSON.stringify(reaSnap.data());
        var splitDoc = docStringify.split(",");
        var splitDocLength = splitDoc.length;
        var avgRating = 0;
        var countRating = 0;
        var allData = '';

        for (let i = 0; i < splitDocLength; i++) {
            var currentAttri = splitDoc[i].toString();
            var removeEtc = currentAttri.replace(/['"{}]+/g, '');
            //console.log(removeEtc);
            if (removeEtc.search("reaRatingAverage") != -1) {
                var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                avgRating = result;
                //console.log("Average ", avgRating)
            }
            if (removeEtc.search("reaRatingCount") != -1) {
                var result = removeEtc.substring(removeEtc.lastIndexOf(":") + 1);
                countRating = result;
                //console.log("Total ratings ", countRating)
            }
        }

        const querySnapshot = await getDocs(collection(db, "CSIT314/All-Users/UserData", currentREA, "/createdRatings"));
        querySnapshot.forEach((doc) => {
            var docStringify = JSON.stringify(doc.data());
            allData += docStringify + "---";
        });

        //console.log(allData);
        return {
            avgRating: avgRating,
            countRating: countRating,
        };


    }

    async reqReviews(currentREA){
        var allData = '';
        const querySnapshot = await getDocs(collection(db, "CSIT314/All-Users/UserData", currentREA, "/Reviews"));
        querySnapshot.forEach((doc) => {
            var docStringify = JSON.stringify(doc.data());
            allData += docStringify + "---";
        });

        return allData;
    }

    async getActiveUsers() {
        const querySnapshot = await getDocs(collection(db, "CSIT314/All-Users/UserData"));
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
        });
    }




}
// Your web app's Firebase configuration