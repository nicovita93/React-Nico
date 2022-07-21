import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz08GLA-eWsSrTWpItndlaIFjOCA5TWIk",
  authDomain: "reactnico93.firebaseapp.com",
  projectId: "reactnico93",
  storageBucket: "reactnico93.appspot.com",
  messagingSenderId: "414139223955",
  appId: "1:414139223955:web:f59ad0898df8634ee6e266"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
