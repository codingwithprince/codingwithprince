import Link from "next/link";
import React, { useState } from "react";

const nav = ["/", "projects", "contact"];
const Navbar = () => {
    const [activeNavItem, setActiveNavItem] = useState('about')
  return (
    <nav className="flex justify-between items-center">
      <p className="uppercase text-lg font-bold text-orange-500">{activeNavItem}</p>
      <ul className="flex gap-4">
        {nav.map((ni, i) => (
          <li onClick={()=> setActiveNavItem(ni)} key={i} className="uppercase text-sm md:text-lg font-semibold text-zinc-700">
            <Link href={`/${ni}`}>
                <a className="hover:text-orange-400 ease-in-out duration-300">{ni}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
