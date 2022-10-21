import React from "react";
import Image from "next/image";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import SkillBar from "react-skillbars";
import { GoLocation } from 'react-icons/go'



const FRONT_END = [
  {
    type: "HTML",
    level: 95,
  },
  {
    type: "CSS",
    level: 70,
  },
  {
    type: "JavaScript",
    level: 52,
  },
  {
    type: "React",
    level: 65,
  },
  {
    type: "React Native",
    level: 30,
  },
  {
    type: "Bootstrap",
    level: 80,
  },
  {
    type: "Material UI",
    level: 63,
  },
  {
    type: "Tailwind CSS",
    level: 90,
  },
  {
    type: "Redux",
    level: 74,
  },
  {
    type: "Netlify/Vercel",
    level: 92,
  },
];



const Sidebar = () => {
  return (
    <div className="sidebar p-3 flex flex-col justify-center h-full">
      <div className="profile flex flex-col  items-center justify-center gap-4">
        <Image
          src="/images/profile.png"
          alt="profile-cwp"
          height={250}
          width={250}
        />
        <h2 className="text-4xl lobster-font capitalize text-zinc-700">
          Prince <span className="text-orange-500">Ahmed</span>
        </h2>
        <span className="text-md tracking-wider font-semibold text-zinc-700">
          Full Stack Web Developer
        </span>
      </div>
      <div className="icons  flex justify-center gap-6 py-5">
        <BsFacebook className="w-8 h-8 text-zinc-700" />
        <BsGithub className="w-8 h-8 text-zinc-700" />
        <BsLinkedin className="w-8 h-8 text-zinc-700" />
      </div>
      <div className="address-section  flex flex-col gap-2 bg-zinc-100 py-3 mt-3 text-center" style={{marginLeft:'-1.5rem', marginRight:'-1.5rem'}}>
               <span className="text-center flex gap-2 items-center font-semibold text-lg text-zinc-600 justify-center"> <GoLocation className="text-orange-500" size={20} /> Dhaka, Bangladesh</span>
               <p className="font-semibold text-lg text-zinc-600 ">codingwithprince@gmail.com</p>
               <p className="font-semibold text-lg text-zinc-600 ">01798162209</p>
      </div>
      <div className="resume-button mt-10 ">
        <button className="mx-auto w-full hover:bg-orange-600 ease-in-out duration-300 bg-orange-500 rounded-full py-3 font-bold text-white">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
