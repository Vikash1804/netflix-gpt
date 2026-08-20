// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvcaS-k18mn1zQxe0H7me_g9aXQ5TUc5k",
  authDomain: "netflixgpt-2c93c.firebaseapp.com",
  projectId: "netflixgpt-2c93c",
  storageBucket: "netflixgpt-2c93c.firebasestorage.app",
  messagingSenderId: "653467338195",
  appId: "1:653467338195:web:efdbead36660f9b51b5b26",
  measurementId: "G-RZT5CENXYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();