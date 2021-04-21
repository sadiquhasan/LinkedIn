import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB2o0FjKf9ajUMY8iMSjSNw0sGN_iPab0U",
    authDomain: "linked-in-clone-b3a7d.firebaseapp.com",
    projectId: "linked-in-clone-b3a7d",
    storageBucket: "linked-in-clone-b3a7d.appspot.com",
    messagingSenderId: "1019017466979",
    appId: "1:1019017466979:web:a47b3f1f84d1862db79456"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export { db , auth };