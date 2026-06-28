import { initializeApp } from "firebase/app";

// Configuracion publica del proyecto Firebase para el frontend.
// Si necesitas otros productos (Auth, Firestore, Storage, etc.),
// se pueden inicializar desde este mismo app.
const firebaseConfig = {
  apiKey: "AIzaSyAr40JPo7g3X_QYZtEZNWoaGbjyDxK_lYs",
  authDomain: "postulaai.firebaseapp.com",
  projectId: "postulaai",
  storageBucket: "postulaai.firebasestorage.app",
  messagingSenderId: "350467317941",
  appId: "1:350467317941:web:25d40fbb624eca2c3b1efc"
};

export const app = initializeApp(firebaseConfig);
export { firebaseConfig };
