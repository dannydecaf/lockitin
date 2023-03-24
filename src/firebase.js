import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCXr6efLd2UrUJMYpntyq3tTokV2eFybI4",
    authDomain: "lockitin-15383.firebaseapp.com",
    projectId: "lockitin-15383",
    storageBucket: "lockitin-15383.appspot.com",
    messagingSenderId: "279236918322",
    appId: "1:279236918322:web:3276e918d1c1cded71502b",
    measurementId: "G-RGM0VHZ4CN",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const database = firebaseApp.firestore();

  export default database;