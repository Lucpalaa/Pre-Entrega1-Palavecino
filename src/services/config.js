import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWQ5pBzSLf89PmdABIuySxp3DAGKrEVOU",
  authDomain: "vg-tienda.firebaseapp.com",
  projectId: "vg-tienda",
  storageBucket: "vg-tienda.appspot.com",
  messagingSenderId: "396840645339",
  appId: "1:396840645339:web:318cda3a33081a9f4012fe"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);