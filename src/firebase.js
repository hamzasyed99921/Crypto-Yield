import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpzPUoVxynEaVGzxyGG2ufvztJd_Z2fuA",
  authDomain: "react-firebase-auth-61d4d.firebaseapp.com",
  projectId: "react-firebase-auth-61d4d",
  storageBucket: "react-firebase-auth-61d4d.appspot.com",
  messagingSenderId: "715299933107",
  appId: "1:715299933107:web:05e82c5bd178d3a23499c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);