import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/combined.css'; // Import the global stylesheet
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
