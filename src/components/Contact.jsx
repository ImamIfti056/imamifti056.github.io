import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion, useInView  } from "framer-motion";
import { useRef } from "react";
import { Helmet } from 'react-helmet';


const fadeVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};


export default function Contact() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.5 });
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
    <>
      <section
      id="contact"
      className="min-h-screen px-4 flex flex-col items-start justify-center max-w-5xl mx-auto"
    >
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-10 w-full max-w-3xl"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeVariant}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl">
        {/* Contact Info */}
        <motion.div
          className="flex-1 space-y-6"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeVariant}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-[var(--primary-bg)]" />
            <span>imamul.ifti@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-[var(--primary-bg)]" />
            <span>+880 1610 617558</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6 text-[var(--primary-bg)]" />
            <span>Kandipara, Brahmanbaria, Bangladesh</span>
          </div>
        </motion.div>

        {/* Contact Form */}
        {submitted ? (
          <div className="text-green-600 font-semibold">✅ Thank you! Your message has been sent.</div>
        ) : (<motion.form
          className="flex-1 space-y-4"  
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeVariant}
          onSubmit={(e) => handleSubmit(e)}
          transition={{ duration: 0.6 }} // placeholder
        >
          
          <input
            type="text"
            placeholder="Your Name"
            name='name'
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            rows={5}
            name="message"
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className={`flex items-center gap-2 text-[var(--primary-text)] px-6 py-2 rounded-lg bg-[var(--primary-bg)] hover:opacity-75 transition`}
          >
            {loading ? (
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            ) : (
              <Send className="w-4 h-4" />
            )}
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>)}
      </div>
    </section>
    </>
    
  );
}
