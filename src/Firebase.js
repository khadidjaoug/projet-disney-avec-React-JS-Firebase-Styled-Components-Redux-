
// Importez les fonctions Firebase requises depuis les modules correspondants
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Votre configuration Firebase reste inchangée
const firebaseConfig = {
  apiKey: "AIzaSyBKjfY0GxqmPDonZDKaq0x-XNiz04kzlQ0",
  authDomain: "disneyplus-clone-8c637.firebaseapp.com",
  projectId: "disneyplus-clone-8c637",
  storageBucket: "disneyplus-clone-8c637.appspot.com",
  messagingSenderId: "139639859408",
  appId: "1:139639859408:web:9451d02631e779defc56d5",
  measurementId: "G-CLB1EMNLX1"
};

// Initialisez Firebase avec votre configuration
const app = initializeApp(firebaseConfig); // eslint-disable-line no-unused-vars
//const analytics = getAnalytics(app);

// Utilisez les fonctions des modules correspondants pour obtenir les instances de Firestore, d'Auth, etc.
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage();

// Exportez les instances Firebase nécessaires
export { auth,signInWithPopup, provider, storage };
export default db;