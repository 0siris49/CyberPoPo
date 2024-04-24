import {
    initializeApp
} from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js';
import {
    getFirestore,
    collection,
    addDoc,
    setDoc,
    getDocs,
    query,
    where
} from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js'
import {
    setEntityMessage
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

    // Initialize Firebase


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
                console.log("Document written with ID: ", docRef.id);
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
                console.log("Document written with ID: ", docRef.id);
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
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);

            }
        }
    }

    //Create and store user to Firebase Authentication + Firestore
    createToFireBase(auth,email,password,type,dayDOB,monthDOB,yearDOB,firstName,lastName,phoneNum) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log("User Created");
                this.storeToDatabase(type,email,dayDOB,monthDOB,yearDOB,firstName,lastName,phoneNum);
                
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
                const user = userCredential.user;
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
        const q1 = query(collection(db, "CSIT314/User-Profiles/REA-Profile"), where("email", "==", email));
        const q2 = query(collection(db, "CSIT314/User-Profiles/Buyer-Profile"), where("email", "==", email));
        const q3 = query(collection(db, "CSIT314/User-Profiles/Seller-Profile"), where("email", "==", email));
        const q4 = query(collection(db, "CSIT314/User-Profiles/SysAdmin"), where("email", "==", email));

        if (type === 'REA') {

            var responseToString = "";
            var responseLength = "";
            const queryAns1 = await getDocs(q1);
            queryAns1.forEach((doc) => {

                responseToString = doc.id;
            });

            if (responseToString != "") {
                this.loginToFirebase(auth, email, password, type);
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
            }
        }



    }
}
// Your web app's Firebase configuration
