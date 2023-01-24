import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1P5BHfWcyFHELlGWd-ZFSkitJAHt8zKc",
  authDomain: "newsapp-ed539.firebaseapp.com",
  projectId: "newsapp-ed539",
  storageBucket: "newsapp-ed539.appspot.com",
  messagingSenderId: "806071209897",
  appId: "1:806071209897:web:e28c2da930f5a19e77beb8",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
