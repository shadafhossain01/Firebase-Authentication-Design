// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4l92xDBTr6409B0L8--VQFV-fOFF5fdM",
  authDomain: "fir-authentication-design.firebaseapp.com",
  projectId: "fir-authentication-design",
  storageBucket: "fir-authentication-design.firebasestorage.app",
  messagingSenderId: "701740218751",
  appId: "1:701740218751:web:9b16568f13a7aefce6824a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  