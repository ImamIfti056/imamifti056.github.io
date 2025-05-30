import { GraduationCap, School, Calendar, Medal } from "lucide-react";
import { motion, useInView  } from "framer-motion";
import { useRef } from "react";


const educationData = [
  {
    title: "B.Sc. in Electronics and Communication Engineering",
    institution: "Khulna University of Engineering & Technology (KUET)",
    year: "2025",
    icon: <GraduationCap className="h-6 w-6 2xl:h-8 2xl:w-8" />,
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    institution: "Brahmanbaria Government College, Brahmanbaria",
    year: "2019",
    icon: <School className="h-6 w-6 2xl:h-8 2xl:w-8" />,
  },
  {
    title: "Secondary School Certificate (SSC)",
    institution: "Annada Govt. High School, Brahmanbaria",
    year: "2017",
    icon: <School className="h-6 w-6 2xl:h-8 2xl:w-8" />,
    hiddenOnMobile: true, // custom flag
  }

];

const achievementsData = [
  {
    title: "Regional Math Olympiad",
    year: "2015",
    position: "1st Runner-up",
  },
];


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};


export default function Education() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <>
      <section
      id="education"
      className="min-h-screen px-4 flex flex-col items-start justify-center max-w-5xl mx-auto"
    >
      <motion.h1
      className="text-3xl md:text-5xl font-extrabold self-start md:mb-12 mb-8"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      viewport={{ once: true }}
      variants={fadeUp}
      custom={0}
      transition={{ duration: 0.6 }}
    >
      Education
      </motion.h1>  

      <motion.div
        className="grid gap-4 md:gap-8 max-w-5xl w-full md:grid-cols-3"
        custom={1}
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {educationData.map((edu, i) => (
          <div
            key={edu.title}
            className={`md:rounded-2xl rounded-xl shadow-lg border-l-4 border-[var(--primary-bg)] p-2 md:p-6 text-center hover:shadow-xl transition ${
              edu.hiddenOnMobile ? "hidden md:block" : ""
            }`}
          >
            <div className="flex justify-center mb-2 md:mb-4 text-[var(--primary-bg)]">
              {edu.icon}
            </div>
            <h2 className="text-md md:text-lg font-semibold mb-2">{edu.title}</h2>
            <p className="text-sm">{edu.institution}</p>
            <div className="flex justify-center items-center gap-2 mt-3 text-sm">
              <Calendar className="h-4 w-4 text-[var(--primary-bg)]" />
              <span>Passing Year: {edu.year}</span>
            </div>
          </div>
        ))}

      </motion.div>

      {/* Achievements Section */}
      <motion.div
        className="mt-12 w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">Achievements</h2>
        <ul className="space-y-4">
          {achievementsData.map((achieve, idx) => (
            <li
              key={idx}
              className="p-4 border-l-4 border-[var(--primary-bg)] shadow-md rounded-md flex items-center gap-3"
            >
              <Medal className="text-[var(--primary-bg)] w-8 h-8 mt-1" />
              <div>
                <p className="font-semibold">{achieve.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {achieve.position} – {achieve.year}
                </p>
              </div>
            </li>
          ))}
        </ul>

      </motion.div>

    </section>
    </>
    
  );
}
