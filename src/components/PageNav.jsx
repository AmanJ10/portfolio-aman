import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import "../styles/App.css";

function PageNav() {
  const [activeNav, setActiveNav] = useState(false);

  const toggleNav = () => {
    setActiveNav(!activeNav);
  };

  const closeMenu = () => {
    setActiveNav(false);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="top-0 left-0 right-0 flex justify-between items-center p-4 md:p-6 bg-white-100 shadow-lg z-50">
      <div className="flex items-center">
        <motion.div
          className="text-xl font-bold text-darkblue relative overflow-hidden"
          style={{
            width: "120px",
            height: "61px",
            backgroundColor: "",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
          >
            <motion.path
              d="M50 10 A 40 40 0 0 1 90 50 A 40 40 0 0 1 50 90 A 40 40 0 0 1 10 50 A 40 40 0 0 1 50 10"
              fill="transparent"
              stroke="black"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </svg>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-darkblue font-bold text-xl">
            AJ10
          </span>
        </motion.div>
      </div>
      <a
        className={`nav__hamburger ${
          activeNav ? "active" : ""
        } md:hidden cursor-pointer`}
        onClick={toggleNav}
      >
        <span className="block w-6 h-1 bg-black mb-1"></span>
        <span className="block w-6 h-1 bg-black mb-1"></span>
        <span className="block w-6 h-1 bg-black"></span>
      </a>
      <div
        className={`fixed md:static top-0 left-0 w-full h-full md:w-auto md:h-auto bg-white md:bg-transparent flex flex-col md:flex-row items-start justify-center md:justify-end transition-transform transform ${
          activeNav ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-10 md:ml-auto">
          <li>
            <Link
              to="profiles"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
              activeClass="text-primary"
              className="text-darkblue text-lg cursor-pointer"
            >
              Profiles
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
              activeClass="text-primary"
              className="text-darkblue text-lg cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
              activeClass="text-primary"
              className="text-darkblue text-lg cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
              activeClass="text-primary"
              className="text-darkblue text-lg cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default PageNav;
