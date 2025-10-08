import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Firebase configuration - Replace with your actual config
const firebaseConfig = {
  apiKey: "AIzaSyDGmBn64zLq_PAmsPwaBdDGVTAQf2rYsuQ",
  authDomain: "clique-f5ca5.firebaseapp.com",
  projectId: "clique-f5ca5",
  storageBucket: "clique-f5ca5.firebasestorage.app",
  messagingSenderId: "192971549915",
  appId: "1:192971549915:web:b183f62cb4cdb7559ef0fe",
  measurementId: "G-6F03C3S6ZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase services
export const auth = getAuth(app)
export const db = getFirestore(app)

export default app
