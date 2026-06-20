import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from "lucide-react";



export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formsubmit.co/iiifti056@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
      e.target.reset();
    }
  };


  return (
    <section id="contact" className="page-section">
      <div className="split-page">
        <aside className="summary-panel">
          <p className="page-kicker">Get in touch</p>
          <h1 className="section-heading">Contact</h1>
          <p className="page-lede">
            Have a role, product idea, or engineering collaboration in mind? Send the details and I’ll get back with next steps.
          </p>
        </aside>

        <div>
          <div className="focus-table mb-10">
            {[
              { icon: <Mail />, label: "Mail", value: "imamul.ifti@gmail.com" },
              { icon: <Phone />, label: "Phone", value: "+880 1610 617558" },
              { icon: <MapPin />, label: "Address", value: "Dhaka, Bangladesh" },
            ].map(({ icon, label, value }) => (
              <div className="focus-row" key={value}>
                <div className="focus-label">
                  {icon}
                  {label}
                </div>
                <div className="chip-group">
                  <span className="chip">{value}</span>
                </div>
              </div>
            ))}
          </div>

          {submitted ? (
            <div className="project-item font-semibold text-[var(--primary-bg)]">Thank you. Your message has been sent.</div>
          ) : (
            <form className="project-item !pr-6" onSubmit={(e) => handleSubmit(e)}>
              <h3>Send a message</h3>
              <input type="text" placeholder="Your Name" name="name" className="form-field" required />
              <input type="email" placeholder="Your Email" name="email" className="form-field" required />
              <textarea rows={5} name="message" placeholder="Your Message" className="form-field" required />
              <button type="submit" disabled={loading} className="primary-button w-fit">
                {loading ? (
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                  </svg>
                ) : (
                  <Send className="w-4 h-4" />
                )}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
