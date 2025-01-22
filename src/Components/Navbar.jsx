import { useState } from "react";
import {
  FaHome,
  FaUserAlt,
  FaServicestack,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import HamburgerMenu from "react-hamburger-menu";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budgetRange: "",
    timeline: "",
    message: "",
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleToggle = () => setIsOpen(!isOpen);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_SERVICE_KEY;
    const templateId = import.meta.env.VITE_TEMPLATE_KEY;
    const userId = import.meta.env.VITE_PUBLIC_KEY;

    if (
      !formData.name ||
      !formData.email ||
      !formData.projectType ||
      !formData.budgetRange ||
      !formData.timeline ||
      !formData.message
    ) {
      alert("Please fill all the fields!");
      return;
    }

    alert("Form Submitted!");
    closeModal();
  };

  return (
    <div className="sticky top-0 z-30 bg-black h-[12vh] text-white flex justify-between items-center px-6 py-4 text-xl">
      <div className="flex items-center space-x-4 cursor-default">
        <div className="rounded-full overflow-hidden w-16 h-16 border-2 border-transparent bg-clip-border bg-purple-500">
          <img src={logo} alt="Logo" className="object-cover w-full h-full" />
        </div>
        <h1 className="text-xl font-sans">Meta WebValet</h1>
      </div>

      <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 gap-6 text-lg cursor-pointer">
        <Link to="home" smooth duration={500} className="hover:text-purple-500">
          <FaHome className="inline mr-2" />
          Home
        </Link>
        <Link
          to="about"
          smooth
          duration={500}
          className="hover:text-purple-500"
        >
          <FaUserAlt className="inline mr-2" />
          About Us
        </Link>
        <Link
          to="service"
          smooth
          duration={500}
          className="hover:text-purple-500"
        >
          <FaServicestack className="inline mr-2" />
          Services
        </Link>
        <Link
          to="projects"
          smooth
          duration={500}
          className="hover:text-purple-500"
        >
          <FaProjectDiagram className="inline mr-2" />
          Projects
        </Link>
        <Link
          to="contact"
          smooth
          duration={500}
          className="hover:text-purple-500"
        >
          <FaEnvelope className="inline mr-2" />
          Contact Us
        </Link>
      </div>

      <div className="hidden sm:flex">
        <button
          onClick={openModal}
          className="cursor-pointer bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-sm sm:text-base md:text-lg py-2 px-4 rounded-full shadow-lg"
        >
          Request a Quote
        </button>
      </div>

      {/* Hamburger Menu */}
      <div className="sm:hidden z-40">
        <HamburgerMenu
          isOpen={isOpen}
          menuClicked={handleToggle}
          width={24}
          height={18}
          strokeWidth={2}
          color="white"
          animationDuration={0.5}
        />
      </div>

      {/* Side Navigation (Mobile view) */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-black text-white shadow-lg transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start p-6">
          <button
            className="self-end mb-4 text-lg"
            onClick={() => setIsOpen(false)}
          >
            ✖ Close
          </button>
          <Link
            to="home"
            smooth
            duration={500}
            className="py-2 text-lg hover:text-purple-500"
            onClick={() => setIsOpen(false)}
          >
            <FaHome className="inline mr-2" />
            Home
          </Link>
          <Link
            to="about"
            smooth
            duration={500}
            className="py-2 text-lg hover:text-purple-500"
            onClick={() => setIsOpen(false)}
          >
            <FaUserAlt className="inline mr-2" />
            About Us
          </Link>
          <Link
            to="service"
            smooth
            duration={500}
            className="py-2 text-lg hover:text-purple-500"
            onClick={() => setIsOpen(false)}
          >
            <FaServicestack className="inline mr-2" />
            Services
          </Link>
          <Link
            to="projects"
            smooth
            duration={500}
            className="py-2 text-lg hover:text-purple-500"
            onClick={() => setIsOpen(false)}
          >
            <FaProjectDiagram className="inline mr-2" />
            Projects
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            className="py-2 text-lg hover:text-purple-500"
            onClick={() => setIsOpen(false)}
          >
            <FaEnvelope className="inline mr-2" />
            Contact Us
          </Link>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-11/12 sm:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-black text-center font-sans cursor-default">
              Request a Free Quote
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="mb-4 p-2 w-full border rounded-md text-black"
              />
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email"
                className="mb-4 p-2 w-full border rounded-md text-black"
              />
              <input
                type="text"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                placeholder="projectType"
                className="mb-4 p-2 w-full border rounded-md text-black"
              />
              <input
                type="text"
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                placeholder="budgetRange"
                className="mb-4 p-2 w-full border rounded-md text-black"
              />
              <input
                type="text"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                placeholder="timeline"
                className="mb-4 p-2 w-full border rounded-md text-black"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Additional Info"
                className="mb-4 p-2 w-full border rounded-md text-black"
              />
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-6 rounded-full text-lg transition-all duration-300"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-6 rounded-full text-lg transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
