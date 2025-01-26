import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budgetRange: "",
    timeline: "",
    message: "",
  });

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
      },
      (error) => {
        alert("Failed to send email. Please try again.");
        console.error("Email error:", error.text);
      }
    );
  };
  return (
    <div className="py-16 px-6 cursor-default">
      <div className="text-center mb-16">
        <motion.h1
          className="font-serif bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent text-6xl md:text-8xl font-extrabold relative"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          Contact<span className="text-white"> Us</span>
        </motion.h1>
        <motion.p
          className="text-white mt-4 text-xl"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          We'd love to hear from you. Reach out to us for any inquiries or
          feedback!
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 p-6 lg:p-12">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-purple-600 text-2xl" />
            <span className="text-lg font-medium text-white">
              +44 7709 783 141
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-purple-600 text-2xl" />
            <span className="text-lg font-medium text-white">
              metawebvalet@gmail.com
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-purple-600 text-2xl" />
            <span className="text-lg font-medium text-white">Carlisle, UK</span>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full max-w-lg bg-gray-900 bg-opacity-90 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-serif font-semibold text-center mb-6 text-white">
              Get in Touch
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
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="mb-4 p-3 w-full border border-gray-600 rounded-md text-gray-200 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <input
                type="text"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                placeholder="Project Type"
                className="mb-4 p-3 w-full border border-gray-600 rounded-md text-gray-200 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <input
                type="text"
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                placeholder="Budget Range"
                className="mb-4 p-3 w-full border border-gray-600 rounded-md text-gray-200 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <input
                type="text"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                placeholder="Timeline"
                className="mb-4 p-3 w-full border border-gray-600 rounded-md text-gray-200 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Additional Info"
                rows="4"
                className="mb-4 p-3 w-full border border-gray-600 rounded-md text-gray-200 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-6 rounded-full text-lg transition-all duration-300 hover:shadow-md hover:scale-105"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
