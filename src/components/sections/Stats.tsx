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
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-dark to-teal-dark z-0 opacity-95" />
      
      {/* Floating white micro-lights */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 bg-white/40 rounded-full animate-ping" />
        <div className="absolute bottom-[30%] right-[20%] w-2 h-2 bg-white/30 rounded-full animate-ping" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {statsList.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center p-4"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2">
                <AnimatedCounter value={stat.target} />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-blue-100 uppercase tracking-widest mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
