"use client";

import React from "react";
import { Star, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function Testimonials() {
  const reviews = [
    {
      name: "Dr. Sarah Jenkins",
      role: "Chief of Cardiology",
      org: "St. Jude Heart Institute",
      text: "NovaCure's cardiovascular formulations maintain unmatched stability and bio-availability. Their clinical transparency makes them our most trusted pharmaceutical partner.",
      initials: "SJ",
      border: "hover:border-blue-300/40",
      glow: "hover:shadow-blue-500/5",
    },
    {
      name: "David Chen",
      role: "Director of Procurement",
      org: "Apex Healthcare Logistics",
      text: "We distribute NovaCure therapeutics across 15 countries. Their cold-chain integrity, shipping accuracy, and compliance certifications are flawless.",
      initials: "DC",
      border: "hover:border-teal-300/40",
      glow: "hover:shadow-teal-500/5",
    },
    {
      name: "Dr. Alistair Thorne",
      role: "Lead Clinical Researcher",
      org: "BioVanguard Laboratories",
      text: "Collaborating with NovaCure on biological drug trials has been a stellar experience. Their laboratory equipment and PhD scientists operate at a high standard.",
      initials: "AT",
      border: "hover:border-purple-300/40",
      glow: "hover:shadow-purple-500/5",
    },
  ];

  return (
    <section className="py-32 bg-white overflow-hidden relative">
      <div className="absolute inset-0 bg-dot-grid opacity-30 select-none pointer-events-none" />
      
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary mb-3 bg-primary-light px-3.5 py-1.5 rounded-full">
            Partner Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Trusted by Doctors & Healthcare Leaders
          </h2>
          <p className="text-slate-500 text-sm mt-4 font-medium leading-relaxed">
            Read feedback from clinicians, global distributors, and scientific researchers who collaborate with NovaCure.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className={`p-8 rounded-3xl bg-slate-50/60 backdrop-blur-md border border-slate-200/40 shadow-sm transition-all duration-500 flex flex-col justify-between group border-glow ${rev.border} ${rev.glow}`}
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex justify-between items-center mb-8">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <MessageSquare className="w-5 h-5 text-slate-350 transition-transform duration-500 group-hover:scale-110" />
                </div>
                
                {/* Quote Text */}
                <p className="text-slate-650 font-semibold text-sm leading-relaxed mb-8 italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Profile details */}
              <div className="flex items-center gap-4 border-t border-slate-200/40 pt-6">
                <div className="w-12 h-12 rounded-2xl bg-primary-light text-primary flex items-center justify-center font-extrabold text-sm shrink-0 shadow-inner">
                  {rev.initials}
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 leading-none mb-1.5">{rev.name}</h4>
                  <p className="text-[9.5px] font-extrabold text-teal-accent uppercase tracking-widest leading-none">
                    {rev.role}
                  </p>
                  <p className="text-slate-400 text-[10px] font-bold leading-none mt-1">{rev.org}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
