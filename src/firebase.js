
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDA5qHS6hAJXotSHpC2kyYFukVrJ6Aw1O4",
  authDomain: "todox-your-todo-app.firebaseapp.com",
  projectId: "todox-your-todo-app",
  storageBucket: "todox-your-todo-app.firebasestorage.app",
  messagingSenderId: "1086437597790",
  appId: "1:1086437597790:web:b53ce36904c04600f84acf",
  measurementId: "G-8P0K6Q6ECM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
