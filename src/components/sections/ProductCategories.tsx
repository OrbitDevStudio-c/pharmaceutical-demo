"use client";

import React from "react";
import { motion } from "framer-motion";
import { Pill, Droplet, Syringe, ShieldPlus, HeartPulse, Layers, ArrowRight } from "lucide-react";
import Container from "../ui/Container";

export default function ProductCategories() {
  const categories = [
    {
      title: "Tablets",
      desc: "High-precision compressed solid formulations designed for optimum dissolution and therapeutic efficacy.",
      icon: Pill,
      color: "text-blue-600",
      bg: "bg-blue-50/70",
      border: "hover:border-blue-300/40",
      glow: "group-hover:shadow-blue-500/5",
    },
    {
      title: "Capsules",
      desc: "Fast-release and sustained-action gelatin/HPMC shells engineered with specialized micro-pellet technology.",
      icon: Layers,
      color: "text-teal-600",
      bg: "bg-teal-50/70",
      border: "hover:border-teal-300/40",
      glow: "group-hover:shadow-teal-500/5",
    },
    {
      title: "Syrups",
      desc: "Bio-available liquid suspensions and solutions developed with high stability and pleasant taste profiles.",
      icon: Droplet,
      color: "text-sky-600",
      bg: "bg-sky-50/70",
      border: "hover:border-sky-300/40",
      glow: "group-hover:shadow-sky-500/5",
    },
    {
      title: "Injectables",
      desc: "Sterile, pyrogen-free liquid solutions and dry powders prepared in advanced isolator cleanrooms.",
      icon: Syringe,
      color: "text-purple-600",
      bg: "bg-purple-50/70",
      border: "hover:border-purple-300/40",
      glow: "group-hover:shadow-purple-500/5",
    },
    {
      title: "Vitamins",
      desc: "Essential nutrients, dietary supplements, and therapeutic vitamins to support systemic immune defense.",
      icon: ShieldPlus,
      color: "text-emerald-600",
      bg: "bg-emerald-50/70",
      border: "hover:border-emerald-300/40",
      glow: "group-hover:shadow-emerald-500/5",
    },
    {
      title: "Healthcare Devices",
      desc: "State-of-the-art diagnostic testing kits, inhalers, and precision drug-delivery accessories.",
      icon: HeartPulse,
      color: "text-rose-600",
      bg: "bg-rose-50/70",
      border: "hover:border-rose-300/40",
      glow: "group-hover:shadow-rose-500/5",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="products" className="py-32 bg-slate-50 relative overflow-hidden border-b border-slate-100">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dot-grid opacity-30 select-none pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-accent mb-3 bg-teal-light px-3.5 py-1.5 rounded-full">
            Product Catalogue
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            High-Quality Formulations for Diverse Needs
          </h2>
          <p className="text-slate-500 text-sm mt-4 font-medium leading-relaxed">
            Discover our extensive range of certified pharmaceuticals and medical therapeutics manufactured in compliance with global ISO and FDA quality standards.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                className={`p-8 bg-white/70 backdrop-blur-md rounded-3xl border border-slate-200/40 shadow-[0_4px_30px_rgba(15,23,42,0.02)] transition-all duration-500 ${cat.border} hover:shadow-xl hover:bg-white flex flex-col items-start justify-between group relative overflow-hidden border-glow ${cat.glow}`}
              >
                {/* Accent neon glow strip inside the card */}
                <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500 ${cat.color}`} />

                <div className="relative z-10 w-full">
                  {/* Icon Block with 3D shadow and hover twist */}
                  <div className={`w-14 h-14 rounded-2xl ${cat.bg} ${cat.color} flex items-center justify-center mb-6 shadow-inner transition-transform duration-500 group-hover:rotate-12`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  {/* Card Info */}
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2 flex items-center justify-between w-full">
                    {cat.title}
                    {/* Tiny visual node */}
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-teal-accent transition-colors duration-500" />
                  </h3>
                  
                  <p className="text-slate-500 text-xs font-bold leading-relaxed mb-6">
                    {cat.desc}
                  </p>
                </div>

                {/* CTA Link */}
                <button className="flex items-center gap-2 text-xs font-extrabold text-primary hover:text-primary-dark transition-colors mt-auto group/btn cursor-pointer relative z-10">
                  <span>Learn Specifications</span>
                  <motion.div
                    className="flex items-center"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.div>
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
