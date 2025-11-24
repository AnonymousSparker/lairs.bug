import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCR7XW20yKrP-B9OvcGnQZ7oGJ7QfWv8XE",
  authDomain: "lairsbugblog.firebaseapp.com",
  databaseURL: "https://lairsbugblog-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lairsbugblog",
  storageBucket: "lairsbugblog.firebasestorage.app",
  messagingSenderId: "652256154706",
  appId: "1:652256154706:web:8610d3bc9f588c1ac3fb8b",
  measurementId: "G-28DJFQ5FST"
};

// Initialize Firebase (Singleton pattern to prevent re-initialization)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };