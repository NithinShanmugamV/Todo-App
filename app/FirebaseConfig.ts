// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg5zjOOGPG5-FSBCAXf7asw9kl2R8hhlI",
  authDomain: "todoapp-27f63.firebaseapp.com",
  projectId: "todoapp-27f63",
  storageBucket: "todoapp-27f63.appspot.com",
  messagingSenderId: "765748978920",
  appId: "1:765748978920:web:29f9f937fbad903160955d",
  measurementId: "G-J91STT56Y1"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP)
const colRef = collection(FIREBASE_DB, 'usersTodo')
getDocs( colRef ).then( snapshot => {
  console.log(snapshot.docs)
}
)
const analytics = getAnalytics(FIREBASE_APP);