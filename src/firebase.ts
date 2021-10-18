import * as firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { resolve } from 'path';

const environment = process.env.NODE_ENV;

console.log('We are in: ' + environment);

const envPath = resolve(__dirname, '..', 'src', 'config', environment + '.env').trim();

console.log( envPath );

require('dotenv').config({ path: './config/development.env'});

console.log(process.env.REACT_APP_FIREBASE_API_KEY)


// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY || '',

//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || '',

//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || '',

//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || '',

//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || '',

//   appId: process.env.REACT_APP_FIREBASE_APP_ID || '',

//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || '',
// };




// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app); 

export default app;