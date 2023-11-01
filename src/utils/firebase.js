// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo2T6ByeQSvNVw_akTs6WnUogt-K0KrOY",
  authDomain: "netflixgpt-f228b.firebaseapp.com",
  projectId: "netflixgpt-f228b",
  storageBucket: "netflixgpt-f228b.appspot.com",
  messagingSenderId: "464091672142",
  appId: "1:464091672142:web:9faea5956d398cb4a55d1f",
  measurementId: "G-0H205PXMVN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();