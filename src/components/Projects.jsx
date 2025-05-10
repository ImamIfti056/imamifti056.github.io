import { motion, useInView  } from "framer-motion";
import { Star, GitFork, Wrench, Clock, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { getRepos } from "../services/getRepos";
import { div } from "framer-motion/client";

const projects = [
  {
    title: "KUETX – Learning Management System",
    description:
      "A full-stack LMS platform built using Django, React, and PostgreSQL. Supports content management, exams, user roles, and community interaction.",
    link: "https://github.com/yourusername/kuetx-lms",
  },
  {
    title: "Stock Price Predictor",
    description:
      "A Python project using machine learning models to predict stock prices. Built with scikit-learn and yfinance.",
    link: "https://github.com/yourusername/stock-predictor",
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio itself, built using React, Tailwind CSS, Framer Motion, and Lucide icons to showcase my journey.",
    link: "https://github.com/yourusername/portfolio",
  },
];

const fadeVariant = {
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

export default function Projects() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    getRepos("ImamIfti056")
      .then((data) => {
        setRepos(data);
        console.log(data)
      })
      .catch(console.error);
    setLoading(false)
  }, []);

  if(loading) return <div>Loading...</div>

  return (
    <section
      id="projects"
      className="min-h-screen px-4 py-12 md:py-20 flex flex-col items-start justify-start md:justify-center max-w-5xl mx-auto"
    >
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-12"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        viewport={{ once: true }}
        variants={fadeVariant}
        custom={0}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h1>

      <motion.div
        className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 w-full"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeVariant}
        custom={1}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {repos && repos.map((repo) => (
          <div
            key={repo.id}
            className="p-4 sm:p-5 rounded-lg border-l-2 border-[var(--primary-bg)]"
          >
            <h3 className="text-sm sm:text-lg font-semibold mb-2 flex gap-4">
              {repo.name}
              <a
                href={repo.html_url}
                target="_blank"
                className="text-blue-600 underline flex items-center gap-1"
              >
                <ExternalLink className="w-4 h-4" />
              </a>

              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  className="text-green-600 underline flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" /> Live
                </a>
              )}
            </h3>

            <div className="flex flex-wrap gap-3 text-gray-500 mb-3 items-center text-sm sm:text-lg">
              <span className="flex items-center gap-1">
                <GitFork className="w-4 h-4" /> {repo.forks_count}
              </span>

              <span className="flex items-center gap-1">
                <Wrench className="w-4 h-4" /> {repo.language}
              </span>

              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {new Date(repo.updated_at).toLocaleDateString()}
              </span>
            </div>

          </div>
        ))}
      </motion.div>

    </section>
  );
}
