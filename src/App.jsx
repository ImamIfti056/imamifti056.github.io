import React, { useState } from "react";
import Navbar, {MobileNavbar} from "./components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import ColorPicker from "./components/ColorPicker";
import { AnimatePresence, motion } from "framer-motion";
import ScrollToNavigate from "./components/ScrollToNavigate";
import ParticlesBackground from "./components/ParticlesBackground";


function App() { 
  const location = useLocation();  
  const [showParticles, setShowParticles] = useState(true);
  
  return (   
    <div className={`relative w-full h-screen overflow-hidden text-white`}>
      {/* Background: Dark Base */}
      <div className="absolute inset-0 bg-black clip-angled z-10" >
        <ParticlesBackground showParticles={showParticles}/>
      </div>

      {/* Your content goes here */}
      <div className="relative z-30 md:py-12 md:pl-20 lg:pl-28 md:pr-12 lg:pr-20 px-4">
        <div className="flex" style={{ height: 'calc(100vh - 70px)' }}>
            {/* Sidebar for Desktop */}
            <Navbar/>

            {/* Bottom Navbar for Mobile */}
            <MobileNavbar/>

            {/* Color picker */}
            <ColorPicker showParticles={showParticles} setShowParticles={setShowParticles}/>

            {/* Main Content */}
            <div className="flex-1  pb-20 md:pb-0 scroll-smooth">
              <ScrollToNavigate />
              <AnimatePresence mode="wait">
                <Outlet key={location.pathname} />
              </AnimatePresence>
            </div>

          </div>
      </div>
    </div>
  )
}

export default App
