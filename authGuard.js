import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCuZF1y9mSTfW6oRo0UAZ-SDnE4dUkQKZk",
  authDomain: "aplicativo-magnata.firebaseapp.com",
  projectId: "aplicativo-magnata",
  storageBucket: "aplicativo-magnata.firebasestorage.app",
  messagingSenderId: "1036873396258",
  appId: "1:1036873396258:web:4997f5a56c75158db55a7b",
  measurementId: "G-8LGZBWZYWY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = 'login.html';
  } else {
    console.log("Usuário autenticado:", user.email);
  }
});
