// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVy36TXcOQnpqH4ICphP9e550UQEpwfC4",
  authDomain: "tienda-brillate.firebaseapp.com",
  projectId: "tienda-brillate",
  storageBucket: "tienda-brillate.firebasestorage.app",
  messagingSenderId: "730089832738",
  appId: "1:730089832738:web:8ee4dfafd290e05c76e57b",
  measurementId: "G-3RMTMVNS8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);