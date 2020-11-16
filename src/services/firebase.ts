import firebase from 'firebase';

const FB_CONFIG = {
  apiKey: "AIzaSyAJX0kVXP5Ny-yrpuho0mJBV1tu2JWRDQ0",
  authDomain: "app-churrastche.firebaseapp.com",
  databaseURL: "https://app-churrastche.firebaseio.com",
  projectId: "app-churrastche",
  storageBucket: "app-churrastche.appspot.com",
  messagingSenderId: "481414184467",
  appId: "1:481414184467:web:970bf78736c3f2694a09e6"
};

firebase.initializeApp(FB_CONFIG);

export default firebase;