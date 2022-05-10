// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDUu0wjLKMimvwe-JQbAkiA9wwPh9qN-o",
  authDomain: "ema-john-simple-f6f5b.firebaseapp.com",
  projectId: "ema-john-simple-f6f5b",
  storageBucket: "ema-john-simple-f6f5b.appspot.com",
  messagingSenderId: "694853585773",
  appId: "1:694853585773:web:a9b73f463534955b0b6864"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;