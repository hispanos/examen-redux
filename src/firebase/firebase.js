import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCvhsu5i046oAs1IeTpIHbvS3ETD3fe6ag",
    authDomain: "prueba-72a26.firebaseapp.com",
    databaseURL: "https://prueba-72a26.firebaseio.com",
    projectId: "prueba-72a26",
    storageBucket: "prueba-72a26.appspot.com",
    messagingSenderId: "445936723060",
    appId: "1:445936723060:web:44a0e7ea32b9646ca79d21"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const google = new firebase.auth.GoogleAuthProvider();

  export {
      db, google, firebase
  }