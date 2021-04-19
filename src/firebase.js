// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyC5CUgJpDW6KUicCpAb26SUEWBiRDEdVUE",
    authDomain: "facebook-clone-7fae9.firebaseapp.com",
    databaseURL: "https://facebook-clone-7fae9.firebaseio.com",
    projectId: "facebook-clone-7fae9",
    storageBucket: "facebook-clone-7fae9.appspot.com",
    messagingSenderId: "1013411498894",
    appId: "1:1013411498894:web:ad5d3909dbce5c9bd4f2df",
    measurementId: "G-95D1QJFSXD"
  }; 

// connect front-end React and backend Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();     //acceess fir store
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();    //authentical


export {auth, provider};
export default db;
