import firebase from 'firebase/app'
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";
const  firebaseConfig = {
    apiKey: "AIzaSyA82XQuXVUjeJEWyqCnUsBMokzYPeJIdOE",
    authDomain: "linkedin-fdcc6.firebaseapp.com",
    projectId: "linkedin-fdcc6",
    storageBucket: "linkedin-fdcc6.appspot.com",
    messagingSenderId: "937860123644",
    appId: "1:937860123644:web:f25b21acd0dff675e54079",
    measurementId: "G-KMWXCGX42Z"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
 
const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()

const storage = firebase.storage()

export { auth, provider, storage }

export default db
