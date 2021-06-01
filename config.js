import firebase from "firebase";
require("@firebase/firestore")


var firebaseConfig = {
    apiKey: "AIzaSyAOZIJDqvu7m4k2-XSNUb5hWjS0rMmuq7E",
    authDomain: "book-santa-35a06.firebaseapp.com",
    projectId: "book-santa-35a06",
    storageBucket: "book-santa-35a06.appspot.com",
    messagingSenderId: "178560173734",
    appId: "1:178560173734:web:d532c3713360723e0e5667"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase.firestore();