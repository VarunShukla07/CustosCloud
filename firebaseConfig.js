// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApBDdXyHs-39SJDPSU4YifJ9Ir2ccQxzU",
  authDomain: "project-070.firebaseapp.com",
  projectId: "project-070",
  storageBucket: "project-070.appspot.com",
  messagingSenderId: "530615513927",
  appId: "1:530615513927:web:3e2a56f8bd94aaefa21262",
  measurementId: "G-6NNB6QXJZ1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);