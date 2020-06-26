import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyB7bbs6QOcs4AX3x-yX82gPH0WzjgVNuW0",
    authDomain: "todo-c0ee9.firebaseapp.com",
    databaseURL: "https://todo-c0ee9.firebaseio.com",
    projectId: "todo-c0ee9",
    storageBucket: "todo-c0ee9.appspot.com",
    messagingSenderId: "226761492496",
    appId: "1:226761492496:web:9d441ed61f9547aeede295",
    measurementId: "G-M0E41CWN2H"
};
firebase.initializeApp(config);
firebase.firestore();

export default firebase 