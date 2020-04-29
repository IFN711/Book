import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCBqQUA4fGEe-L_YkApIimI-oa4ZtltIRQ",
    authDomain: "lfaproject-89d9e.firebaseapp.com",
    databaseURL: "https://lfaproject-89d9e.firebaseio.com",
    projectId: "lfaproject-89d9e",
    storageBucket: "lfaproject-89d9e.appspot.com",
    messagingSenderId: "473618244286",
    appId: "1:473618244286:web:846daba8991379903534ef",
    measurementId: "G-NQ5T64YXKZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();