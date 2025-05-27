// utils/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Votre configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCgHqeC3Q8mWrj55-VCI8YOElT63PMRCHo",
  authDomain: "blog-voyage-b40bb.firebaseapp.com",
  projectId: "blog-voyage-b40bb",
  storageBucket: "blog-voyage-b40bb.firebasestorage.app",
  messagingSenderId: "1037380131900",
  appId: "1:1037380131900:web:c1c0898713de015cd2f739",
  measurementId: "G-5NJNXZ8EML",
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Exporter app et analytics pour pouvoir les importer ailleurs
export { app, analytics };
