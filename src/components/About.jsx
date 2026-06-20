import {
  Calendar,
  Droplet,
  MapPin,
  Languages,
  Home,
} from "lucide-react";

const About = () => {

  return (
    <section id="about" className="page-section">
      <div className="split-page">
        <aside className="summary-panel">
          <p className="page-kicker">Profile</p>
          <h1 className="section-heading">About</h1>
          <p className="page-lede">
            Full-stack developer with an engineering background, focused on useful products and maintainable systems.
          </p>
        </aside>

        <div>
          <div className="section-copy max-w-3xl">
          <p className="mb-4 about-copy-desktop">
            <span className="font-semibold text-[var(--ink)]">I'm Imamul Islam Ifti</span> — a Full-Stack Developer with a Bachelor in
            Electronics and Communication Engineering from KUET. I build
            <span className="font-semibold text-[var(--primary-bg)]"> web applications</span> with a focus on maintainable architecture,
            thoughtful user experience, and practical engineering decisions.
          </p>
          <p className="about-copy-desktop">
            My current workflow includes working with
            <span className="font-semibold text-[var(--primary-bg)]"> AI coding agents</span> by defining clear rules, using specialized
            skills, reviewing generated changes, and guiding them with strong
            product and codebase context. I use AI as an engineering amplifier:
            faster exploration, sharper debugging, and cleaner implementation
            while keeping <span className="font-semibold text-[var(--primary-bg)]">ownership</span> of quality, readability, and user value.
          </p>
          </div>

          <div className="section-rule" />
          <div className="focus-table">
            {[
              { label: "Birth Date", icon: <Calendar />, items: ["August 11, 2001"] },
              { label: "Blood Group", icon: <Droplet />, items: ["B (+ve)"] },
              { label: "Address", icon: <MapPin />, items: ["Dhaka, Bangladesh"] },
              { label: "Hometown", icon: <Home />, items: ["Brahmanbaria, Bangladesh"] },
              { label: "Languages", icon: <Languages />, items: ["Bengali (Native)", "English (Fluent)"] },
            ].map(({ label, icon, items }) => (
              <div className="focus-row" key={label}>
                <div className="focus-label">
                  {icon}
                  {label}
                </div>
                <div className="chip-group">
                  {items.map((item) => <span className="chip" key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
