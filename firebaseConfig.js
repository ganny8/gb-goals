
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyD2q2Q5wlkpPgCeAAR0oVKhpjSjfi0dx-I",
  authDomain: "gb-goal.firebaseapp.com",
  projectId: "gb-goal",
  storageBucket: "gb-goal.firebasestorage.app",
  messagingSenderId: "927332234052",
  appId: "1:927332234052:web:f96fb00a16ce3bd7185d11"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)