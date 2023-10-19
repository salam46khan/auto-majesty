// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwdzypspBw8b7yAjkgSiBLyMZcDcW0p6g",
  authDomain: "auto-majesty.firebaseapp.com",
  projectId: "auto-majesty",
  storageBucket: "auto-majesty.appspot.com",
  messagingSenderId: "211671821870",
  appId: "1:211671821870:web:9344408983f57a1622b9bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth