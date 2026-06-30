"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, CheckCircle2, Globe, Check } from "lucide-react";
import Container from "../ui/Container";

export default function TrustedBy() {
  const certifications = [
    {
      name: "WHO GMP",
      desc: "Good Manufacturing Practices",
      icon: Award,
      color: "text-blue-600",
      bg: "bg-blue-50/50",
      glow: "hover:shadow-blue-500/10 hover:border-blue-300/50",
    },
    {
      name: "ISO 9001:2015",
      desc: "Quality Management Certified",
      icon: CheckCircle2,
      color: "text-teal-600",
      bg: "bg-teal-50/50",
      glow: "hover:shadow-teal-500/10 hover:border-teal-300/50",
    },
    {
      name: "FDA Compliance",
      desc: "Strict Regulatory Alignment",
      icon: ShieldCheck,
      color: "text-indigo-600",
      bg: "bg-indigo-50/50",
      glow: "hover:shadow-indigo-500/10 hover:border-indigo-300/50",
    },
    {
      name: "Global Export",
      desc: "International Supply Standards",
      icon: Globe,
      color: "text-sky-600",
      bg: "bg-sky-50/50",
      glow: "hover:shadow-sky-500/10 hover:border-sky-300/50",
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="absolute inset-0 bg-dot-grid opacity-20" />
      <Container>
        <div className="flex flex-col items-center justify-center text-center mb-10 relative z-10">
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
            Certified Safety & Compliance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto relative z-10">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-2xl glass-panel border border-slate-200/40 shadow-sm transition-all duration-500 flex flex-col items-center text-center group border-glow ${cert.glow}`}
              >
                {/* Seal Icon with rotating effect */}
                <div className={`w-14 h-14 rounded-2xl ${cert.bg} ${cert.color} flex items-center justify-center mb-4 transition-all duration-500 group-hover:rotate-12`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                {/* Certification Label */}
                <h3 className="text-base font-extrabold text-slate-900 mb-1 flex items-center gap-1.5 justify-center">
                  {cert.name}
                  {/* Microcheck animated */}
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0"
                  >
                    <Check className="w-2.5 h-2.5" />
                  </motion.span>
                </h3>
                <p className="text-xs text-slate-500 font-bold leading-normal">{cert.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
