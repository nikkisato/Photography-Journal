import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: 'photography-travel.firebaseapp.com',
  databaseURL: 'https://photography-travel.firebaseio.com',
  projectId: 'photography-travel',
  storageBucket: 'photography-travel.appspot.com',
  messagingSenderId: '872124067667',
  appId: '1:872124067667:web:0c4d575dc2505726427ba6'
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
