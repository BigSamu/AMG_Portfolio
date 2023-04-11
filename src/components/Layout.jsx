import React from 'react';

import Navbar from './Navbar';
import Content from './Content';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-[calc(100vh-4rem-2rem)] lg:h-screen">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
