import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCfoXG4xprF7M9fuaJqRDdUUWzSC0Suy94",
  authDomain: "vapeclub-b4f04.firebaseapp.com",
  projectId: "vapeclub-b4f04",
  storageBucket: "vapeclub-b4f04.appspot.com",
  messagingSenderId: "703940766978",
  appId: "1:703940766978:web:3255fdd17b4f93d4fae61b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)