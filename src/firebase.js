// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAbdd9v3m9cU6PGPDQweIeNu32ZhAA3u5A",
  authDomain: "dbchat-164e5.firebaseapp.com",
  projectId: "dbchat-164e5",
  storageBucket: "dbchat-164e5.appspot.com",
  messagingSenderId: "876054522299",
  appId: "1:876054522299:web:4fdabe2bae178baf5dbc9e",
  measurementId: "G-T4G4CK0817"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

