// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBr-z24PPfdEp_IFnXAWr5HwEPodz_IgnI",
  authDomain: "myshowtracker-93954.firebaseapp.com",
  projectId: "myshowtracker-93954",
  storageBucket: "myshowtracker-93954.firebasestorage.app",
  messagingSenderId: "508417592783",
  appId: "1:508417592783:web:b189a1a05e48ae9ba316ba",
  measurementId: "G-5Z7QT4W0R3",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
