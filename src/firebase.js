import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAAi4G86tWcok97zA3FTUG4k5mIbX_p1zc",
    authDomain: "vuejsfipu.firebaseapp.com",
    projectId: "vuejsfipu",
    storageBucket: "vuejsfipu.appspot.com",
    messagingSenderId: "552094310522",
    appId: "1:552094310522:web:43876fae7c5d888d91dbc3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
