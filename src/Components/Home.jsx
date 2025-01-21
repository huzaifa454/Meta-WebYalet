import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import img from "../assets/image5.jpg";

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <img
        src={img}
        alt="Background"
        className="object-cover w-full h-full absolute"
      />
      <div className="relative z-10 text-white flex flex-col justify-center items-center min-h-screen px-4 py-16 sm:py-24 md:py-32 font-serif">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Meta
        </motion.h1>
        <motion.h2
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center mt-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          WebValet.
        </motion.h2>
        <motion.p
          className="max-w-[90%] sm:max-w-[600px] text-center text-sm sm:text-lg md:text-xl lg:text-2xl pt-6 px-4 font-thin"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
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
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-primary bg-gradient-to-r from-purple-500 to-blue-500 border-2 text-white font-bold text-sm sm:text-base md:text-lg py-2 px-4 rounded-full shadow-lg"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
