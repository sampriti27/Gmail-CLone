import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM5P4VoT4bYZ9j6jLvES5OX2p1SbSgqqw",
  authDomain: "clone-c1e60.firebaseapp.com",
  projectId: "clone-c1e60",
  storageBucket: "clone-c1e60.appspot.com",
  messagingSenderId: "778346341338",
  appId: "1:778346341338:web:3a35ca5aed1003d669d6e3",
  measurementId: "G-WMYJCBR7EM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
