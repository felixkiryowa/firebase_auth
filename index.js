// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkhc5hponXxxINzR6nL_LAwMUaOQ4UKgQ",
  authDomain: "ekibiina.firebaseapp.com",
  projectId: "ekibiina",
  storageBucket: "ekibiina.firebasestorage.app",
  messagingSenderId: "971450584490",
  appId: "1:971450584490:web:a5f564c33ad466b6c12fd3",
  measurementId: "G-65BRSEF6CX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();

var email = "franciskiryowa68@gmail.com";
var password = "password123";

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    userCredential.user.getIdToken().then((idToken) => {
        // Send idToken to the backend
        console.log("USER LOGIN TOKEN " + idToken);
    });
    // ...
  })
  .catch((error) => {
    console.log(error.message);
    const errorCode = error.code;
    const errorMessage = error.message;
  });



