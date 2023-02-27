import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCu42bukCY02iHBBH96dNVll1PDRqISqrc",
  authDomain: "tchat-bc3e0.firebaseapp.com",
  projectId: "tchat-bc3e0",
  storageBucket: "tchat-bc3e0.appspot.com",
  messagingSenderId: "104159394540",
  appId: "1:104159394540:web:46e56eac1b1c94de3f83c9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();