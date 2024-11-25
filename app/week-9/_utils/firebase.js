// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ-VgQP7Rpl7TbyDGHoCg6QYdG5ob9PyA",
  authDomain: "cprg-assign.firebaseapp.com",
  projectId: "cprg-assign",
  storageBucket: "cprg-assign.firebasestorage.app",
  messagingSenderId: "342300533776",
  appId: "1:342300533776:web:18affcdb62fce1a3dc1695",
  measurementId: "G-C83TET9DFB"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);