import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAX9ZjuTKWiiZDOmMznCTKYWIVctUeHTlk",
  authDomain: "kanban-app-d7d0d.firebaseapp.com",
  projectId: "kanban-app-d7d0d",
  storageBucket: "kanban-app-d7d0d.firebasestorage.app",
  messagingSenderId: "896860924396",
  appId: "1:896860924396:web:633b6829f8946a915f38c9",
  measurementId: "G-KQMVVBC1Z4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);