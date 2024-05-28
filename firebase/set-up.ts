// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApT-LusdMEuJL52W8DqtbiJ_tpvpCfaAg",
  authDomain: "jobbex-website.firebaseapp.com",
  projectId: "jobbex-website",
  storageBucket: "jobbex-website.appspot.com",
  messagingSenderId: "914352561168",
  appId: "1:914352561168:web:93afb7ee9a6362ae40fe95",
  measurementId: "G-7Q416J82ZF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fileStore = getStorage(app);
