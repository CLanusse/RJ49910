import MOCK_DATA from './data.json' assert { type: 'json'}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore"

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
const db = getFirestore( app )

const productosRef = collection(db, 'productos')

MOCK_DATA.forEach(item => {
    delete item.id

    addDoc(productosRef, item)
})