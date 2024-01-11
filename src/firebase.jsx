// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7LIR-PzQM_RUdc6bd0Vda7TJHz2YuRSc",
  authDomain: "dzxc-58679.firebaseapp.com",
  projectId: "dzxc-58679",
  storageBucket: "dzxc-58679.appspot.com",
  messagingSenderId: "386209109805",
  appId: "1:386209109805:web:df9e14d0b07cc7424fe5a4",
  measurementId: "G-5E06PZ4LTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app