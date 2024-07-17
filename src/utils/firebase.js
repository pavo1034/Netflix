// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaTpnQWvasjMoJ-6sfbhdP9srQy6Jph7M",
  authDomain: "netflixgpt-8c5ec.firebaseapp.com",
  projectId: "netflixgpt-8c5ec",
  storageBucket: "netflixgpt-8c5ec.appspot.com",
  messagingSenderId: "478558935406",
  appId: "1:478558935406:web:8374fb8bf97f196610097f",
  measurementId: "G-TPP1ZSJ2N1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();