// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk5N4GI9rhRn19duTbBEa_TvgzSytYu5U",
  authDomain: "task-manager-app-d71c0.firebaseapp.com",
  projectId: "task-manager-app-d71c0",
  storageBucket: "task-manager-app-d71c0.firebasestorage.app",
  messagingSenderId: "762173616876",
  appId: "1:762173616876:web:700f5940b4f98bd9c96bc9",
  measurementId: "G-HL85EEHZ79",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);
export const db = getFirestore(app);