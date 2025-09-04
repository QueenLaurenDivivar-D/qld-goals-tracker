import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWVFF4OjnzdrQaU6iaNniwDcPD0UAPEQ8",
  authDomain: "qld-goal-tracker.firebaseapp.com",
  projectId: "qld-goal-tracker",
  storageBucket: "qld-goal-tracker.firebasestorage.app",
  messagingSenderId: "686164709507",
  appId: "1:686164709507:web:64a23c6888b2ee53ca0bb6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)