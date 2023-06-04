// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQSyQO7nv-TFX_joMron7rhFkTEgL7n68",
  authDomain: "authentication-aa7d6.firebaseapp.com",
  projectId: "authentication-aa7d6",
  storageBucket: "authentication-aa7d6.appspot.com",
  messagingSenderId: "637196192284",
  appId: "1:637196192284:web:352393c074632710916dd9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
