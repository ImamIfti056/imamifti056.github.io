import React from "react";
import Navbar, {MobileNavbar} from "./components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import ColorPicker from "./components/ColorPicker";
import { AnimatePresence, motion } from "framer-motion";
import ScrollToNavigate from "./components/ScrollToNavigate";
import ParticlesBackground from "./components/ParticlesBackground";


function App() { 
  const location = useLocation();  

  return (   
    <div className={`relative w-full h-screen overflow-hidden text-white`}>
      {/* Background: Dark Base */}
      <div className="absolute inset-0 bg-black clip-angled z-10" >
        <ParticlesBackground/>
      </div>

      {/* Background: Accent Overlay (top right corner) */}
      <div className={`absolute inset-0 bg-[var(--primary-bg)] clip-accent z-20`} />

      {/* Bottom-left triangle */}
      <div className={`absolute bottom-0 left-0 w-32 h-32 bg-[var(--primary-bg)] clip-triangle z-30`} />

      {/* Your content goes here */}
      <div className="relative z-30 md:py-12 md:px-24 px-4">
        <div className={` flex`} style={{ height: 'calc(100vh - 70px)' }}
        >
            {/* Sidebar for Desktop */}
            <Navbar/>

            {/* Bottom Navbar for Mobile */}
            <MobileNavbar/>

            {/* Color picker */}
            <ColorPicker/>

            {/* Main Content */}
            <div className="flex-1">
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
