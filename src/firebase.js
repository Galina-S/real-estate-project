// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATVr6t8CNrrzsnVZ1OF9pJtuevtSNI3GQ",
  authDomain: "real-estate-react-project.firebaseapp.com",
  projectId: "real-estate-react-project",
  storageBucket: "real-estate-react-project.appspot.com",
  messagingSenderId: "948194280197",
  appId: "1:948194280197:web:8af1be31dfb26f658d6d6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();