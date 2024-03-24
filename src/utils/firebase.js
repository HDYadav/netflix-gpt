// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcwm84LRHW5KOUtYiFjfKFHGTro62j-SQ",
  authDomain: "netflixgpt-5ec3f.firebaseapp.com",
  projectId: "netflixgpt-5ec3f",
  storageBucket: "netflixgpt-5ec3f.appspot.com",
  messagingSenderId: "186042433555",
  appId: "1:186042433555:web:93386cd5b9b69405947fe6",
  measurementId: "G-N4X8Q5K4TV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();