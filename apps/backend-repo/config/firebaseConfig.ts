import * as admin from 'firebase-admin';
import { getAuth, signInWithPhoneNumber, ConfirmationResult } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import serviceAccount from './serviceAccountKey.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  databaseURL: 'https://ebuddy-bd54f.firebaseio.com'
});

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}


const firebaseApp = initializeApp({
  apiKey: "AIzaSyC0-MHj3wf3tCxfJPzwtF_FJBn7r2SW79w",
  authDomain: "ebuddy-bd54f.firebaseapp.com",
  projectId: "ebuddy-bd54f",
  storageBucket: "ebuddy-bd54f.firebasestorage.app",
  messagingSenderId: "338354463482",
  appId: "1:338354463482:web:4d6a6e038d37755e7bdf43",
  measurementId: "G-R1KNY73JZZ"
});

const auth = getAuth(firebaseApp);

const firestore = admin.firestore();
const database = admin.database();

export { database, firestore , auth };
