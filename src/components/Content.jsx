import React from 'react';
import { Outlet } from 'react-router-dom';

const Content = ({children}) => {
  return (
    <main id="content-container" className="w-full h-full bg-stone-200 xl:overflow-y-auto">
      {/* <Outlet /> */}
      {children}
    </main>
  );
};

export default Content;
