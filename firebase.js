import firebase from 'firebase'
import "firebase/firestore"
import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyBq9iJ1jD1bR48aZA3lXIJXELIVsxqchCk",
    authDomain: "signal-clone-d346a.firebaseapp.com",
    projectId: "signal-clone-d346a",
    storageBucket: "signal-clone-d346a.appspot.com",
    messagingSenderId: "858643415223",
    appId: "1:858643415223:web:d2c1e525b2f74a06c90d32"
  };

  let app
  
  if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
  }else{
    app = firebase.app()
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export { db,auth };