import React from 'react';

import Navbar from './Navbar';
import Content from './Content';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar/>
        <Content/>
      </div>
      <Footer/>
    </>
  );
};

export default Layout;
