import React from 'react';
import userDetails from '../data/userDetails';
import under_construction from '/assets/under_construction.png';

const PortfolioPage = () => {
  return (
    <div className="grid place-items-center h-full p-5">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-5">Portfolio Page</h1>
        <img src={under_construction} />
      </div>
    </div>
  );
};

export default PortfolioPage;
