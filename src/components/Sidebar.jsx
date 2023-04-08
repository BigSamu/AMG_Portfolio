import React from 'react';
import { FiHome, FiUser, FiBriefcase, FiMail } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import userDetails from '../data/userDetails';

const Sidebar = () => {
  const activeStyles = 'flex items-center text-black underline';
  const inactiveStyles =
    'flex items-center text-gray-400 hover:text-gray-600 cursor';
  const getLinkStyles = ({ isActive, isPending }) =>
    isActive ? activeStyles : inactiveStyles;

  return (
    <aside className="bg-gray-200 p-4 w-full h-full hidden xl:block xl:w-96 lg:h-auto">
      <div className="flex flex-col items-center justify-center h-full  border-r border-gray-200 bg-white">
        <div className="w-full flex flex-col items-center justify-center">
          <div>
            <h1 className="text-5xl leading-tight font-mono font-black">AMG</h1>
            <p className="italic font-small">{userDetails.full_name}</p>

            <ul className="list-inside list-none text-left mt-10 space-y-2 font-press-start font-bold">
              <li className="flex items-center">
                <NavLink to="/" className={getLinkStyles}>
                  <FiHome className="h-5 w-5 mr-1" />
                  Home
                </NavLink>
              </li>
              <li className="flex items-center">
                <NavLink to="/about" className={getLinkStyles}>
                  <FiUser className="h-5 w-5 mr-1" />
                  About
                </NavLink>
              </li>
              <li className="flex items-center">
                <NavLink to="/portfolio" className={getLinkStyles}>
                  <FiBriefcase className="h-5 w-5 mr-1" />
                  Portfolio
                </NavLink>
              </li>
              <li className="flex items-center">
                <NavLink to="/contact" className={getLinkStyles}>
                  <FiMail className="h-5 w-5 mr-1" />
                  Contact
                </NavLink>
              </li>
            </ul>

            <p className="text-gray-500 italic mt-5 antialiased text-sm">
              {' '}
              &#64; 2023 All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
