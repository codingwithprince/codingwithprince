import Link from "next/link";
import React, { useState } from "react";

const nav = [
  {
    title: "about",
    link: "/"
  },
  {
    title: "projects",
    link: "/projects"
  },
  {
    title: "resume",
    link: "/"
  }
];
const Navbar = ({activeNavItem, setActiveNavItem}) => {
  // const [activeNavItem, setActiveNavItem] = useState('about')
  return (
    <nav className="flex justify-between items-center">
      <p className="uppercase text-2xl font-bold text-zinc-600 border-b-4 border-orange-500">{activeNavItem}</p>
      <ul className="flex gap-4">
        {nav.map((ni) => (
          <li onClick={()=> setActiveNavItem(ni.title)} key={ni.title} className={`${activeNavItem == ni.title ? "hidden" : "block"} uppercase text-sm md:text-lg font-bold text-zinc-500`}>
              <a className="hover:text-zinc-700 ease-in-out duration-300">{ni.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
