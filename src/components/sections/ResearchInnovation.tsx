"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Container from "../ui/Container";

export default function ResearchInnovation() {
  const progressMilestones = [
    { label: "Clinical Trial Success Rate", value: 94 },
    { label: "Formulation Stability Ratio", value: 99 },
    { label: "Bioavailability Index", value: 98 },
  ];

  const timelineSteps = [
    {
      phase: "Phase 1: Discovery & Design",
      desc: "Target selection, molecular design, and computer-aided drug synthesis simulation.",
    },
    {
      phase: "Phase 2: Pre-Clinical Testing",
      desc: "In-vitro and in-vivo evaluation of pharmacokinetics and toxicology profiles.",
    },
    {
      phase: "Phase 3: Clinical Evaluation",
      desc: "Phase I-III patient trials monitoring compound efficacy and safety validation.",
    },
    {
      phase: "Phase 4: Regulatory Approval",
      desc: "WHO GMP compliant production line setup, FDA review, and global launch.",
    },
  ];

  return (
    <section id="research" className="py-24 bg-slate-50 border-t border-b border-slate-100 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Image & Progress Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-8"
          >
            {/* Lab Image Container */}
            <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden shadow-xl border border-slate-200/50">
              <Image
                src="/images/research_laboratory.png"
                alt="High-tech drug development equipment"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>

            {/* Progress indicators block */}
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-5">
              <h3 className="text-base font-bold text-slate-900 mb-1">Research Excellence Index</h3>
              {progressMilestones.map((milestone) => (
                <div key={milestone.label} className="w-full">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
                    <span>{milestone.label}</span>
                    <span className="text-primary">{milestone.value}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${milestone.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-teal-accent rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Timeline & Context */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-teal-accent mb-3 bg-teal-light px-3.5 py-1.5 rounded-full">
              Research & Innovation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Pioneering Next-Gen Molecular Breakthroughs
            </h2>
            <p className="text-slate-600 font-normal leading-relaxed mb-8">
              Through strategic pharmaceutical engineering and collaboration with international clinical labs, we systematically advance therapeutic compounds from discovery to sterile production.
            </p>

            {/* Timeline of Drug Development */}
            <div className="flex flex-col gap-6 relative before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-0.5 before:bg-slate-200">
              {timelineSteps.map((step, index) => (
                <div key={index} className="flex gap-4 relative">
                  <div className="w-6 h-6 rounded-full bg-white border-2 border-primary flex items-center justify-center shrink-0 z-10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">{step.phase}</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
