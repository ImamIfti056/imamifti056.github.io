import { GraduationCap, School, Calendar, Medal, BadgeCheck } from "lucide-react";


const educationData = [
  {
    title: "B.Sc. in Electronics and Communication Engineering",
    institution: "Khulna University of Engineering & Technology (KUET)",
    year: "2025",
    result: "3.51/4.00",
    icon: <GraduationCap className="h-6 w-6 2xl:h-8 2xl:w-8" />,
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    institution: "Brahmanbaria Government College, Brahmanbaria",
    year: "2019",
    result: "4.83/5.00",
    icon: <School className="h-6 w-6 2xl:h-8 2xl:w-8" />,
  },
  {
    title: "Secondary School Certificate (SSC)",
    institution: "Annada Govt. High School, Brahmanbaria",
    year: "2017",
    result: "5.00/5.00",
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



export default function Education() {

  return (
    <section id="education" className="page-section">
      <div className="split-page">
        <aside className="summary-panel">
          <p className="page-kicker">Academic path</p>
          <h1 className="section-heading">Education</h1>
          <p className="page-lede">
            Engineering background with a steady shift toward software systems, product delivery, and applied problem solving.
          </p>
        </aside>

        <div>
          <div className="timeline-list">
            {educationData.map((edu) => (
              <article key={edu.title} className="timeline-item">
                <h3>{edu.title}</h3>
                <p>{edu.institution}</p>
                <div className="chip-group">
                  <span className="chip"><Calendar className="h-3.5 w-3.5 text-[var(--primary-bg)]" /> {edu.year}</span>
                  <span className="chip"><BadgeCheck className="h-3.5 w-3.5 text-[var(--primary-bg)]" /> {edu.result}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <div className="dossier-title-row">
              <h2 className="dossier-title">Achievements</h2>
            </div>
            <div className="project-list">
              {achievementsData.map((achieve) => (
                <article className="project-item" key={achieve.title}>
                  <h3 className="flex items-center gap-2">
                    <Medal size={18} />
                    {achieve.title}
                  </h3>
                  <p>{achieve.position} - {achieve.year}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
