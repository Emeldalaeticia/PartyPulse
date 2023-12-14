// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIANJS2wPOgLtjjX8D5lvlnEg4V8NhXeI",
  authDomain: "partypulse-64694.firebaseapp.com",
  projectId: "partypulse-64694",
  storageBucket: "partypulse-64694.appspot.com",
  messagingSenderId: "265405331412",
  appId: "1:265405331412:web:601aea57192f8b0109c841",
  measurementId: "G-CGH2SHPT89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;