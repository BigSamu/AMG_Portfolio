import React from 'react';

import Navbar from './Navbar';
import Content from './Content';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-[calc(100vh-4rem)] xl:h-screen">
        <Sidebar/>
        <Content/>
      </div>
    </>
  );
};

export default Layout;
