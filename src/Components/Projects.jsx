import car from "../assets/project4.png";
import pro2 from "../assets/project2.png";
import pro3 from "../assets/project3.png";
import pro4 from "../assets/pro4.png";
import pro5 from "../assets/pro5.png";
import { motion } from "framer-motion";

const Projects = () => {
  const projectlinks = [
    { url: "https://github.com/yourusername/project2", isLive: false },
    { url: "https://github.com/yourusername/project3", isLive: false },
    { url: "https://lamp-app-ten.vercel.app/", isLive: false },
    { url: "https://github.com/yourusername/project5", isLive: false },
    { url: "https://ductscareflorida.com", isLive: true },
  ];
  const projects = [car, pro2, pro3, pro4, pro5];

  return (
    <div className="flex flex-col min-h-screen text-white font-primary pt-12">
      <div className="text-center mb-16">
        <motion.h1
          className="font-serif bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent text-6xl md:text-8xl font-extrabold relative"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          Our<span className="text-white"> Projects</span>
        </motion.h1>
      </div>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={projectlinks[index].url}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary rounded-lg overflow-hidden p-4 bg-black hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            title={
              projectlinks[index].isLive
                ? "View Live Project"
                : "View on GitHub"
            }
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img
              src={project}
              alt={`Project ${index + 1}`}
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 hover:scale-110"
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-primary">
                {projectlinks[index].name}
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                {projectlinks[index].description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
