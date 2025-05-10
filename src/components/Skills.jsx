import { motion, useInView } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { useRef } from "react";

const skills = [
  "JavaScript", "React.js", "Tailwind CSS", "Framer Motion",
  "Django", "DRF", "PostgreSQL", "Git & GitHub", "Firebase",
  "CI/CD"
];

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
    <section
      id="skills"
      className="min-h-screen px-4 py-20 flex flex-col items-start justify-center max-w-5xl mx-auto"
    >
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-12"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
        custom={0}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h1>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        >
        {skills.map((skill, i) => (
            <div
            key={skill}
            className="group relative flex items-center gap-2 px-4 py-3 rounded-md shadow-md dark:bg-muted transition-all duration-300 border-l-2 border-[var(--primary-bg)]"
            >
            <BadgeCheck className="w-5 h-5 text-[var(--primary-bg)]" />
            <span className="text-lg font-medium relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--primary-bg)] after:transition-all after:duration-300 group-hover:after:w-full">
                {skill}
            </span>
            </div>
        ))}
        </motion.div>


    </section>
  );
}
