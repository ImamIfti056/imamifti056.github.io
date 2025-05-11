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
} from "lucide-react";
import { Link, NavLink } from 'react-router-dom';

const sections = [
    { id: "", label: "Ifti", icon: <Home  /> },
    { id: "about", label: "About Me", icon: <User  /> },
    { id: "skills", label: "Skills", icon: <Wand2  /> },
    { id: "education", label: "Education", icon: <BookOpen /> },
    { id: "projects", label: "Projects", icon: <Award /> },
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
        <nav className="md:hidden fixed bottom-0 left-0 w-full bg-[var(--primary-bg)] text-[var(--primary-text)] bg-opacity-90 shadow-lg flex justify-around py-4">
        {sections.map(({ id, icon }) => (
          <Link
            key={id}
            to={`/${id}`}
            className="flex items-center justify-center w-full py-2 rounded"
          >
            {icon}
          </Link>
        ))}
      </nav>
    )
}

export default Navbar