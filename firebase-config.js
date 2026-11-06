import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Remplace par la config de ton projet (Paramètres du projet → Vos applications)
const firebaseConfig = {
  apiKey: "AIzaSyBeHsBQRt56JEcawTxdtM2pTQLOoEsyPO8",
  authDomain: "entreprisecp-dd174.firebaseapp.com",
  projectId: "entreprisecp-dd174",
  appId: "1:599782235293:web:e28066628097b85a844874",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
