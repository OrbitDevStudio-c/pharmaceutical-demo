"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "../ui/Container";

function AnimatedCounter({ value, duration = 1.5 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const stepTime = Math.max(Math.floor((duration * 1000) / end), 15);
    
    const timer = setInterval(() => {
      const increment = Math.ceil(end / (1000 / stepTime));
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Stats() {
  const statsList = [
    { target: 20, suffix: "+", label: "Years of Experience" },
    { target: 150, suffix: "+", label: "Approved Formulations" },
    { target: 25, suffix: "+", label: "Countries Supplied" },
    { target: 10, suffix: "M+", label: "Patients Served" },
  ];

  return (
    <section className="py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Dynamic background gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-primary/10 to-teal-accent/5 z-0" />
      
      {/* High-tech dot pattern overlay */}
      <div className="absolute inset-0 bg-dot-grid-dark opacity-30 z-0 pointer-events-none select-none" />

      {/* Decorative vector light highlights */}
      <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-primary/20 rounded-full blur-[100px] z-0 pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-teal-accent/20 rounded-full blur-[100px] z-0 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {statsList.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, damping: 15, delay: idx * 0.08 }}
              className="flex flex-col items-center justify-center p-6 rounded-3xl bg-white/5 border border-white/5 shadow-2xl relative overflow-hidden"
            >
              {/* Subtle neon indicator top line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-teal-accent to-transparent" />

              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
                <AnimatedCounter value={stat.target} />
                <span className="text-teal-accent">{stat.suffix}</span>
              </div>
              
              <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mt-4">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
