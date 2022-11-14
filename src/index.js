import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getFirestore } from 'firebase/firestore';


// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyC11KhJrW2dOy0xdCtfQiQoBQbBoDaD_JE",

  authDomain: "react-bruno.firebaseapp.com",

  projectId: "react-bruno",

  storageBucket: "react-bruno.appspot.com",

  messagingSenderId: "238812209085",

  appId: "1:238812209085:web:9ee6c5a40f7d0f34d1fcd4"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
