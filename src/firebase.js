// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAO9AkROvnLCRijqxPp7-HRtRQp0fuBDpY",
    authDomain: "social-network-de1f1.firebaseapp.com",
    projectId: "social-network-de1f1",
    storageBucket: "social-network-de1f1.appspot.com",
    messagingSenderId: "206146124204",
    appId: "1:206146124204:web:d450caca9bb2d8fa44a209",
    measurementId: "G-4V9NT4SW8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;