import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAifbGSLW6NbTIrij6C0LqbvQcBwBuTFWc",
  authDomain: "scratch-86b10.firebaseapp.com",
  databaseURL:
    "https://scratch-86b10-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "scratch-86b10",
  storageBucket: "scratch-86b10.appspot.com",
  messagingSenderId: "127133976166",
  appId: "1:127133976166:web:265a1f8df8f68d81680fa7",
  measurementId: "G-BKZ9N9Z7J9",
};

let app;

if (getApps.length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const db = getFirestore();
const auth = getAuth();

export { db, auth };
