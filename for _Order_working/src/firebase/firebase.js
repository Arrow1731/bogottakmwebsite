// src/firebase/firebase.js
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAFdGaB2AuIe7gCwcHwuIpKs76I1g_bI3s",
  authDomain: "library-project-61478.firebaseapp.com",
  projectId: "library-project-61478",
  storageBucket: "library-project-61478.firebasestorage.app",
  messagingSenderId: "330918447891",
  appId: "1:330918447891:web:f0eddbd1197ddb786828e6",
  measurementId: "G-6BM21T1QQ7"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)