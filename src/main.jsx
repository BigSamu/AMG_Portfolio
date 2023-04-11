import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

// importing the provider
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import './index.css';

const helmetContext = {};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <HelmetProvider context={helmetContext}>
      <Router>
        <App />
      </Router>
    </HelmetProvider>
  </StrictMode>
);
