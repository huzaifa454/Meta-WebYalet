import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaPalette, FaCode, FaServer, FaBrush } from "react-icons/fa";

const Service = () => {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "UI/UX design for your web applications, ensuring an intuitive user experience and stunning visuals.",
      icon: <FaPalette className="text-4xl text-purple-500 mb-4" />,
    },
    {
      title: "Frontend Development",
      description:
        "React-based frontend development services, crafting responsive and interactive user interfaces for your projects.",
      icon: <FaCode className="text-4xl text-purple-500 mb-4" />,
    },
    {
      title: "Backend Development",
      description:
        "Express-based backend development to power your applications with robust and scalable server-side functionality.",
      icon: <FaServer className="text-4xl text-purple-500 mb-4" />,
    },
    {
      title: "Graphic Design",
      description:
        "Creative graphic design services to bring your brand to life with visually stunning and professional designs.",
      icon: <FaBrush className="text-4xl text-purple-500 mb-4" />,
    },
  ];

  return (
    <div
    className="relative min-h-screen flex flex-col items-center justify-center text-center space-y-8 cursor-default py-12"
  >
    {/* Animated Heading */}
    <motion.h1
      className="font-serif bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent text-6xl md:text-8xl font-extrabold mb-8 relative"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      <span className="text-white">Our </span> Services
    </motion.h1>
  
    {/* Services Section */}
    <motion.div
      className="flex flex-col sm:flex-row sm:space-x-8 sm:mt-8 space-y-8 sm:space-y-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="flex flex-col w-[300px] h-[250px] rounded-xl p-6 text-center hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-700 bg-gray-900 bg-opacity-90 hover:scale-105 items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.4,
            delay: index * 0.3,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          {service.icon}
          <h2 className="text-white text-primary text-2xl mb-2 font-bold">
            {service.title.split(" ")[0]}
            <h3 className="text-white text-lg mt-1">
              {service.title.split(" ")[1]}
            </h3>
          </h2>
          <p className="text-gray-300 text-center">{service.description}</p>
        </motion.div>
      ))}
    </motion.div>
  
    {/* Call-to-Action Section */}
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mt-6"
    >
      <div className="flex flex-wrap gap-4">
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-sm sm:text-base md:text-lg py-2 px-4 rounded-full shadow-lg relative overflow-hidden group"
        >
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition duration-300"
          />
          <span className="relative">Learn More</span>
        </Link>
      </div>
    </motion.div>
  </div>
  
  );
};

export default Service;
