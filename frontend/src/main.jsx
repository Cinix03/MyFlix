import React from 'react';
import ReactDOM from 'react-dom/client'; // Atenție la import
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')); // Creezi root-ul corect
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
