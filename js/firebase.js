import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js';
import { getFirestore, collection, addDoc, setDoc, getDocs, query, where } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js'
import { setEntityMessage } from './loginEntity.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnSLz1ZbiZCKYoETZ-7jGPzYuelhE1DXE",
    authDomain: "csit314-116c9.firebaseapp.com",
    projectId: "csit314-116c9",
    storageBucket: "csit314-116c9.appspot.com",
    messagingSenderId: "258574865076",
    appId: "1:258574865076:web:e5c4bcbf078733b2607de1",
    measurementId: "G-WK2SZ56571"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

//Just an async function to write to Firestore
export async function storeToDatabase(type, email){
  
  if(type === "REA"){
    try {
      const docRef = await addDoc(collection(db,"CSIT314/User-Profiles/REA-Profile"), {
        email: email
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
  }else if(type === "buyer"){
    try {
      const docRef = await addDoc(collection(db, "CSIT314/User-Profiles/Buyer-Profile"), {
        email: email
      });
      console.log("Document written with ID: ", docRef.id); 
    } catch (e) {
      console.error("Error adding document: ", e); 
    }
  }else if(type === "seller"){
    try {
      //const sellerRef = collection(db,'')
      const docRef = await addDoc(collection(db, "CSIT314/User-Profiles/Seller-Profile"), {
        email: email
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      
    }
  }
}

//Create and store user to Firebase Authentication + Firestore
export function createToFireBase(auth, email, password, type){
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log("User Created");
    storeToDatabase(type,email);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
    
  });
}

function pageRedirect(type){
    if(type === 'REA'){
        window.location.href ='REA.html';
    }else if(type === 'buyer'){
        window.location.href = 'buyer.html';
    }else if(type === 'seller'){
        window.location.href = 'seller.html';
    }
}

//Login to Website
function loginToFirebase(auth, email, password, type){
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Login Successful");
        pageRedirect(type);
      })
      .catch((error) => {
        const errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        setEntityMessage(errorMessage);
      });
    }



//Function to read from Firebase to check whether the email + type exists
export async function checkEmailPassType(email, password, type){
    const q1 = query(collection(db, "CSIT314/User-Profiles/REA-Profile"), where("email", "==", email));
    const q2 = query(collection(db, "CSIT314/User-Profiles/Buyer-Profile"), where("email", "==", email));
    const q3 = query(collection(db, "CSIT314/User-Profiles/Seller-Profile"), where("email", "==", email));
     
    if(type === 'REA'){

        var responseToString = "";
        var responseLength = "";
        const queryAns1 = await getDocs(q1);
        queryAns1.forEach((doc) => {
        
        responseToString = doc.id;
        });

        if(responseToString != ""){
            loginToFirebase(auth,email,password,type);
        }

    }else if(type === 'buyer'){

        var responseToString = "";
        var responseLength = "";
        const queryAns2 = await getDocs(q2);
        queryAns2.forEach((doc) => {
        //console.log(doc.id, " => ", doc.data()); 
        responseToString = doc.id;
        });
    
        if(responseToString != ""){
          loginToFirebase(auth,email,password,type);
        }
        
    }else if(type === 'seller'){

        var responseToString = "";
        var responseLength = "";
        const queryAns3 = await getDocs(q3);
        queryAns3.forEach((doc) => {
        //console.log(doc.id, " => ", doc.data()); 
        responseToString = doc.id;
        });
    
        if(responseToString != ""){
          loginToFirebase(auth,email,password,type);
        }
    }



}






