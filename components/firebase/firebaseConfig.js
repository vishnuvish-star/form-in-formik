// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDII-AecZGMXPvPg3Boyfmb2DsPHTIk0jw",
  authDomain: "form-cece4.firebaseapp.com",
  projectId: "form-cece4",
  storageBucket: "form-cece4.appspot.com",
  messagingSenderId: "268580225550",
  appId: "1:268580225550:web:08bb50392d85675f7db25f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
