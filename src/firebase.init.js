// Danger-->
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv8XMfqg3RCMuTTuFfGpZZpHAto91tPPs",
  authDomain: "login-form-12837.firebaseapp.com",
  projectId: "login-form-12837",
  storageBucket: "login-form-12837.firebasestorage.app",
  messagingSenderId: "516170221941",
  appId: "1:516170221941:web:47b777a87797e7fd352b3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);