import React from 'react';
import { Outlet } from 'react-router-dom';

const Content = () => {
  return (
    <main className="container mx-auto w-full h-full lg:flex-grow lg:h-auto overflow-y-auto">
      <Outlet />
    </main>
  );
};

export default Content;
