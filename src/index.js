import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'; 
import './css/combined.css'; 
import App from './App';

createRoot(
  document.getElementById('root')
).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
);
