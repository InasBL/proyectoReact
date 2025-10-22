import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import App from './Components/Main/App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header />
      <App />
      <Footer />
  </React.StrictMode>
);


