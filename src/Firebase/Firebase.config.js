// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy86HVNhxzoy2cBYMkRZ7uf74MdAMfzhE",
  authDomain: "dragon-news-2-bcdcc.firebaseapp.com",
  projectId: "dragon-news-2-bcdcc",
  storageBucket: "dragon-news-2-bcdcc.firebasestorage.app",
  messagingSenderId: "125280129436",
  appId: "1:125280129436:web:e81bd4086637cdc5aef859"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;