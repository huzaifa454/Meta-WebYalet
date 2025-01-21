import { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import {
  FaHome,
  FaUserAlt,
  FaServicestack,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    ("Menu toggled:", !isOpen);
    setOpen(!isOpen);
  };
  

  return (
    <div className="sticky z-10 bg-black h-[12vh] cursor-pointer text-white flex justify-between items-center px-6 py-4 text-xl">
      <div className="flex flex-col items-center justify-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-white transition-colors duration-300"
        >
          <div className="flex items-center space-x-4">
            <div className="rounded-full overflow-hidden w-16 h-16 border-2 border-transparent bg-clip-border bg-purple-500">
              <img
                src={logo}
                alt="Logo"
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500">
              Meta WebValet
            </h1>
          </div>
        </Link>
      </div>

      <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 gap-6 text-lg">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="transition-colors duration-300 hover:text-purple-500"
        >
          <FaHome className="inline mr-2" />
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="transition-colors duration-300 hover:text-purple-500"
        >
          <FaUserAlt className="inline mr-2" />
          About Us
        </Link>
        <Link
          to="service"
          smooth={true}
          duration={500}
          className="transition-colors duration-300 hover:text-purple-500"
        >
          <FaServicestack className="inline mr-2" />
          Services
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="transition-colors duration-300 hover:text-purple-500"
        >
          <FaProjectDiagram className="inline mr-2" />
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="transition-colors duration-300 hover:text-purple-500"
        >
          <FaEnvelope className="inline mr-2" />
          Contact Us
        </Link>
      </div>

      <div className="flex items-center gap-10">
        <div className="hidden sm:flex gap-6 text-lg">
          <div>
            <button className="bg-gradient-to-l from-purple-500 to-blue-500 rounded-full border-2 p-2 hover:text-xl font-semibold">
              Request a quote
            </button>
          </div>
        </div>
      </div>

      <div className="sm:hidden">
        <HamburgerMenu
          isOpen={isOpen}
          menuClicked={handleToggle}
          width={24}
          height={18}
          strokeWidth={2}
          rotate={0}
          color="white"
          borderRadius={0}
          animationDuration={0.5}
        />
      </div>

      {isOpen && (
        <div className="absolute top-[6vh] left-0 w-full bg-black flex flex-col items-center text-white text-lg sm:hidden py-4 z-20">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="py-2 hover:text-primary transition-colors duration-300"
            onClick={() => setOpen(false)}
          >
            <FaHome className="inline mr-2" />
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="py-2 hover:text-primary transition-colors duration-300"
            onClick={() => setOpen(false)}
          >
            <FaUserAlt className="inline mr-2" />
            About
          </Link>
          <Link
            to="service"
            smooth={true}
            duration={500}
            className="py-2 hover:text-primary transition-colors duration-300"
            onClick={() => setOpen(false)}
          >
            <FaServicestack className="inline mr-2" />
            Services
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="py-2 hover:text-primary transition-colors duration-300"
            onClick={() => setOpen(false)}
          >
            <FaProjectDiagram className="inline mr-2" />
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="py-2 hover:text-primary transition-colors duration-300"
            onClick={() => setOpen(false)}
          >
            <FaEnvelope className="inline mr-2" />
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
