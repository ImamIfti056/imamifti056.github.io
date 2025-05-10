import React from 'react'
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion, useInView  } from "framer-motion";
import { useRef } from "react";


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

  return (
    <section
      id="contact"
      className="min-h-screen px-4 py-20 flex flex-col items-center justify-center"
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
            <span>+880 1999 372154</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6 text-[var(--primary-bg)]" />
            <span>Brahmanbaria, Bangladesh</span>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="flex-1 space-y-4"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeVariant}
          onSubmit={(e) => e.preventDefault()}
          transition={{ duration: 0.6 }} // placeholder
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className={`flex items-center gap-2 text-[var(--primary-text)] px-6 py-2 rounded-lg bg-[var(--primary-bg)] hover:opacity-75 transition`}
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
