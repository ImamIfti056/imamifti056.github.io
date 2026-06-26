import { Briefcase, Calendar } from "lucide-react";


const experiences = [
  {
    title: "Software Engineer (L1)",
    company: "Apploye Inc.",
    period: "July 2025 - Present",
    description: [
      "Gaining hands-on experience in full-stack development using React, Go and Django at a SaaS company."
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

export default function Experience() {

  return (

    <section id="experience" className="page-section">
      <div className="split-page">
        <aside className="summary-panel">
          <p className="page-kicker">Work history</p>
          <h1 className="section-heading" style={{fontSize: "50px"}}>Experience</h1>
          <p className="page-lede">
            Product engineering work across frontend, backend, team delivery, and maintainable full-stack systems.
          </p>
        </aside>

        <div className="timeline-list">
          {experiences.map((exp) => (
            <article key={exp.title} className="timeline-item">
              <h3>{exp.title}</h3>
              <div className="chip-group">
                <span className="chip"><Briefcase className="h-3.5 w-3.5 text-[var(--primary-bg)]" /> {exp.company}</span>
                <span className="chip"><Calendar className="h-3.5 w-3.5 text-[var(--primary-bg)]" /> {exp.period}</span>
              </div>
              <ul className="mt-2 grid gap-2">
                {exp.description.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-7 text-[var(--muted)]">
                    <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-[var(--primary-bg)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
