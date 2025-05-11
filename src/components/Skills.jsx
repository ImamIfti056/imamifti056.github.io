import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiDjango,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";
import { FaInfinity } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { RiCheckboxCircleLine } from "react-icons/ri";

const skillGroups = {
  "Frontend": [
    { name: "JavaScript", icon: SiJavascript },
    { name: "React.js", icon: SiReact },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Framer Motion", icon: SiFramer },
  ],
  "Backend": [
    { name: "Django", icon: SiDjango },
    { name: "DRF", icon: SiDjango },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Firebase", icon: SiFirebase },
  ],
  "Tools & DevOps": [
    { name: "Git & GitHub", icon: FaGitAlt },
    { name: "CI/CD", icon: FaInfinity },
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Skills() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <>
    <section
      id="skills"
      className="min-h-screen px-4 flex flex-col items-start justify-center max-w-5xl mx-auto"
    >
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold md:mb-6 mb-4"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h1>

      <motion.p
        className="text-base md:text-lg text-gray-400 mb-8"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeUp}
        custom={1}
      >
        A snapshot of my core technical skills, frameworks, and tools I've worked with throughout my development journey.
      </motion.p>

      <div className="w-full space-y-10">
        {Object.entries(skillGroups).map(([category, skills], index) => (
          <motion.div
            key={category}
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={index + 2}
          >
            <h2 className="text-xl font-semibold mb-4 text-[var(--primary-bg)]">{category}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm md:text-base">
              {skills.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="group relative flex items-center gap-2 md:px-4 md:py-3 p-2 py-4 rounded-md shadow-md dark:bg-muted transition-all duration-400 border-l-2 border-[var(--primary-bg)] hover:scale-110"
                >
                  {Icon ? <Icon className="w-5 h-5 text-[var(--primary-bg)]" /> : <RiCheckboxCircleLine className="w-5 h-5 text-[var(--primary-bg)]" />}
                  <span className="font-medium">{name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    </>
  );
}
