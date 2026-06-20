import { Code2, Database, Layers3, Monitor } from "lucide-react";

const focusGroups = [
  {
    label: "Languages",
    icon: <Code2 />,
    items: ["JavaScript", "Python", "Go", "SQL"],
  },
  {
    label: "Frontend",
    icon: <Monitor />,
    items: ["React", "Tailwind CSS", "Shadcn", "Redux"],
  },
  {
    label: "Backend",
    icon: <Layers3 />,
    items: ["Django", "Golang", "REST", "Simple JWT"],
  },
  {
    label: "Data & Infra",
    icon: <Database />,
    items: ["PostgreSQL", "Git & Github", "GitHub Actions"],
  },
];

export default function Skills() {

  return (
    <section id="skills" className="page-section">
      <div className="split-page">
        <aside className="summary-panel">
          <p className="page-kicker">Technical stack</p>
          <h1 className="section-heading">Skills</h1>
          <p className="page-lede">
            A practical full-stack toolkit shaped around product delivery, API reliability, and maintainable frontend work.
          </p>
        </aside>

        <div>
          <div className="dossier-title-row">
            <h2 className="dossier-title">Technical Focus</h2>
          </div>
          <p className="section-copy mb-6">
            I enjoy working across the full stack, with a focus on building robust backend systems and intuitive interfaces.
          </p>
          <div className="focus-table">
            {focusGroups.map(({ label, icon, items }) => (
              <div className="focus-row" key={label}>
                <div className="focus-label">
                  {icon}
                  {label}
                </div>
                <div className="chip-group">
                  {items.map((item) => (
                    <span className="chip" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
