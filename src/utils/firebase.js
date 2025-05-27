// utils/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
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

// Initialiser Firebase (ou récupérer l'instance existante)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialiser Analytics uniquement côté client
let analytics = null;
if (typeof window !== "undefined") {
  try {
    analytics = getAnalytics(app);
  } catch (error) {
    console.error("Erreur lors de l'initialisation d'Analytics :", error);
  }
}

// Exporter l'application et analytics
export { app, analytics };
