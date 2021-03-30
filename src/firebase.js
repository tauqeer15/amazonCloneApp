// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyDHT7RP1M-qLxEcbb-nw5f03LB2A68CD-o",
  authDomain: "challenge-f4f5a.firebaseapp.com",
  projectId: "challenge-f4f5a",
  storageBucket: "challenge-f4f5a.appspot.com",
  messagingSenderId: "296025299319",
  appId: "1:296025299319:web:e7ae9f78682ef41a8d2972",
  measurementId: "G-984JPX3J6P"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };