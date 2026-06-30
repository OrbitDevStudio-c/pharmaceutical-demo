"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Target, Sparkles, Award, ShieldAlert, FlaskConical } from "lucide-react";
import Container from "../ui/Container";

export default function AboutPreview() {
  const values = [
    { icon: Award, label: "Scientific Integrity", desc: "Rigorous trials and transparent bio-data reporting." },
    { icon: ShieldAlert, label: "Patient Care First", desc: "Formulations built to maximize safety profiles." },
    { icon: FlaskConical, label: "Modern Biotech", desc: "Adopting advanced computer-aided molecular synthesis." },
  ];

  return (
    <section id="about" className="py-32 bg-white overflow-hidden relative">
      {/* Decorative ambient background grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-30 select-none pointer-events-none" />
      
      {/* Glow blobs */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Content & Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary mb-3 bg-primary-light px-3.5 py-1.5 rounded-full">
              Corporate Insight
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-6">
              Pioneering Clinical Research & Advanced Therapeutics
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-8 max-w-2xl">
              At NovaCure Pharma, we combine biological engineering with strict manufacturing standards to deliver reliable medical formulations. Our laboratories operate under WHO GMP and FDA compliance controls to ensure absolute molecular integrity.
            </p>

            {/* Mission & Vision Toggle Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-10">
              {/* Mission */}
              <div className="p-6 rounded-2xl bg-slate-50/50 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900 mb-1">Our Mission</h3>
                  <p className="text-xs text-slate-500 font-bold leading-relaxed">
                    To deliver accessible, life-saving therapeutics using high-precision manufacturing.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="p-6 rounded-2xl bg-slate-50/50 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-light text-teal-accent flex items-center justify-center shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900 mb-1">Our Vision</h3>
                  <p className="text-xs text-slate-500 font-bold leading-relaxed">
                    To be the global benchmark for safety and innovation in biological therapeutics.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values Row */}
            <div className="flex flex-col gap-4 w-full pt-6 border-t border-slate-100">
              <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-2">Our Operating Pillars</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {values.map((v, i) => {
                  const Icon = v.icon;
                  return (
                    <div key={i} className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                        <Icon className="w-4 h-4 text-primary" />
                        {v.label}
                      </div>
                      <p className="text-[10.5px] text-slate-500 font-semibold leading-relaxed mt-1">
                        {v.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Collage & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Background elements */}
            <div className="absolute top-[10%] left-[-5%] w-[120%] h-[110%] border border-slate-100 rounded-[32px] pointer-events-none select-none" />

            {/* Main Image Collage Frame */}
            <div className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border border-slate-200/50 group">
              <Image
                src="/images/about_healthcare.png"
                alt="NovaCure clinical scientists working in cleanroom"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
            </div>

            {/* Floating Glass Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 z-20 glass-panel p-5 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs border border-white/60"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-accent/10 text-teal-accent flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-extrabold text-slate-900 uppercase tracking-wider">Purity Standard</p>
                <p className="text-lg font-extrabold text-teal-accent leading-none mt-0.5">99.98%</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 z-20 glass-panel p-5 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs border border-white/60"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-extrabold text-slate-900 uppercase tracking-wider">Clinical Trials</p>
                <p className="text-xs font-bold text-slate-500 mt-0.5">Phase I-III Studies</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
