import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'; 
import './css/combined.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDKnMX8Gz8WGVzZw3Y-7rfLTvSB62c3s2Y",
  authDomain: "subletcentral.firebaseapp.com",
  databaseURL: "https://subletcentral-default-rtdb.firebaseio.com",
  projectId: "subletcentral",
  storageBucket: "subletcentral.appspot.com",
  messagingSenderId: "1014839689452",
  appId: "1:1014839689452:web:084a37ad1168c79e99a5c9"
};

 initializeApp(firebaseConfig);

createRoot(
  document.getElementById('root')
).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
);
