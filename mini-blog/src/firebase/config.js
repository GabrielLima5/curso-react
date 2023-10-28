import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDme2gJJOd_h_XmzCMgrwAaaNIIL3y8kCc",
  authDomain: "mini-blog-a2f16.firebaseapp.com",
  projectId: "mini-blog-a2f16",
  storageBucket: "mini-blog-a2f16.appspot.com",
  messagingSenderId: "137429943087",
  appId: "1:137429943087:web:e95b46a821ebef259ad7da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }