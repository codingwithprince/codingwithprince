import React from "react";
import Image from "next/image";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import SkillBar from "react-skillbars";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SKILLS = [
  {
    name: "HTML",
    level: 92,
  },
  {
    name: "CSS",
    level: 85,
  },
  {
    name: "React",
    level: 70,
  },
];

const CL = {
  bar: "#f97316",
  title: {
    text: "#999",
    background: "transparent",
  },
};

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

const BACK_END = [
  {
      type: "Node JS",
      level: 60
  },
  {
      type: "Express JS",
      level: 78
  },
  {
      type: "MongoDB",
      level: 80
  },
  {
      type: "Heroku",
      level: 90
  }
]

const Sidebar = () => {
  return (
    <div className="sidebar p-3">
      <div className="profile flex flex-col items-center justify-center gap-4">
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
      <div className="icons flex justify-center gap-6 py-5">
        <BsFacebook className="w-8 h-8 text-zinc-700" />
        <BsGithub className="w-8 h-8 text-zinc-700" />
        <BsLinkedin className="w-8 h-8 text-zinc-700" />
      </div>
      <div className="resume-button">
        <button className="mx-auto w-full hover:bg-gray-200 ease-in-out duration-300 bg-gray-300 rounded-full py-3 font-bold text-zinc-600">
          Download CV
        </button>
      </div>
      <div className="skills-section pt-5">
        <h3 className="text-center text-orange-500 text-2xl font-bold pb-5">Skills</h3>
        <div className="skills-lists px-2 w-full ">
          {/* <SkillBar
              colors={CL}
              skills={FRONT_END}
              height={"1vh"}
              animationDelay={50}
            /> */}
          <Swiper
            pagination={{
              type: "progressbar",
            }}
            loop={true}
            navigation={false}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="sl">
              <p className="text-zinc-700 font-semibold text-center py-5">Front-end</p>
              <SkillBar
                colors={CL}
                skills={FRONT_END}
                height={"1vh"}
                animationDelay={50}
              /> 
            </SwiperSlide>
            <SwiperSlide className="sl">
              <p className="text-zinc-700 font-semibold text-center py-5">Back-end</p>
              <SkillBar
                colors={CL}
                skills={BACK_END}
                height={"1vh"}
                animationDelay={50}
              /> 
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
