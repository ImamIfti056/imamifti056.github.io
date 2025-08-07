import { motion, useInView  } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { useRef } from "react";


const experiences = [
  {
    title: "Junior Software Engineer",
    company: "Apploye Inc.",
    period: "July 2025 - Present",
    description: [
      "Gaining hands-on experience in full-stack development using React and Django at a SaaS company."
    ],
  },
  {
    title: "Learnathon 3.0 | Runner-up, Python Stack",
    company: "Organized by Geeky Solution",
    period: "December 2024 - April 2025",
    description: [
      "Served as Team Lead of a 3-member group, overseeing task management, development workflow, and delivery.",
      "Designed and built KUETX, a full-stack Learning Management System using React.js, Django REST Framework, and PostgreSQL.",
      "Implemented core features including course content management, quizzes, user authentication, newsfeed, and admin panel.",
      "Managed GitHub project boards, branching strategy, and CI/CD with GitHub Actions & SonarCloud.",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Increased delay for better staggered effect
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Experience() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (

    <>
      <section
      id="experience"
      className="min-h-screen px-4 flex flex-col items-start justify-center max-w-5xl mx-auto"
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
        Experience
      </motion.h1>

      <motion.div
        className="space-y-10 w-full"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
        custom={1}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {experiences.map((exp, i) => (
          <div
            key={exp.title}
            className="border-l-4 border-[var(--primary-bg)] pl-6 group hover:shadow-lg rounded-md transition py-4"
          >
            <h2 className="text-2xl mb-4 font-semibold">{exp.title}</h2>

            <div className="flex items-center gap-2 mb-1 font-medium text-sm text-muted-foreground">
              <Briefcase className="w-4 h-4 text-[var(--primary-bg)]" />
              {exp.company}
            </div>
            
            <div className="flex items-center gap-2 text-sm mt-1 text-muted-foreground">
              <Calendar className="w-4 h-4 text-[var(--primary-bg)]" />
              {exp.period}
            </div>
            <ul className="mt-4 space-y-2 list-disc list-inside text-sm md:text-base">
              {exp.description.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </section>
    </>
    
  );
}
