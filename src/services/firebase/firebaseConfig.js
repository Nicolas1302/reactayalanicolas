import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'


// Import the functions you need from the SDKs you need
// import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzp0AuXMsFxq18pU7oQ4tPC68ixv-86fE",
  authDomain: "cursonicolasreactjs.firebaseapp.com",
  projectId: "cursonicolasreactjs",
  storageBucket: "cursonicolasreactjs.appspot.com",
  messagingSenderId: "558758469347",
  appId: "1:558758469347:web:df4ee4b6ae327ab6912fd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)