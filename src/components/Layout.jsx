import React from 'react';

import Navbar from './Navbar';
import Content from './Content';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <div className="flex xl:h-screen">
        <Sidebar />
        <Content>{children}</Content>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
