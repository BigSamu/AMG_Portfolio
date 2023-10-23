import React, { useState, useEffect, useRef } from "react";
import { FiHome, FiUser, FiBriefcase, FiMail } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const activeStyles = "!text-black border-b-2 border-black";
  const inactiveStyles = "text-gray-400 hover:text-gray-600 cursor";
  const getLinkStyles = ({ isActive, isPending }) =>
    isActive ? activeStyles : inactiveStyles;

  const [offsetNavbar, setOffsetNavabr] = useState(-64);
  const navbarRef = React.createRef(null);
  const resizeObserver = useRef(null);

  useEffect(() => {
    // Check if the navbarRef (reference to the navbar element) is available
    if (navbarRef.current) {
      // Create a new ResizeObserver instance to watch for size changes of the navbar element
      resizeObserver.current = new ResizeObserver((entries) => {
        // Loop through all observed entries (in this case, it should be just the navbar element)
        for (const entry of entries) {
          // Get the observed element (the navbar)
          const observedElement = entry.target;

          // Get the height of the observed element, including padding
          const outerHeight = observedElement.offsetHeight;

          // Update the state with the new height value
          setOffsetNavabr(-1 * outerHeight);
        }
      });

      // Start observing the navbar element for size changes
      resizeObserver.current.observe(navbarRef.current);
    }

    // Clean up function, which runs when the component is unmounted or the effect dependencies change
    return () => {
      // Check if there's a ResizeObserver instance
      if (resizeObserver.current) {
        // Disconnect the observer to stop observing size changes and release resources
        resizeObserver.current.disconnect();
      }
    };
  }, []);

  return (
    <header
      className="bg-gray-100 p-4 sticky top-0 left-0 w-full z-10 h-16 xl:hidden shadow"
      ref={navbarRef}
    >
      <div className="flex flex-row items-center justify-between ">
        <h1 className="text-3xl leading-tight font-mono font-black">AMG</h1>
        <span className="inline-flex space-x-3">
          <ScrollLink
            activeClass={activeStyles}
            className={inactiveStyles}
            to="home"
            spy={true}
            smooth={true}
            offset={offsetNavbar}
          >
            <span className="sr-only">Inicio</span>
            <FiHome className="h-7 w-7" />
          </ScrollLink>
          <ScrollLink
            activeClass={activeStyles}
            className={inactiveStyles}
            to="about"
            spy={true}
            smooth={true}
            offset={offsetNavbar}
          >
            <span className="sr-only">Acerca de mi</span>
            <FiUser className="h-7 w-7" />
          </ScrollLink>
          <ScrollLink
            activeClass={activeStyles}
            className={inactiveStyles}
            to="portfolio"
            spy={true}
            smooth={true}
            offset={offsetNavbar}
          >
            <span className="sr-only">Portafolio</span>
            <FiBriefcase className="h-7 w-7" />
          </ScrollLink>
          <ScrollLink
            activeClass={activeStyles}
            className={inactiveStyles}
            to="contact"
            spy={true}
            smooth={true}
            offset={offsetNavbar}
          >
            <span className="sr-only">Contacto</span>
            <FiMail className="h-7 w-7" />
          </ScrollLink>
        </span>
      </div>
    </header>
  );
};

export default Navbar;
