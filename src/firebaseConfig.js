
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdbBX6AMbqV48nsfCO_TjIHb_q0-tLzlg",
  authDomain: "my-articles-77f01.firebaseapp.com",
  projectId: "my-articles-77f01",
  storageBucket: "my-articles-77f01.appspot.com",
  messagingSenderId: "308317987562",
  appId: "1:308317987562:web:2e92b03d053509697aad93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);

export const auth =getAuth(app);