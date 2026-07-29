// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-2ec89.firebaseapp.com",
  projectId: "mern-estate-2ec89",
  storageBucket: "mern-estate-2ec89.firebasestorage.app",
  messagingSenderId: "235100988244",
  appId: "1:235100988244:web:52f8cc7215f307329d9ec1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);