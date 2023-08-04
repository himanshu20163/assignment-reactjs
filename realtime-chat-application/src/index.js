import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const root = ReactDOM.createRoot(document.getElementById('root'));
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-_dYFl5-qCpuYakSjIIqluHhFjsJ7h2k",
  authDomain: "chatapp-c31f7.firebaseapp.com",
  databaseURL: "https://chatapp-c31f7-default-rtdb.firebaseio.com",
  projectId: "chatapp-c31f7",
  storageBucket: "chatapp-c31f7.appspot.com",
  messagingSenderId: "164993884951",
  appId: "1:164993884951:web:abdb10d6e0c415b3e54d52",
  measurementId: "G-7CV7NH7YJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
