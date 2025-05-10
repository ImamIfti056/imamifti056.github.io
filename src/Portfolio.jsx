import { useState } from "react";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Extracurricular from "./components/Extracurricular";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Navbar, {MobileNavbar} from "./components/Navbar";

const themes = {
  black: "bg-gradient-to-b from-gray-900 to-gray-800 text-white",
  white: "bg-gray-100 text-black", // softer than pure white
  teal: "bg-gradient-to-br from-teal-900 to-cyan-800 text-white", // elegant blue-green tone
};

export default function Portfolio() {
  
  const [theme, setTheme] = useState("black");

  return (
    // <div className={`min-h-screen flex ${themes[theme]} transition-all duration-300`}>
    <div className={`min-h-screen flex ${themes[theme]}`}>
      {/* Sidebar for Desktop */}
      <Navbar/>

      {/* Main Content */}
      <div className="flex-1 space-y-20">
        <Intro />
        <Education />
        <Projects />
        <Experience />
        {/* <Achievements /> */}
        <Extracurricular />
        <Contact />
      </div>

      {/* Bottom Navbar for Mobile */}
      <MobileNavbar/>
    </div>
  );
}
