import React from "react";
import HeroImage from "../assets/heroImage.png.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800" 
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a passionate tech Enthusiast!
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          Welcome to my portfolio! I am a dedicated and versatile programmer with a strong passion for coding.
          I have an insatiable curiosity and genuine love for exploring the ever-evolving world of tech. 
          From AI to blockchain, I am constantly fascinated by how technology shapes our lives and drives innovations.
          This website you are currently visiting serves as a heartfelt ode to my unwavering devotion to all things tech
          </p>

         
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>

  );
};

export default Home;