// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSbnUHmlLZF90Ge1HNjq8QcEG3zd-4FAE",
  authDomain: "mealdb-firebase-11979.firebaseapp.com",
  projectId: "mealdb-firebase-11979",
  storageBucket: "mealdb-firebase-11979.appspot.com",
  messagingSenderId: "426431380834",
  appId: "1:426431380834:web:db434f35ef8b6fa481803b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default(app);