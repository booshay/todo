import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider, useSelector } from 'react-redux';
import fbConfig from './config/fbConfig';
import firebase from 'firebase/app'
import 'firebase/firestore' // <- needed if using firestore
import 'firebase/auth'
import { createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import createReduxStore from './store/createReduxStore';

var firebaseConfig = fbConfig;

const rrfConfig = {
  userProfile: 'users', // firebase root where user profiles are stored
  attachAuthIsReady: true, // attaches auth is ready promise to store
  firebaseStateName: 'firebase', // should match the reducer name ('firebase' is default)
  useFirestoreForProfile: true
}

// Initialize firebase instance
firebase.initializeApp(firebaseConfig)

// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore


const store = createReduxStore()

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
  return children
}

ReactDOM.render(< Provider store={store} >
  <ReactReduxFirebaseProvider {...rrfProps}>
    <AuthIsLoaded><App /> </AuthIsLoaded>
  </ReactReduxFirebaseProvider>
</Provider >, document.getElementById('root'));

serviceWorker.unregister();
