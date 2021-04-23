import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC10LmnKAQBkkghqj3eS-29XEqx_18TWBY",
    authDomain: "disney-clone-556e5.firebaseapp.com",
    projectId: "disney-clone-556e5",
    storageBucket: "disney-clone-556e5.appspot.com",
    messagingSenderId: "705812423288",
    appId: "1:705812423288:web:0cd1c5e631180978dd838d",
    measurementId: "G-P9JLJ80MC9"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage};
  export default db; 