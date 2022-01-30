import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyCdz_h27lshaMxhQPk_fXwv818UhIzCsjM",
  authDomain: "blog-3e163.firebaseapp.com",
  projectId: "blog-3e163",
  storageBucket: "blog-3e163.appspot.com",
  messagingSenderId: "683444322125",
  appId: "1:683444322125:web:2f536d253178ce366ac104"
};

try {
    firebase.initializeApp(firebaseConfig);
  } catch(err){
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)}
  }
  
  const fire = firebase;
  export default fire;