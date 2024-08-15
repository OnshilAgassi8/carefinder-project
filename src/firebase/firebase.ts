import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey:"AIzaSyC7yQ9hCRUintwkzSHqdWpEn4DBLm1N7Dg",
    authDomain: "carefinderapp-a9c08.firebaseapp.com",
    projectId: "carefinderapp-a9c08",
    storageBucket: "carefinderapp-a9c08.appspot.com",
    messagingSenderId: "780061158585",
    appId: "1:780061158585:web:c39dffc1e50560680a3f68",
    measurementId: "G-X6CXHTJ369"
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export default app;
