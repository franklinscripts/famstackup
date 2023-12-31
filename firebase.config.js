// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC_skscsNg68kWbAdahYORxs9K15sV92go",
  authDomain: "famstack-7326b.firebaseapp.com",
  projectId: "famstack-7326b",
  storageBucket: "famstack-7326b.appspot.com",
  messagingSenderId: "951468687369",
  appId: "1:951468687369:web:ddc3be6e5f5f04742138d8",
  measurementId: "G-Z5ZYJ2W7J8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


export default app