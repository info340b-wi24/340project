import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'; 
import './css/combined.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKnMX8Gz8WGVzZw3Y-7rfLTvSB62c3s2Y",
  authDomain: "subletcentral.firebaseapp.com",
  databaseURL: "https://subletcentral-default-rtdb.firebaseio.com",
  projectId: "subletcentral",
  storageBucket: "subletcentral.appspot.com",
  messagingSenderId: "1014839689452",
  appId: "1:1014839689452:web:084a37ad1168c79e99a5c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(
  document.getElementById('root')
).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
);
