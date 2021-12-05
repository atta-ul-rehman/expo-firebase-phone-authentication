// Import the functions you need from the SDKs you need
import firebase,{initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4OfJ9qXJgfxRPRXXSoJfOebLnIB6an5g",
  authDomain: "login-94b23.firebaseapp.com",
  projectId: "login-94b23",
  storageBucket: "login-94b23.appspot.com",
  messagingSenderId: "306053555421",
  appId: "1:306053555421:web:0dd3dbd61be7d5315ee734"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auther=getAuth(app);
export default auther;