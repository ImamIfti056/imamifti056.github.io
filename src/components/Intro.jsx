import { Download, Github, Mail } from "lucide-react";
import { FaDev } from "react-icons/fa";
import { Linkedin } from "lucide-react";
import cv from "../assets/IMAMUL_ISLAM_IFTI_CV.pdf";
import profileImg from "../assets/profile6.jpeg";

export default function Intro() {
  return (
    <section id="intro" className="page-section">
      <div className="home-hero">
        <div>
          <h1 className="home-title">
            {/* <span>Imamul</span> */}
            <span>Imamul Islam Ifti</span>
          </h1>
          <h2 className="home-role">Software Engineer</h2>
          <p className="home-copy">
            I build scalable, maintainable, and user-focused web applications with clean architecture and thoughtful engineering.
          </p>

          <div className="home-actions">
            <a href={cv} download className="primary-button">
              <Download size={18} />
              Download CV
            </a>
            <a href="#/contact" className="secondary-button">
              <Mail size={18} />
              Contact Me
            </a>
          </div>

          <div className="social-row">
            <a href="https://github.com/ImamIfti056" target="_blank" rel="noreferrer" className="social-link">
              <Github size={22} />
              GitHub
            </a>
            <span className="social-divider" />
            <a href="https://linkedin.com/in/iiifti" target="_blank" rel="noreferrer" className="social-link">
              <Linkedin size={22} />
              LinkedIn
            </a>
            <span className="social-divider" />
            <a href="https://dev.to/ImamIfti056" target="_blank" rel="noreferrer" className="social-link">
              <FaDev size={20} />
              Dev
            </a>
          </div>
        </div>

        <div className="portrait-panel">
          <img src={profileImg} alt="Imamul Islam Ifti" />
        </div>
      </div>
    </section>
  );
}
