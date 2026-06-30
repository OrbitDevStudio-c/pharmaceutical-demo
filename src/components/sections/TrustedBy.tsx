"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, CheckCircle2, Globe } from "lucide-react";
import Container from "../ui/Container";

export default function TrustedBy() {
  const certifications = [
    {
      name: "WHO GMP",
      desc: "Good Manufacturing Practices",
      icon: Award,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      name: "ISO 9001:2015",
      desc: "Quality Management Certified",
      icon: CheckCircle2,
      color: "text-teal-600",
      bg: "bg-teal-50",
    },
    {
      name: "FDA Compliance",
      desc: "Strict Regulatory Alignment",
      icon: ShieldCheck,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      name: "Global Export",
      desc: "International Supply Standards",
      icon: Globe,
      color: "text-sky-600",
      bg: "bg-sky-50",
    },
  ];

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <Container>
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Certified Excellence & Trust
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className={`w-12 h-12 rounded-xl ${cert.bg} ${cert.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">{cert.name}</h3>
                <p className="text-xs text-slate-500 font-medium text-center">{cert.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
