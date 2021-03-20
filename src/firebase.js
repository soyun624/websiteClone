import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCcGAHh9fFM-UcqSMxbxfYyBW4P-Nnho78",
    authDomain: "clone-989af.firebaseapp.com",
    projectId: "clone-989af",
    storageBucket: "clone-989af.appspot.com",
    messagingSenderId: "1033832559123",
    appId: "1:1033832559123:web:6c2aba52a63c6b0a6345e6"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.auth()