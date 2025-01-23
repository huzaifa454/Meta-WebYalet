import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPalette } from "react-icons/fa";

const About = () => {
  const services = [
    {
      Icon: FaCode,
      title: "Web Development",
      description:
        "Modern, responsive websites designed to meet your needs. We focus on seamless user experiences.",
      color: "text-purple-500",
    },
    {
      Icon: FaPalette,
      title: "Graphic Design",
      description:
        "Stunning visuals and creative branding solutions to elevate your business. From logos to marketing materials, we deliver excellence.",
      color: "text-purple-500",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-32 text-white text-center px-6 md:px-12 cursor-default">
      <motion.h1
        className="font-serif bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent text-6xl md:text-8xl font-extrabold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Us.
      </motion.h1>
      <motion.p
        className="max-w-3xl text-lg md:text-xl leading-relaxed mb-12 font-serif"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        We are passionate about delivering top-notch web development and graphic
        design services. Explore what we can do for you!
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {services.map(({ Icon, title, description, color }, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 bg-opacity-90 p-8 rounded-xl shadow-lg hover:scale-105 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Icon className={`text-5xl ${color} mb-4`} />
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              {description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
