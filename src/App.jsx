import React from "react";
import { Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<Home />} />

    //   </Route>
    // </Routes>

    <Layout>
      <Element name="home">
        <HomePage />
      </Element>
      <Element name="about">
        <AboutPage />
      </Element>
      <Element name="portfolio">
        <PortfolioPage />
      </Element>
      <Element name="contact">
        <ContactPage />
      </Element>
    </Layout>
  );
}

export default App;
