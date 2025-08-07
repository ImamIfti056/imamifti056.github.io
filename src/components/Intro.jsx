import React, { useEffect, useState } from 'react'
import { Github, Linkedin, Facebook, Download } from 'lucide-react'
import { FaDev } from "react-icons/fa";
import { motion, useInView  } from 'framer-motion'
import { useRef } from "react";
import cv from "../assets/IMAMUL_ISLAM_IFTI_CV.pdf"
import profileImg from "../assets/profile5.jpg"


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
}

const Intro = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const [isScrolled, setIsScrolled] = useState(false);

  // Check if the page is scrolled
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Listen to scroll events
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <section
      id="intro"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4"
    >
      <motion.div
        className='md:mr-24 mb-12 md:mb-0'
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
        transition={{ duration: 0.6 }}
      >
        <img
  src={profileImg}
  alt="Profile"
  className="w-40 h-40 md:w-52 md:h-52 2xl:w-64 2xl:h-64 rounded-full shadow-lg mx-auto transition duration-300 
             brightness-75 contrast-110"
/>

      </motion.div>
      
      <div>
        <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-6 text-center"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        viewport={{ once: true }}
        variants={fadeUp}
        custom={1}
        transition={{ duration: 0.6 }}
      >
        Hi, I’m <span className='text-[var(--primary-bg)]'>Ifti</span>
      </motion.h1>

      <motion.h2
        className="text-xl md:text-3xl font-semibold mb-4 text-center"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        viewport={{ once: true }}
        variants={fadeUp}
        custom={2}
        transition={{ duration: 0.6 }}
      >
        Junior Software Engineer | Tech Enthusiast
      </motion.h2>
      <motion.h3
        className="text-lg md:text-xl font-medium italic text-center mb-4 text-[var(--primary-bg)]"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        viewport={{ once: true }}
        variants={fadeUp}
        custom={2.5}
        transition={{ duration: 0.6 }}
      >
        "Crafting Digital. Solving Problems. Delivering Value."
      </motion.h3>

      <motion.p
        className="text-center max-w-xl mb-6 2xl:text-xl 2xl:mt-6"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        viewport={{ once: true }}
        variants={fadeUp}
        custom={3}
        transition={{ duration: 0.6 }}
      >
        Passionate about building scalable web applications and exploring innovative solutions. Welcome to my digital space — let’s create something meaningful.
      </motion.p>
      
      {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center sm:items-center 2xl:mt-8 justify-center"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          variants={fadeUp}
          custom={4}
          transition={{ duration: 0.6 }}
        >
          <a
            href={cv}
            download
            className="flex items-center gap-2 px-4 py-2 bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-md font-semibold hover:bg-opacity-90 transition duration-300"
          >
            <Download size={18} />
            CV
          </a>

          {/* Social icons */}
          <div className="flex gap-4">
            <a
              href="https://github.com/ImamIfti056"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--primary-bg)] text-[var(--primary-text)] hover:scale-110 transition-all duration-300 shadow"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/iiifti"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--primary-bg)] text-[var(--primary-text)] hover:scale-110 transition-all duration-300 shadow"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61553650420449"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--primary-bg)] text-[var(--primary-text)] hover:scale-110 transition-all duration-300 shadow"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://dev.to/ImamIfti056"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--primary-bg)] text-[var(--primary-text)] hover:scale-110 transition-all duration-300 shadow"
            >
              <FaDev size={18}/>
            </a>
          </div>
        </motion.div>
      </div>      
    </section>
    </>
  )
}

export default Intro
