import { Users, ShieldCheck, Flag } from "lucide-react";
import { motion, useInView  } from "framer-motion";
import React from 'react'
import { useRef } from "react";


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
    org: "Lance Corporal",
    time: "2013 – 2015",
    icon: <Flag className="w-6 h-6" />,
  },
];

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

export default function Extracurricular() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (

    <>
    <section
      id="extracurricular"
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
        Extracurricular Activities
      </motion.h1>
      
      <motion.ul
        className="space-y-8 w-full"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
        custom={1}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {extras.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-4 border-l-4 border-[var(--primary-bg)] rounded-md pl-4 2xl:py-4"
          >
            <div className="mt-1 text-[var(--primary-bg)]">{item.icon}</div>
            <div>
              <h2 className="text-lg 2xl:text-2xl font-semibold">{item.title}</h2>
              <p className="text-sm 2xl:text-lg">{item.org}</p>
              <p className="text-sm 2xl:text-lg">{item.time}</p>
            </div>
          </li>
        ))}
      </motion.ul>
      
    </section>
    </>
  );
}
