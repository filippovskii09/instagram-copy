// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6YLHOFfGomli20IE1TdOVNt-r8VKrOyc",
  authDomain: "inst-clon.firebaseapp.com",
  projectId: "inst-clon",
  storageBucket: "inst-clon.appspot.com",
  messagingSenderId: "533723097612",
  appId: "1:533723097612:web:fb1a8bcfd48f40f0859c29",
  measurementId: "G-4CM3NZTBGZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };
