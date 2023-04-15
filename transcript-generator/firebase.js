// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQGKmJG0RfWxvkJ6sw4G6GBdTYAfFXojw",
  authDomain: "tec-transcript-generator.firebaseapp.com",
  projectId: "tec-transcript-generator",
  storageBucket: "tec-transcript-generator.appspot.com",
  messagingSenderId: "774482882839",
  appId: "1:774482882839:web:01ffefc848ef1857a8c752",
  measurementId: "G-G4NL1Z6QL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);