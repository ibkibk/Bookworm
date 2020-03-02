import firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLibmzrBskcL-yd42ZEVoRAKWOGn7lkis",
    authDomain: "bookworm-f5e54.firebaseapp.com",
    databaseURL: "https://bookworm-f5e54.firebaseio.com",
    projectId: "bookworm-f5e54",
    storageBucket: "bookworm-f5e54.appspot.com",
    messagingSenderId: "279816616731",
    appId: "1:279816616731:web:ed6d41e0baa9e65963b1be"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const firestore = firebase.firestore();

  export default firebase;