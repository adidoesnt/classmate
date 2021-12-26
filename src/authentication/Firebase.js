import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

/*const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectID: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
});*/

const app = firebase.initializeApp({
    apiKey: 'AIzaSyCB3RVFQuY4ZABdbIf2wEOPKNq9m_iZ3wk',
    authDomain: 'classmate-dev-4c796.firebaseapp.com',
    databaseURL: '',
    projectID: 'classmate-dev-4c796',
    storageBucket: 'classmate-dev-4c796.appspot.com',
    messagingSenderId: '226588068110',
    appId: '9e3e48b7bd86e36b82ef5f'
});

export const auth = app.auth();
export default app;