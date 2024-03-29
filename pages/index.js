import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Resume from "../components/Resume";

export default function Home() {
  const router = useRouter()
  const [activeNavItem, setActiveNavItem] = useState('about')
  return (
    <div>
      <Head>
        <title>CWP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-5">
        <Navbar activeNavItem={activeNavItem} setActiveNavItem={setActiveNavItem}  />
        <div className="h-[80vh]">
        {
          activeNavItem == "about" && <About />  || activeNavItem == "projects" && <Projects /> || activeNavItem == "resume" && <Resume /> 
        }
        </div>
      </main>
    </div>
  );
}
