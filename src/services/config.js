
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDRu-6SpMq2cK9UTyNIp5tHLLAT67PHhAg",
  authDomain: "vg-clothes.firebaseapp.com",
  projectId: "vg-clothes",
  storageBucket: "vg-clothes.appspot.com",
  messagingSenderId: "1027108070996",
  appId: "1:1027108070996:web:b4cd42d2f17e480fb1efc1"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);