import React, { useState } from 'react'
import {
    User ,
    BookOpen,
    Briefcase,
    Award,
    Trophy,
    Users,
    Mail,
    Wand2,
    Home,
    FolderKanban,
    FileText
} from "lucide-react";
import { Link, NavLink, useLocation } from 'react-router-dom';

const sections = [
    { id: "", label: "Ifti", icon: <Home  /> },
    { id: "about", label: "About Me", icon: <User  /> },
    { id: "skills", label: "Skills", icon: <Wand2  /> },
    { id: "education", label: "Education", icon: <BookOpen /> },
    { id: "projects", label: "Projects", icon: <FolderKanban /> },
    { id: "blogs", label: "Blogs", icon: <FileText /> },
    { id: "experience", label: "Experience", icon: <Briefcase /> },
    // { id: "achievements", label: "Achievements", icon: <Trophy /> },
    { id: "extracurricular", label: "Extracurricular", icon: <Users /> },
    { id: "contact", label: "Contact", icon: <Mail /> },
];

const Navbar = () => {

  return (
    <nav className="fixed top-0 left-0 h-full py-6 pl-6 z-50 md:flex hidden flex-col items-center justify-center">
      {/* Nav Items */}
      <div className="flex flex-col gap-4">
      {sections.map(({ id, label, icon }) => (
        <NavLink
          key={id}
          to={`/${id}`}
          className={({ isActive }) =>
            `group flex items-center overflow-hidden w-12 hover:w-40 transition-all duration-300 rounded-full p-3 gap-3 hover:bg-[var(--primary-bg)] text-white
             ${isActive ? 'bg-[var(--primary-bg)] text-white' : 'text-[var(--primary-text)]'}`
          }
        >
          <div className="transform transition-transform duration-300 group-hover:-rotate-67 group-active:rotate-67">
            {icon}
          </div>
          <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 hidden group-hover:block transition-opacity duration-300">
            {label}
          </span>
        </NavLink>
      ))}
    </div>
    </nav>

  )
}

export const MobileNavbar = () => {
    return (
        <nav className="md:hidden fixed bottom-0 left-0 w-full bg-black/90 backdrop-blur-sm border-t border-[var(--primary-bg)]/30 shadow-lg z-50">
          <div className="flex overflow-x-auto scrollbar-hide">
            {sections.map(({ id, icon, label }) => (
              <NavLink
                key={id}
                to={`/${id}`}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center min-w-[4rem] flex-1 py-2 px-1 text-xs gap-1 transition-colors ${
                    isActive
                      ? 'text-[var(--primary-bg)]'
                      : 'text-gray-400 hover:text-[var(--primary-bg)]'
                  }`
                }
              >
                <span className="w-5 h-5 flex items-center justify-center">{icon}</span>
                <span className="truncate w-full text-center text-[10px] leading-tight">{label.split(' ')[0]}</span>
              </NavLink>
            ))}
          </div>
        </nav>
    );
}

export default Navbar