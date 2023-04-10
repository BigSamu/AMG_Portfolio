import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiUser, FiBriefcase, FiMail } from 'react-icons/fi';

const Navbar = () => {
  const activeStyles = "text-black border-b-2 border-black";
  const inactiveStyles = "text-gray-400 hover:text-gray-600 cursor";
  const getLinkStyles = ({ isActive, isPending }) => isActive ? activeStyles : inactiveStyles;

  return (
    <header className="bg-gray-100 p-4 sticky top-0 left-0  w-full z-10 h-16 xl:hidden shadow">
      <div className="flex flex-row items-center justify-between ">
        <h1 className="text-3xl leading-tight font-mono font-black">AMG</h1>
        <span className="inline-flex space-x-3">
          <NavLink
            to="/"
            className={getLinkStyles}
          >
            <span className="sr-only">Inicio</span>
            <FiHome className="h-7 w-7" />
          </NavLink>
          <NavLink
            to="/about"
            className={getLinkStyles}
          >
            <span className="sr-only">Acerca de mi</span>
            <FiUser className="h-7 w-7" />
          </NavLink>
          <NavLink
            to="/portfolio"
            className={getLinkStyles}
          >
            <span className="sr-only">Portafolio</span>
            <FiBriefcase className="h-7 w-7" />
          </NavLink>
          <NavLink
            to="/contact"
            className={getLinkStyles}
          >
            <span className="sr-only">Contacto</span>
            <FiMail className="h-7 w-7" />
          </NavLink>
        </span>
      </div>
    </header>
  );
};

export default Navbar;
