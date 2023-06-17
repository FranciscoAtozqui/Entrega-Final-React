import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "tienda-gamer-bb1a7.firebaseapp.com",
    projectId: "tienda-gamer-bb1a7",
    storageBucket: "tienda-gamer-bb1a7.appspot.com",
    messagingSenderId: "341130922675",
    appId: "1:341130922675:web:2624201a688e06ca5b7ec6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);