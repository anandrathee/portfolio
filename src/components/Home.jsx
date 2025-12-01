import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";


const Home = () => {
  return (
    <div className="homePage w-full text-white flex items-center justify-center gap-[10%]">
      <div className="leftContent flex flex-col items-center justify-evenly h-full relative">
        <div className="leftContentTop">
          <p className="text-3xl text-[#836CD6]">Hello, I'm</p>
          <h1 className="text-6xl font-bold text-white">Anid</h1>
          <h1 className="text-6xl font-bold text-white">Wrooks</h1>
        </div>
        <div className="leftContentBottom flex items-center justify-center gap-5 text-4xl absolute bottom-10">
          <FaLinkedin className="hover:scale-125 transition-all duration-300 hover:text-[#836CD6]" />
          <FaGithub className="hover:scale-125 transition-all duration-300 hover:text-[#836CD6]" />
          <FaSquareWhatsapp className="hover:scale-125 transition-all duration-300 hover:text-[#836CD6]" />
          <FaSquareInstagram className="hover:scale-125 transition-all duration-300 hover:text-[#836CD6]" />
        </div>
      </div>
      <div className="centerShadow w-90 h-90 rounded-full bg-[#836CD6] absolute top-[60%] left-[48%] -translate-x-[50%] -translate-y-[50%] blur-3xl opacity-70"></div>
      {/* <div className="centerContent w-[20rem] h-80  bg-purple-600 rounded-full"> */}
      <img
        className=" h-[90%] rounded-full z-50"
        src="\images\student.png"
        alt=""
      />
      {/* </div> */}
      <div className="rightContent relative h-full flex flex-col items-center justify-center">
        <div className="rightContentTop">
        <p className="text-3xl  text-[#836CD6] ">Creative</p>
        <h1 className="text-6xl font-bold bg-linear-to-b from-purple-600 to-zinc-700 bg-clip-text text-transparent inline-block">
          Developer
        </h1>{" "}
        <h1 className="text-6xl font-bold text-white -mt-5">& Designer</h1>
        </div>
        <div className="rightContentBottom text-xl hover:text-[#836CD6] transition-all duration-200 absolute bottom-10 left-0 flex items-center justify-center gap-2 ">
          <FaExternalLinkAlt />

          <Link className=" uppercase hover:underline">Resume</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
