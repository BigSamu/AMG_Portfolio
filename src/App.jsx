import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Helmet} from 'react-helmet';

import avatar_1 from '/assets/avatar_1.jpeg';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">

      <Helmet>
        <meta
          name="keywords"
          content="portafolio, anamariagutierrez, artista"
        />

        <meta property="og:title" content="AMG Portfolio" />
        <meta
          property="og:description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <meta property="og:image" content={avatar_1} />
        <meta property="og:url" content="https://www.anamariagutierrez.art" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="contact" element={<ContactPage />} />

          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
