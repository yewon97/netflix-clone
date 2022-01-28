import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCYt3m8yChFS_SfiqBMRA7lCyGT0vReo84',
  authDomain: 'netflix-clone-836d9.firebaseapp.com',
  projectId: 'netflix-clone-836d9',
  storageBucket: 'netflix-clone-836d9.appspot.com',
  messagingSenderId: '530157468762',
  appId: '1:530157468762:web:69e7c14d80cbf7c3fcac63',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db; /* default는 1개만 가능 */
