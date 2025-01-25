import React from "react";
import { FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12 cursor-default">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0 text-center sm:text-left">
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-purple-500" />
            <p className="text-sm">metawebvalet@gmail.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-purple-500" />
            <p className="text-sm">+4412-345-6789</p>
          </div>
        </div>

        <div className="flex space-x-6 mb-4 sm:mb-0 justify-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-purple-500"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-purple-500"
          >
            About Us
          </Link>
          <Link
            to="service"
            smooth={true}
            duration={500}
            className="hover:text-purple-500"
          >
            Our Services
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-purple-500"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-purple-500"
          >
            Contact
          </Link>
        </div>

        <div className="flex space-x-4 mb-4 sm:mb-0 justify-center sm:justify-end">
          <a
            href="https://www.linkedin.com"
            className="text-xl hover:text-purple-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            className="text-xl hover:text-purple-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-sm">© 2025 Metawebvalet. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
