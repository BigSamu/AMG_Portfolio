import React from "react";
import { Link as ScrollLink } from "react-scroll";

import { FiHome, FiUser, FiBriefcase, FiMail } from "react-icons/fi";
import userDetails from "../data/userDetails";

const Sidebar = () => {
  const activeStyles = "flex items-center !text-black underline";
  const inactiveStyles =
    "flex items-center text-gray-400 hover:text-gray-600 cursor cursor-pointer";

  //   const activeStyles = "text-black border-b-2 border-black";
  // const inactiveStyles = "text-gray-400 hover:text-gray-600 cursor";
  const getLinkStyles = ({ isActive, isPending }) =>
    isActive ? activeStyles : inactiveStyles;

  return (
    <aside className="p-4 w-full h-full hidden xl:block xl:w-96 shadow">
      <div className="flex flex-col items-center justify-center h-full p-10">
        <div className="w-full flex flex-col items-center justify-center">
          <div>
            <h1 className="text-5xl leading-tight font-mono font-black">AMG</h1>
            <p className="italic font-small">{userDetails.full_name}</p>

            <ul className="list-inside list-none text-left mt-10 space-y-2 font-press-start font-bold">
              <li className="flex items-center">
                <ScrollLink
                  activeClass={activeStyles}
                  className={inactiveStyles}
                  to="home"
                  containerId="content-container"
                  spy={true}
                  smooth={true}
                >
                  <FiHome className="h-5 w-5 mr-1" />
                  Inicio
                </ScrollLink>
              </li>
              <li className="flex items-center">
                <ScrollLink
                  activeClass={activeStyles}
                  className={inactiveStyles}
                  to="about"
                  containerId="content-container"
                  spy={true}
                  smooth={true}
                >
                  <FiUser className="h-5 w-5 mr-1" />
                  Acerca de mi
                </ScrollLink>
              </li>
              <li className="flex items-center">
                <ScrollLink
                  activeClass={activeStyles}
                  className={inactiveStyles}
                  to="portfolio"
                  containerId="content-container"
                  spy={true}
                  smooth={true}
                >
                  <FiBriefcase className="h-5 w-5 mr-1" />
                  Portafolio
                </ScrollLink>
              </li>
              <li className="flex items-center">
                <ScrollLink
                  activeClass={activeStyles}
                  className={inactiveStyles}
                  to="contact"
                  containerId="content-container"
                  spy={true}
                  smooth={true}
                >
                  <FiMail className="h-5 w-5 mr-1" />
                  Contacto
                </ScrollLink>
              </li>
            </ul>

            <p className="text-gray-500 italic mt-5 antialiased text-xs">
              &#64;2023 Todos los Derechos Reservados
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
