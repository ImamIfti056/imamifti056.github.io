import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Mail,
  Droplet,
  HeartPulse,
  GraduationCap,
  Compass,
  Sparkles,
  Cake, Phone,
  User,
  BookOpen,
  Headphones,
  Languages
} from "lucide-react";

const fadeUp = {
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

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <>
      <section
      id="about"
      className="min-h-screen px-4 flex flex-col items-start justify-center max-w-5xl mx-auto"
    >
    <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-10"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
        transition={{ duration: 0.6 }}
        >
        About Me
    </motion.h1>

      <div className="flex flex-col-reverse md:flex-row gap-12 max-w-6xl mx-auto items-center">
        {/* Left: About Text */}
        <motion.div
          className="md:w-1/2 text-base 2xl:text-lg leading-relaxed "
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={1}
        >
            
          <p className="mb-4">
            <span className="text-3xl text-[var(--primary-bg)]">&lt;/&gt;</span> I'm Imamul Islam Ifti — a Full-Stack Developer. I'm doing my Bachelor in
            Electronics and Communication Engineering from KUET. I’m passionate
            about crafting <span className="text-[var(--primary-bg)]">web applications</span> that not only function smoothly but
            also provide real value to users.
          </p>
          <p>
            I believe in clean code, continuous learning, and leveraging
            technology to solve real-world problems. Outside work, you’ll find
            me exploring <span className="text-[var(--primary-bg)]">AI trends</span>, building side projects, or planning my next
            travel adventure.
          </p>
        </motion.div>

        {/* Right: Cards */}
        <motion.div
          className="md:w-1/2 grid grid-cols-1 gap-6 text-[var(--primary-text)]"
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={2}
        >
            {/* Personal Info Card */}
            <div className="bg-black rounded-xl p-5 shadow-[0_4px_20px_var(--primary-bg)] text-[var(--primary-bg)]">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <User size={20} /> Personal Info
                </h3>
                <hr />
                <ul className="space-y-3 text-sm sm:text-base mt-4">
                    <li className="flex items-center gap-2">
                    <Cake size={18} /> <span>August 11, 2001</span>
                    </li>
                    <li className="flex items-center gap-2">
                    <Droplet size={18} /> <span>B (+ve)</span>
                    </li>
                    <li className="flex items-center gap-2">
                    <Mail size={18} /> <span>imamul.ifti@gmail.com</span>
                    </li>
                    <li className="flex items-center gap-2">
                    <Phone size={18} /> <span>+880 1999 372154</span>
                    </li>
                    <li className="flex items-center gap-2">
                    <MapPin size={18} /> <span>Khulna, Bangladesh</span>
                    </li>
                    <li className="flex items-center gap-2">
                    <Compass size={18} /> <span>Brahmanbaria, Bangladesh</span>
                    </li>
                </ul>
            </div>

            {/* Extras */}
            <div className="bg-[var(--primary-bg)] rounded-xl p-5 text-[var(--primary-text)] hidden 2xl:block">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <BookOpen size={20} /> More About Me
                </h3>
                <hr />
                <ul className="space-y-3 text-sm sm:text-base mt-4">
                    <li className="flex items-center gap-2">
                    <Languages size={18} />{" "}
                    <span>Bengali (Native), English (Fluent)</span>
                    </li>
                    <li className="flex items-center gap-2">
                    <BookOpen size={18} />{" "}
                    <span>Currently exploring Docker & DevOps</span>
                    </li>
                    <li className="flex items-center gap-2">
                    <Headphones size={18} />{" "}
                    <span>Lo-fi beats, rain, and solving bugs</span>
                    </li>
                </ul>
            </div>

          
        </motion.div>
      </div>
    </section>
    </>
    
  );
};

export default About;
