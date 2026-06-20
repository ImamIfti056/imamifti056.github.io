import {
    User ,
    BookOpen,
    Briefcase,
    Mail,
    Code2,
    Home,
    FolderKanban,
    FileText,
    Github,
    Sun,
    Trophy
} from "lucide-react";
import { NavLink } from 'react-router-dom';

const sections = [
    { id: "", label: "Home", icon: <Home  /> },
    { id: "about", label: "About", icon: <User  /> },
    { id: "skills", label: "Skills", icon: <Code2  /> },
    { id: "education", label: "Education", icon: <BookOpen /> },
    { id: "projects", label: "Projects", icon: <FolderKanban /> },
    { id: "blogs", label: "Blogs", icon: <FileText /> },
    { id: "experience", label: "Experience", icon: <Briefcase /> },
    // { id: "achievements", label: "Achievements", icon: <Trophy /> },
    { id: "extracurricular", label: "Extracurricular", icon: <Trophy /> },
    { id: "contact", label: "Contact", icon: <Mail /> },
];

const handleSectionClick = (path) => {
  window.dispatchEvent(new CustomEvent("portfolio:navigate-section", { detail: { path } }));
};

const Navbar = () => {

  return (
    <nav className="nav-shell" aria-label="Primary navigation">
      <div className="nav-brand">
        <div className="nav-mark">I</div>
        <div>
          <p className="nav-title">Ifti</p>
        </div>
      </div>

      <div className="nav-list">
        {sections.map(({ id, label, icon }) => (
          <NavLink
            key={id}
            to={`/${id}`}
            onClick={() => handleSectionClick(`/${id}`)}
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            {icon}
            <span>{label}</span>
          </NavLink>
        ))}
      </div>

      <div className="nav-list">
        <div className="nav-link">
          <Sun />
          <span>Light</span>
        </div>
        <a className="nav-link" href="https://github.com/ImamIfti056" target="_blank" rel="noreferrer">
          <Github />
          <span>View on GitHub</span>
        </a>
      </div>
    </nav>

  )
}

export const MobileNavbar = () => {
    return (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <div className="mobile-nav-scroll scrollbar-hide">
            {sections.map(({ id, icon, label }) => (
              <NavLink
                key={id}
                to={`/${id}`}
                onClick={() => handleSectionClick(`/${id}`)}
                className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`}
              >
                <span className="flex items-center justify-center">{icon}</span>
                <span>{label.split(' ')[0]}</span>
              </NavLink>
            ))}
          </div>
        </nav>
    );
}

export default Navbar
