// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWg6FTnNkPvkbyw4f2MOLrrhmK9UivrXM",
  authDomain: "rj-49910.firebaseapp.com",
  projectId: "rj-49910",
  storageBucket: "rj-49910.appspot.com",
  messagingSenderId: "767247413515",
  appId: "1:767247413515:web:913b0fb2ddbbd38c97720e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

