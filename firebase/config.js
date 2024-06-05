// Import the functions you need from the SDKs you need
import {initializeApp, getApps} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByIhuDHzQbb9mtPCpXxgW4EYM0XdFKxng",
  authDomain: "portfolio-class.firebaseapp.com",
  projectId: "portfolio-class",
  storageBucket: "portfolio-class.appspot.com",
  messagingSenderId: "173820374238",
  appId: "1:173820374238:web:498d4cbfbd5827d37ba64f",
  measurementId: "G-14YCS3SQR6"
};



// Initialize Firebase

let app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const storage = getStorage(app);

export { firestore, storage };
export default app;