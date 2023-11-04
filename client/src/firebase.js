// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "real-estate-79a6b.firebaseapp.com",
  projectId: "real-estate-79a6b",
  storageBucket: "real-estate-79a6b.appspot.com",
  messagingSenderId: "724824077540",
  appId: "1:724824077540:web:bab2c8ef9dc44c99e228f1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);