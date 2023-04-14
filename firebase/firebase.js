import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDuIVtMMmIKM6wU0YBlsfKPxhUQ2bdYb50",
    authDomain: "fir-todo-app-a6bf1.firebaseapp.com",
    projectId: "fir-todo-app-a6bf1",
    storageBucket: "fir-todo-app-a6bf1.appspot.com",
    messagingSenderId: "108965007626",
    appId: "1:108965007626:web:cd71a0114446703500aaf3",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
