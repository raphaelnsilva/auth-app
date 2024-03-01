import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const firebaseConfig = {
  apiKey: "AIzaSyAj4cpAvz0Gjk-x8K87L0dY3pWAhGnAumc",
  authDomain: "auth-app-415022.firebaseapp.com",
  projectId: "auth-app-415022",
  storageBucket: "auth-app-415022.appspot.com",
  messagingSenderId: "218567215578",
  appId: "1:218567215578:web:5470995ea5e5058dae98e3",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth, provider };