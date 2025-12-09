import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareWhatsapp, FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div
      id="home"
      className="home w-full h-screen text-white flex items-center justify-center gap-[10%] relative"
    >
      {/* Left */}
      <div className="leftContent flex flex-col items-center justify-evenly h-full relative">
        <div className="leftContentTop">
          <p className="text-3xl text-[#836CD6]">Hello, I'm</p>
          <h1 className="text-6xl font-bold text-white">Anid</h1>
          <h1 className="text-6xl font-bold text-white">Wrooks</h1>
        </div>

        <div className="leftContentBottom flex flex-col items-start justify-start gap-5 text-2xl absolute bottom-10 left-0">
          <FaLinkedin className="hover:scale-125 transition-all duration-300 hover:text-[#836CD6]" />
          <FaGithub className="hover:scale-125 transition-all duration-300 hover:text-[#836CD6]" />
          <FaSquareWhatsapp className="hover:scale-125 transition-all duration-300 hover:text-[#836CD6]" />
          <FaSquareInstagram className="hover:scale-125 transition-all duration-300 hover:text-[#836CD6]" />
        </div>
      </div>

      {/* Center (shadow + image) */}
      <div className="relative flex items-center justify-center">
        <div className="centerShadow w-96 h-96 rounded-full bg-[#836CD6] absolute blur-3xl opacity-70 mt-50" />
        <div className="centerContent flex relative">
          <img
            className=" h-[80vh] object-cover rounded-full mt-40 z-10"
            src="/images/student.png"
            alt="profile"
          />
        </div>
      </div>

      {/* Right */}
      <div className="rightContent relative h-full flex flex-col items-center justify-center">
        <div className="rightContentTop">
          <p className="text-3xl text-[#836CD6]">Creative</p>
          <h1 className="text-6xl font-bold bg-linear-to-b from-purple-600 to-zinc-700 bg-clip-text text-transparent inline-block">
            Developer
          </h1>
          <h1 className="text-6xl font-bold text-white -mt-5">& Designer</h1>
        </div>

        <div className="rightContentBottom hover:text-[#836CD6] transition-all duration-200 absolute bottom-10 right-0 flex items-center justify-center gap-3">
          <Link className="uppercase hover:underline">Resume</Link>
          <FaExternalLinkAlt className="text-sm" />
        </div>
      </div>
    </div>
  );
};

export default Home;
