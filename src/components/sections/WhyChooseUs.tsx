"use client";

import React from "react";
import { motion } from "framer-motion";
import { Microscope, Globe, Award, ShieldCheck, FlaskConical, Clock } from "lucide-react";
import Container from "../ui/Container";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Advanced Research",
      desc: "Our state-of-the-art biological labs study complex disease mechanisms to discover effective therapeutic targets.",
      icon: Microscope,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Global Distribution",
      desc: "An optimized cold-chain and dry-freight logistics network delivering therapies to 25+ countries reliably.",
      icon: Globe,
      color: "text-teal-600",
      bg: "bg-teal-50",
    },
    {
      title: "Certified Manufacturing",
      desc: "High-grade production labs operating under WHO GMP guidelines and strict US FDA compliance controls.",
      icon: Award,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      title: "Affordable Healthcare",
      desc: "Combining clinical efficiency with smart operations to provide premium-grade medication at fair rates.",
      icon: ShieldCheck,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      title: "Experienced Scientists",
      desc: "Led by PhD researchers and healthcare experts focused on immunology, cardiology, and generic oncology.",
      icon: FlaskConical,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      title: "24/7 Support",
      desc: "Dedicated clinical support channels answering queries from hospitals, pharmacies, and global distributors.",
      icon: Clock,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 18 },
    },
  };

  return (
    <section id="why-choose-us" className="py-24 bg-white overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary mb-3 bg-primary-light px-3.5 py-1.5 rounded-full">
            Our Edge
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Setting the Benchmark in Global Healthcare
          </h2>
          <p className="text-slate-500 text-sm mt-4 leading-relaxed">
            At NovaCure, our dedication to patient care drives us to maintain high-quality controls across research, development, and logistics.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl bg-slate-50/50 border border-slate-100 hover:border-slate-200 hover:bg-slate-50 hover:shadow-md transition-all duration-300 flex gap-5 items-start"
              >
                {/* Icon Container */}
                <div className={`w-12 h-12 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center shrink-0 shadow-sm`}>
                  <Icon className="w-6 h-6" />
                </div>
                {/* Description */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
