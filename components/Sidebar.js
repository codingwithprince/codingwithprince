import React from 'react'
import Image from 'next/image'
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs"

const Sidebar = () => {
  return (
    <div className='sidebar p-3'>
        <div className="profile flex flex-col items-center justify-center gap-4">
            <Image src='/images/profile.png' alt='profile-cwp' height={250} width={250} />
            <h2 className='text-4xl lobster-font capitalize text-zinc-700'>Prince <span className='text-orange-500'>Ahmed</span></h2>
            <span className='text-md tracking-wider font-semibold text-zinc-700'>Full Stack Web Developer</span>
        </div>
        <div className="icons flex justify-center gap-6 py-5">
          <BsFacebook className='w-8 h-8 text-zinc-700' />
          <BsGithub className='w-8 h-8 text-zinc-700' />
          <BsLinkedin className='w-8 h-8 text-zinc-700' />
        </div>
        <div className="resume-button">
          <button className='mx-auto w-full hover:bg-gray-200 ease-in-out duration-300 bg-gray-300 rounded-full py-3 font-bold text-zinc-600'>Download CV</button>
        </div>
        <div className="skills-section py-5">
          <h3 className='text-center text-orange-500 font-bold'>Skills</h3>
        </div>
    </div>
  )
}

export default Sidebar