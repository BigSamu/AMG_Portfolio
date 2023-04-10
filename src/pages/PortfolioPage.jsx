import React from 'react';
import SEO from '../components/SEO';

import under_construction from '/assets/under_construction.png';

const PortfolioPage = () => {
  return (
    <>
      <SEO title="AMG | Portafolio</title" />

      <div className="min-h-[calc(100vh-4rem-2rem)] xl:min-h-screen grid place-items-center h-full p-5">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-5">Portfolio Page</h1>
          <img src={under_construction} />
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
