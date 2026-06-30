"use client";

import React from "react";
import { motion } from "framer-motion";
import { Microscope, Globe, Award, ShieldCheck, FlaskConical, Clock } from "lucide-react";
import Container from "../ui/Container";

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 90, damping: 18 },
    },
  };

  return (
    <section id="why-choose-us" className="py-32 bg-white overflow-hidden relative">
      <div className="absolute inset-0 bg-dot-grid opacity-30 select-none pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[350px] h-[350px] bg-teal-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary mb-3 bg-primary-light px-3.5 py-1.5 rounded-full">
            Our Edge
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Setting the Benchmark in Global Healthcare
          </h2>
          <p className="text-slate-500 text-sm mt-4 font-medium leading-relaxed">
            At NovaCure, our dedication to patient care drives us to maintain high-quality controls across research, development, and logistics.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {/* Card 1: Advanced Research (Col-Span 2) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="md:col-span-2 p-8 rounded-3xl bg-slate-50/70 backdrop-blur-md border border-slate-200/40 shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col justify-between group border-glow"
          >
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-inner group-hover:rotate-12 transition-transform duration-500">
                <Microscope className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-2">Advanced Research & Bio-Modeling</h3>
                <p className="text-slate-500 text-xs font-bold leading-relaxed max-w-lg">
                  Our state-of-the-art biological labs utilize computer-aided molecular modeling and genomics to identify effective therapeutic targets, speeding up generic oncology and immunology formulations.
                </p>
              </div>
            </div>
            {/* Visual element representing molecular structure */}
            <div className="mt-8 pt-6 border-t border-slate-200/40 flex gap-4 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
              <span>🧬 Genomics</span>
              <span>🔬 High-Throughput Screening</span>
              <span>💻 In-Silico Testing</span>
            </div>
          </motion.div>

          {/* Card 2: Global Distribution (Col-Span 1) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="col-span-1 p-8 rounded-3xl bg-slate-50/70 backdrop-blur-md border border-slate-200/40 shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col justify-between group border-glow"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-accent flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500">
              <Globe className="w-5.5 h-5.5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">Global Distribution Network</h3>
              <p className="text-slate-500 text-[11px] font-bold leading-relaxed">
                An optimized cold-chain and dry-freight logistics network delivering therapies to 25+ countries reliably.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Certified Manufacturing (Col-Span 1) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="col-span-1 p-8 rounded-3xl bg-slate-50/70 backdrop-blur-md border border-slate-200/40 shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col justify-between group border-glow"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500">
              <Award className="w-5.5 h-5.5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">WHO GMP Manufacturing</h3>
              <p className="text-slate-500 text-[11px] font-bold leading-relaxed">
                High-grade production labs operating under WHO GMP guidelines and strict US FDA compliance controls.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Affordable Healthcare (Col-Span 1) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="col-span-1 p-8 rounded-3xl bg-slate-50/70 backdrop-blur-md border border-slate-200/40 shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col justify-between group border-glow"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500">
              <ShieldCheck className="w-5.5 h-5.5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">Affordable Access</h3>
              <p className="text-slate-500 text-[11px] font-bold leading-relaxed">
                Combining clinical efficiency with smart operations to provide premium-grade medication at fair rates.
              </p>
            </div>
          </motion.div>

          {/* Card 5: Experienced Scientists (Col-Span 1) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="col-span-1 p-8 rounded-3xl bg-slate-50/70 backdrop-blur-md border border-slate-200/40 shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col justify-between group border-glow"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500">
              <FlaskConical className="w-5.5 h-5.5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">Expert Clinical Team</h3>
              <p className="text-slate-500 text-[11px] font-bold leading-relaxed">
                Led by PhD researchers and medical experts focused on bio-chemistry and oncology breakthroughs.
              </p>
            </div>
          </motion.div>

          {/* Card 6: 24/7 Support (Col-Span 3 - Broad Callout Banner) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="md:col-span-3 p-8 rounded-3xl bg-slate-900 text-white shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col sm:flex-row justify-between items-center gap-6 group border border-slate-800"
          >
            <div className="flex gap-5 items-start">
              <div className="w-14 h-14 rounded-2xl bg-slate-800 text-teal-accent border border-slate-700 flex items-center justify-center shrink-0 shadow-inner group-hover:rotate-12 transition-transform duration-500">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white mb-1">Corporate Client Liaison & Pharmacovigilance</h3>
                <p className="text-slate-400 text-xs font-bold leading-relaxed max-w-2xl">
                  Our clinical response desks operate around the clock to support hospitals, medical distributors, and pharmacies with shipment dispatch status, stability certificate audits, and adverse effect logs.
                </p>
              </div>
            </div>
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full bg-teal-accent text-white font-extrabold text-xs shadow-md shadow-teal-accent/15 cursor-pointer shrink-0 hover:bg-teal-dark transition-colors duration-300"
              >
                Reach Support
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
