"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, BarChart2 } from "lucide-react";
import Container from "../ui/Container";

export default function ResearchInnovation() {
  const [activeStep, setActiveStep] = useState(0);


  const timelineSteps = [
    {
      phase: "Phase 1: Discovery & Design",
      desc: "Target selection, molecular design, and computer-aided drug synthesis simulation using advanced computational bio-models.",
      detail: "Using proprietary algorithms, we screen thousands of potential protein-binding ligands in hours instead of months.",
    },
    {
      phase: "Phase 2: Pre-Clinical Testing",
      desc: "In-vitro evaluation of pharmacokinetics, biological safety profiles, and molecular toxicity thresholds.",
      detail: "Cell culture and organ-on-a-chip setups validate initial toxicity indexes before active trials.",
    },
    {
      phase: "Phase 3: Clinical Trials",
      desc: "Phase I-III patient trials monitoring compound efficacy, dosage levels, and safety validation across partner hospitals.",
      detail: "Double-blind studies conducted with international clinical organizations to guarantee objective results.",
    },
    {
      phase: "Phase 4: Regulatory Launch",
      desc: "WHO GMP compliant production line setup, dossier filings with FDA/EMA, and global logistics readiness.",
      detail: "Production lines are scaled using automated sterile isolators and integrated cold-chain labeling systems.",
    },
  ];

  return (
    <section id="research" className="py-32 bg-white overflow-hidden relative border-b border-slate-100">
      <div className="absolute inset-0 bg-dot-grid opacity-30 select-none pointer-events-none" />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Image, Stats, & SVG Scientific Graph */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-8"
          >
            {/* Laboratory Image with absolute glow layer */}
            <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border border-slate-200/50 group">
              <Image
                src="/images/research_laboratory.png"
                alt="High-tech drug development equipment"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
            </div>

            {/* Scientific Visualization Chart: Drug Stability Graph */}
            <div className="p-6 bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-xl flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                  <BarChart2 className="w-4 h-4 text-teal-accent" />
                  Bioavailability vs Time (Hrs)
                </span>
                <span className="text-[9px] font-bold text-teal-accent bg-teal-accent/10 px-2 py-0.5 rounded">
                  Compound: NV-402
                </span>
              </div>
              
              {/* Vector graph layout */}
              <div className="h-32 relative flex items-end">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                  {/* Grid Lines */}
                  <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(255,255,255,0.05)" strokeWidth="0.2" />
                  <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.05)" strokeWidth="0.2" />
                  <line x1="0" y1="30" x2="100" y2="30" stroke="rgba(255,255,255,0.05)" strokeWidth="0.2" />
                  
                  {/* Curve path representing bioavailability rise/fall */}
                  <motion.path
                    d="M 0,38 Q 25,5 45,18 T 100,35"
                    fill="none"
                    stroke="url(#grad)"
                    strokeWidth="1.2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />

                  {/* Pulsing coordinate circle on graph */}
                  <circle cx="45" cy="18" r="1.5" fill="#0d9488" />
                  <circle cx="45" cy="18" r="3" fill="none" stroke="#0d9488" strokeWidth="0.5" className="animate-ping origin-center" />

                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#0A66C2" />
                      <stop offset="50%" stopColor="#0D9488" />
                      <stop offset="100%" stopColor="#6366F1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex justify-between text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                <span>0h</span>
                <span>4h (Peak Absorption)</span>
                <span>12h</span>
                <span>24h</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Timeline Explorer */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-accent mb-3 bg-teal-light px-3.5 py-1.5 rounded-full">
              Development Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-6">
              Accelerating Drug Development Story
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-8 max-w-xl">
              We leverage advanced biochemical synthesis pathways to speed up the translation of molecule designs into approved, safe patient medications.
            </p>

            {/* Timeline selector layout */}
            <div className="flex flex-col gap-4 w-full">
              {timelineSteps.map((step, index) => {
                const isActive = activeStep === index;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex gap-4 ${
                      isActive
                        ? "bg-slate-50 border-slate-200 shadow-sm"
                        : "bg-transparent border-transparent hover:bg-slate-50/50"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isActive ? "bg-primary border-primary text-white" : "border-slate-300 text-slate-400"
                    }`}>
                      {index + 1}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-sm font-extrabold text-slate-900 mb-1 flex items-center gap-2">
                        {step.phase}
                        {isActive && <Activity className="w-3.5 h-3.5 text-primary animate-pulse" />}
                      </h4>
                      <p className="text-xs text-slate-500 font-bold leading-relaxed">
                        {step.desc}
                      </p>
                      
                      {/* Expanded Active Detail */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden border-t border-slate-200/60 pt-3"
                          >
                            <p className="text-[11px] text-slate-600 font-medium leading-relaxed italic">
                              {step.detail}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
