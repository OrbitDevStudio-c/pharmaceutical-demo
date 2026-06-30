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
      border: "hover:border-blue-200",
    },
    {
      title: "Capsules",
      desc: "Fast-release and sustained-action gelatin/HPMC shells engineered with specialized micro-pellet technology.",
      icon: Layers,
      color: "text-teal-600",
      bg: "bg-teal-50/70",
      border: "hover:border-teal-200",
    },
    {
      title: "Syrups",
      desc: "Bio-available liquid suspensions and solutions developed with high stability and pleasant taste profiles.",
      icon: Droplet,
      color: "text-sky-600",
      bg: "bg-sky-50/70",
      border: "hover:border-sky-200",
    },
    {
      title: "Injectables",
      desc: "Sterile, pyrogen-free liquid solutions and dry powders prepared in advanced isolator cleanrooms.",
      icon: Syringe,
      color: "text-purple-600",
      bg: "bg-purple-50/70",
      border: "hover:border-purple-200",
    },
    {
      title: "Vitamins",
      desc: "Essential nutrients, dietary supplements, and therapeutic vitamins to support systemic immune defense.",
      icon: ShieldPlus,
      color: "text-emerald-600",
      bg: "bg-emerald-50/70",
      border: "hover:border-emerald-200",
    },
    {
      title: "Healthcare Devices",
      desc: "State-of-the-art diagnostic testing kits, inhalers, and precision drug-delivery accessories.",
      icon: HeartPulse,
      color: "text-rose-600",
      bg: "bg-rose-50/70",
      border: "hover:border-rose-200",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="products" className="py-24 bg-slate-50 border-t border-b border-slate-100 overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-accent mb-3 bg-teal-light px-3.5 py-1.5 rounded-full">
            Product Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            High-Quality Formulations for Diverse Needs
          </h2>
          <p className="text-slate-500 text-sm mt-4 leading-relaxed">
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
                className={`p-8 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 ${cat.border} hover:shadow-lg flex flex-col items-start justify-between group`}
              >
                <div>
                  {/* Icon Block */}
                  <div className={`w-14 h-14 rounded-2xl ${cat.bg} ${cat.color} flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-12`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  {/* Card Info */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{cat.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">
                    {cat.desc}
                  </p>
                </div>
                {/* CTA Link */}
                <button className="flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark transition-colors mt-auto group/btn cursor-pointer">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
