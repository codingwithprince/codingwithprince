import React from "react";
import ServiceCard from "./ServiceCard";
import { AiOutlineDesktop, AiOutlineCloudServer, AiOutlineApi, AiOutlineAntDesign } from 'react-icons/ai'



const serviceInfo = [
  {
    title: 'Frontend Development',
    details: 'I can build a beautiful and scalable SPA using React, Next JS and Tailwind CSS',
    icon: <AiOutlineDesktop size={50} />
  },
  {
    title: 'Backend Development',
    details: 'handle database, server, api using Express & other popular frameworks',
    icon: <AiOutlineCloudServer size={50} />
  },
  {
    title: 'API Development',
    details: 'I can develop robust REST API using django-rest-api & Node API',
    icon: <AiOutlineApi size={50} />
  },
  {
    title: 'UI/UX designer',
    details: 'stunning user interface designer using Figma and Framer',
    icon: <AiOutlineAntDesign size={50} />
  }
]

const About = () => {
  return (
    <section className="about mt-10">
      <p className="text-lg font-semibold text-zinc-600">
        I&apos;m a Full Stack Web Developer with 3 years of experience. Mostly
        specialize in <span className="font-bold">Next</span>,{" "}
        <span className="font-bold">React</span>,{" "}
        <span className="font-bold">Express JS</span>,{" "}
        <span className="font-bold">MongoDB</span> as well as{" "}
        <span className="font-bold">React Native</span> and{" "}
        <span className="font-bold">Tailwind CSS</span>. I use my skills with
        pure dedication and deliver work on time. If you are looking for a MERN
        developer then feel free to share your projects with me.
      </p>
      <div style={{
        marginLeft:"-2rem",
        marginRight:"-2rem"
      }} className="service-section lg:mt-20 mt-10 bg-zinc-200 py-5 lg:py-10 px-10">
        <h2 className="font-bold text-xl text-zinc-600 uppercase text-center">Services</h2>
        <div className="services-cards grid lg:grid-cols-2 grid-cols-1 gap-6 py-10">
          {
            serviceInfo.map((sItem, index)=> (
                <ServiceCard key={index} data={sItem} />
            ))
          }
          
        </div>
      </div>
    </section>
  );
};

export default About;
