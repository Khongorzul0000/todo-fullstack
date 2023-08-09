// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXMeP6_plhLh_BHJxsbnOr_0wEKAJT9s8",
  authDomain: "todo-fullstack-ab3de.firebaseapp.com",
  projectId: "todo-fullstack-ab3de",
  storageBucket: "todo-fullstack-ab3de.appspot.com",
  messagingSenderId: "589011154826",
  appId: "1:589011154826:web:05b4de74a827e9dbd47a73",
  measurementId: "G-RMVNE37HXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);