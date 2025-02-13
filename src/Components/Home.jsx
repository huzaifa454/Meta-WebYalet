import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

    emailjs.send(serviceId, templateId, formData, userId).then(
      (result) => {
        alert("Email sent successfully!");
        console.log("Email sent:", result.text);
        setFormData({
          name: "",
          email: "",
          projectType: "",
          budgetRange: "",
          timeline: "",
          message: "",
        });
        closeModal();
      },
      (error) => {
        alert("Failed to send email. Please try again.");
        console.error("Email error:", error.text);
      }
    );
  };

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 text-white flex flex-col justify-center items-center min-h-screen px-4 sm:py-24 md:py-32 cursor-default">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center font-serif bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          'Meta
        </motion.h1>

        <motion.h2
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center mt-2 font-serif "
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          WebValet.
        </motion.h2>
        <motion.p
          className="max-w-[90%] sm:max-w-[30%] text-center pt-6 px-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        >
          We create custom websites and stunning designs that elevate your brand
          and ensure a seamless user experience
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6"
        >
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start items-center">
            <motion.div
              className="inline-flex"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-sm sm:text-base md:text-lg py-2 px-4 rounded-full shadow-lg relative overflow-hidden group"
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition duration-300"
                />
                <span className="relative">Learn About Us</span>
              </Link>
            </motion.div>

            <motion.div
              className="inline-flex"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <button
                onClick={openModal}
                className="sm:hidden cursor-pointer hover:text-primary bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-sm sm:text-base md:text-lg py-2 px-4 rounded-full shadow-lg"
              >
                Request a Quote
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-900 bg-opacity-90 p-6 rounded-lg w-11/12 sm:w-1/2">
            <h2 className="text-white text-2xl font-bold font-serif mb-4 text-center">
              Request a Free Quote
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="mb-4 p-3 w-full border border-gray-600 rounded-md text-gray-200 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email"
                className="mb-4 p-3 w-full border border-gray-600 rounded-md text-gray-200 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                placeholder="projectType"
                className="mb-4 p-3 w-full border border-gray-600 rounded-md text-gray-200 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                placeholder="budgetRange"
                className="mb-4 p-3 w-full border border-gray-600 rounded-md text-gray-200 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                placeholder="timeline"
                className="mb-4 p-3 w-full border border-gray-600 rounded-md text-gray-200 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Additional Info"
                className="mb-4 p-3 w-full border border-gray-600 rounded-md text-gray-200 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
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

export default Home;
