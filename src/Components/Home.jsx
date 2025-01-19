import React from "react";
import { Link } from "react-scroll";
import img from "../assets/image4.jpg";
const home = () => {
  return (
    <div className="relative min-h-screen">
      <img
        src={img}
        alt="Background"
        className="object-cover w-full h-full absolute"
      />
      <div className="relative z-10 text-white flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-6xl font-extrabold text-center">Meta WebYalet</h1>
        <p className="max-w-[500px] text-center font-semibold pt-6">
        We create custom websites and stunning designs that elevate your brand and ensure a seamless user experience
        </p>
      </div>
      <Link
        to="about"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-primary bg-black border-primary border-2 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl"
      >
        Learn More
      </Link>
    </div>
  );
};

export default home;
