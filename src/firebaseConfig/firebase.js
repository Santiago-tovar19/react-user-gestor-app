import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVxBRvfZwRcNgglGJqvthKFp9yvPC4Bb8",
  authDomain: "react-crud-ca793.firebaseapp.com",
  projectId: "react-crud-ca793",
  storageBucket: "react-crud-ca793.appspot.com",
  messagingSenderId: "142656891720",
  appId: "1:142656891720:web:1f89240332dc2840dba17d",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
