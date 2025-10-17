// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// 🔥 Tvoje Firebase kredencijale (iz Firebase Console -> Project Settings -> General -> SDK setup & config)
const firebaseConfig = {
  apiKey: "AIzaSyBHVh6Wk4mLq0gZfpEaemaxmLukBgfy0Jo",
  authDomain: "udruzenjeart-b531b.firebaseapp.com",
  projectId: "udruzenjeart-b531b",
  storageBucket: "udruzenjeart-b531b.firebasestorage.app",
  messagingSenderId: "542655345357",
  appId: "1:542655345357:web:58175e2564284b19bc2f84"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);