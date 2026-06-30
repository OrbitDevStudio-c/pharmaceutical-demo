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
    },
    {
      name: "David Chen",
      role: "Director of Procurement",
      org: "Apex Healthcare Logistics",
      text: "We distribute NovaCure therapeutics across 15 countries. Their cold-chain integrity, shipping accuracy, and compliance certifications are flawless.",
      initials: "DC",
    },
    {
      name: "Dr. Alistair Thorne",
      role: "Lead Clinical Researcher",
      org: "BioVanguard Laboratories",
      text: "Collaborating with NovaCure on biological drug trials has been a stellar experience. Their laboratory equipment and PhD scientists operate at a high standard.",
      initials: "AT",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary mb-3 bg-primary-light px-3.5 py-1.5 rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Trusted by Doctors & Healthcare Partners
          </h2>
          <p className="text-slate-500 text-sm mt-4 leading-relaxed">
            Read stories and feedback from clinicians, distributors, and scientific researchers who rely on NovaCure Pharma daily.
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
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/10 shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              {/* Quote bubble style */}
              <div>
                {/* Star rating & icon */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <MessageSquare className="w-5 h-5 text-slate-300" />
                </div>
                {/* Quote text */}
                <p className="text-slate-600 font-medium text-sm leading-relaxed mb-8 italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Profile details */}
              <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className="w-12 h-12 rounded-full bg-primary-light text-primary flex items-center justify-center font-bold text-base shrink-0">
                  {rev.initials}
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">{rev.name}</h4>
                  <p className="text-[11px] font-bold text-teal-accent uppercase tracking-wider">
                    {rev.role}
                  </p>
                  <p className="text-slate-500 text-[10px] font-semibold">{rev.org}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
