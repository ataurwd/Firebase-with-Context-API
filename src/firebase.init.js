// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-kCyczgfTFGijCNEFXiqi94xFjFjAv1E",
  authDomain: "login-logout-project-9c417.firebaseapp.com",
  projectId: "login-logout-project-9c417",
  storageBucket: "login-logout-project-9c417.firebasestorage.app",
  messagingSenderId: "36293167666",
  appId: "1:36293167666:web:b63a1e15a8d84c3c064a2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;