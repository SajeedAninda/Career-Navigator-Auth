// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqhYX_8hjoQFm0jYuNKrOxfk4FWSEwoAI",
  authDomain: "career-navigator-auth.firebaseapp.com",
  projectId: "career-navigator-auth",
  storageBucket: "career-navigator-auth.appspot.com",
  messagingSenderId: "198059801871",
  appId: "1:198059801871:web:04af6a9561fb21d508127a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;