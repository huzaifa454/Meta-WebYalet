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

      {projects.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={projectlinks[index].url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative border-2 border-primary rounded-lg overflow-hidden p-2 bg-black hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {projectlinks[index].isLive && (
                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-md">
                  Live
                </div>
              )}
              <img
                src={project}
                alt={`Screenshot of project ${index + 1}`}
                className="w-full h-48 object-cover rounded-md transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            </motion.a>
          ))}
        </div>
      ) : (
        <p className="text-center text-white mt-8">
          No projects to display yet.
        </p>
      )}
    </div>
  );
};

export default Projects;
