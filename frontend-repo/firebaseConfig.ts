import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { connectAuthEmulator } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0-MHj3wf3tCxfJPzwtF_FJBn7r2SW79w",
  authDomain: "ebuddy-bd54f.firebaseapp.com",
  projectId: "ebuddy-bd54f",
  storageBucket: "ebuddy-bd54f.firebasestorage.app",
  messagingSenderId: "338354463482",
  appId: "1:338354463482:web:4d6a6e038d37755e7bdf43",
  measurementId: "G-R1KNY73JZZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// connectAuthEmulator(auth, "http://localhost:9099");

export const loginWithEmail = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signupWithEmail = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export { auth };
