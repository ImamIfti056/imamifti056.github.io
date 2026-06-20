import {
  MapPin,
  User,
  Headphones,
  Languages
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
          <p className="mb-4">
            <span className="font-semibold text-[var(--ink)]">I'm Imamul Islam Ifti</span> — a Full-Stack Developer. I have completed my Bachelor in
            Electronics and Communication Engineering from KUET. I’m passionate
            about crafting <span className="font-semibold text-[var(--primary-bg)]">web applications</span> that not only function smoothly but
            also provide real value to users.
          </p>
          <p>
            I believe in clean code, continuous learning, and leveraging
            technology to solve real-world problems. Outside work, you’ll find
            me exploring <span className="font-semibold text-[var(--primary-bg)]">AI trends</span>, building side projects, or planning my next
            travel adventure.
          </p>
          </div>

          <div className="section-rule" />
          <div className="focus-table">
            {[
              { label: "Personal", icon: <User />, items: ["August 11, 2001", "B (+ve)"] },
              { label: "Location", icon: <MapPin />, items: ["Dhaka, Bangladesh", "Brahmanbaria, Bangladesh"] },
              { label: "Languages", icon: <Languages />, items: ["Bengali (Native)", "English (Fluent)"] },
              { label: "Interests", icon: <Headphones />, items: ["AI trends", "Side projects", "Debugging"] },
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
