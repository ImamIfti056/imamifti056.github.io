import { Users, ShieldCheck, Flag } from "lucide-react";


const extras = [
  {
    title: "Floor Monitoring Committee Member",
    org: "Lalan Shah Hall",
    time: '2024-25',
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "National Children's Task Force (NCTF), Brahmanbaria",
    org: "Organizing Secretary",
    time: "2016 – 2018",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Bangladesh National Cadet Corps (BNCC)",
    org: "Lance Corporal · Participated in a 7-day Capsule Training Camp",
    time: "2013 – 2015",
    icon: <Flag className="w-6 h-6" />,
  },
];

export default function Extracurricular() {

  return (

    <section id="extracurricular" className="page-section">
      <div className="split-page">
        <aside className="summary-panel">
          <p className="page-kicker">Beyond code</p>
          <h1 className="section-heading" style={{fontSize: "42px"}}>Extracurricular</h1>
          <p className="page-lede">
            Leadership, organizing, and discipline-oriented activities that shaped how I collaborate with teams.
          </p>
        </aside>

        <div className="timeline-list">
          {extras.map((item) => (
            <article className="timeline-item" key={item.title}>
              <h3 className="flex items-center gap-2">
                {item.icon}
                {item.title}
              </h3>
              <p>{item.org}</p>
              <div className="chip-group">
                <span className="chip">{item.time}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
