// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// REACT_APP_APIKEY=AIzaSyANfVoUaFmzDSYGDd_6SqS4uxZ4isxER-s
// REACT_APP_AUTHDOMAIN=doctors-portal-13-09-202-e0ebb.firebaseapp.com
// REACT_APP_PROJECTID=doctors-portal-13-09-202-e0ebb
// REACT_APP_STORAGEBUCKET=doctors-portal-13-09-202-e0ebb.appspot.com
// REACT_APP_MESSAGINGSENDERID=131619715194
// REACT_APP_APPID=1:131619715194:web:656c7114c3179fbb06a3c3

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANfVoUaFmzDSYGDd_6SqS4uxZ4isxER-s",
  authDomain: "doctors-portal-13-09-202-e0ebb.firebaseapp.com",
  projectId: "doctors-portal-13-09-202-e0ebb",
  storageBucket: "doctors-portal-13-09-202-e0ebb.appspot.com",
  messagingSenderId: "131619715194",
  appId: "1:131619715194:web:656c7114c3179fbb06a3c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;