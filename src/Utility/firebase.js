// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getAuth} from 'firebase/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBksVgaTPEa0nEUGdv8u9gBPG-xA1v6Xmg",
  authDomain: "netflix-e14db.firebaseapp.com",
  projectId: "netflix-e14db",
  storageBucket: "netflix-e14db.appspot.com",
  messagingSenderId: "198587944759",
  appId: "1:198587944759:web:a372f64447f92499f454b2"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()