import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

// importing the provider
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import './index.css';

const helmetContext = {};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <Router>
        <App />
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);
