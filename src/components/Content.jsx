import React from 'react';
import { Outlet } from 'react-router-dom';

const Content = () => {
  return (
    <div className="container mx-auto lg:h-auto bg-stone-200 lg:overflow-y-scroll">
      <main className="w-full h-full lg:flex-grow ">
        <Outlet />
      </main>
    </div>
  );
};

export default Content;
