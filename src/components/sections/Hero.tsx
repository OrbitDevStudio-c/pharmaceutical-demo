"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Dna, Microscope, Atom, HeartPulse, FlaskConical, ShieldCheck } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring" as const, stiffness: 90, damping: 20 },
    },
  };

  const stats = [
    { label: "Approved Products", value: "150+" },
    { label: "Countries Served", value: "25+" },
    { label: "Patients Served", value: "10M+" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 bg-slate-50/50">
      {/* Background Image & Overlay Gradients */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/images/hero_background.png"
          alt="Advanced Pharmaceutical Laboratory"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85 scale-102 blur-[1px]"
        />
        {/* Soft, premium visual overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/10 z-10" />
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-teal-50/20 to-transparent z-10" />
        {/* Premium background grid */}
        <div className="absolute inset-0 bg-dot-grid opacity-50 z-15" />
      </div>

      {/* Ambient Blur Circles (Glow Blobs) */}
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] z-20 pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-teal-accent/10 rounded-full blur-[100px] z-20 pointer-events-none animate-pulse-subtle" />

      {/* Floating Scientific Elements */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden select-none">
        {/* Moving Molecular Particle Field */}
        {[
          { x: "12%", y: "25%", scale: 0.8, opacity: 0.35, duration: 8 },
          { x: "45%", y: "65%", scale: 1.0, opacity: 0.25, duration: 12 },
          { x: "75%", y: "20%", scale: 0.7, opacity: 0.40, duration: 10 },
          { x: "28%", y: "78%", scale: 0.9, opacity: 0.30, duration: 14 },
          { x: "60%", y: "45%", scale: 0.6, opacity: 0.20, duration: 16 },
          { x: "85%", y: "55%", scale: 0.75, opacity: 0.35, duration: 9 },
        ].map((particle, i) => (
          <motion.div
            key={i}
            initial={{
              x: particle.x,
              y: particle.y,
              scale: particle.scale,
              opacity: particle.opacity,
            }}
            animate={{
              y: ["0px", "-40px", "0px"],
              x: ["0px", "20px", "0px"],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-3 h-3 rounded-full bg-teal-accent/30 flex items-center justify-center"
            style={{
              boxShadow: "0 0 15px rgba(13, 148, 136, 0.4)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal-accent" />
          </motion.div>
        ))}

        {/* 3D-like Floating DNA Helix Icon (Top-Right) */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotateY: [0, 360],
          }}
          transition={{
            y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 25, repeat: Infinity, ease: "linear" },
          }}
          className="absolute top-[18%] right-[8%] w-15 h-15 rounded-[20px] glass-panel hidden sm:flex items-center justify-center shadow-2xl text-primary border border-white/60"
        >
          <Dna className="w-7 h-7 text-primary" />
        </motion.div>

        {/* Floating Capsule Vector (Bottom-Right-Middle) */}
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [15, -15, 15],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[16%] right-[14%] w-14 h-14 rounded-2xl glass-panel hidden md:flex items-center justify-center shadow-xl text-teal-accent border border-white/60"
        >
          {/* Custom Capsule SVG */}
          <svg className="w-7 h-7 text-teal-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="9" width="20" height="6" rx="3" transform="rotate(45 12 12)" />
            <path d="M7.7 7.7l8.6 8.6" />
          </svg>
        </motion.div>

        {/* Floating Microscope Card (Middle-Left, far edge) */}
        <motion.div
          animate={{
            y: [0, -18, 0],
            rotate: [-5, 5, -5],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[38%] left-[5%] w-14 h-14 rounded-2xl glass-panel hidden lg:flex items-center justify-center shadow-lg text-primary border border-white/60"
        >
          <Microscope className="w-6.5 h-6.5 text-primary" />
        </motion.div>

        {/* Floating Atom Card (Middle-Right, far edge) */}
        <motion.div
          animate={{
            y: [0, 22, 0],
            rotate: [0, 360],
          }}
          transition={{
            y: { duration: 13, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          }}
          className="absolute top-[48%] right-[5%] w-14 h-14 rounded-2xl glass-panel hidden lg:flex items-center justify-center shadow-lg text-teal-accent border border-white/60"
        >
          <Atom className="w-6.5 h-6.5 text-teal-accent" />
        </motion.div>

        {/* Floating HeartPulse Card (Bottom-Left, below text margins) */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            y: [0, -10, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[12%] left-[8%] w-13 h-13 rounded-2xl glass-panel hidden md:flex items-center justify-center shadow-md text-teal-accent border border-white/60"
        >
          <HeartPulse className="w-6 h-6 text-teal-accent" />
        </motion.div>

        {/* Floating FlaskConical Card (Top-Left, above text margins) */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [10, -10, 10],
          }}
          transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[10%] w-13 h-13 rounded-2xl glass-panel hidden md:flex items-center justify-center shadow-md text-primary border border-white/60"
        >
          <FlaskConical className="w-6 h-6 text-primary" />
        </motion.div>

        {/* Floating ShieldCheck Card (Top-Middle-Right, above text margins) */}
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[12%] left-[45%] w-13 h-13 rounded-2xl glass-panel hidden sm:flex items-center justify-center shadow-md text-primary border border-white/60"
        >
          <ShieldCheck className="w-6 h-6 text-primary" />
        </motion.div>
      </div>

      {/* Hero Content */}
      <Container className="relative z-30 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-9 xl:col-span-8 flex flex-col items-start"
          >
            {/* Pill Tagline */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 backdrop-blur-md border border-slate-900/10 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-teal-accent animate-pulse" />
              <span className="text-[10px] font-extrabold text-slate-800 tracking-widest uppercase">
                Pioneering Healthcare Innovation
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.05] mb-6 select-text"
            >
              Innovating Healthcare for a{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-teal-accent bg-clip-text text-transparent block sm:inline">
                Better Tomorrow
              </span>
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed mb-10 max-w-2xl select-text"
            >
              NovaCure Pharma is dedicated to delivering high-quality pharmaceutical formulations
              engineered with advanced clinical research, global quality standards, and patient-focused care.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-14 w-full sm:w-auto"
            >
              <a href="#products" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2.5 font-bold shadow-lg shadow-primary/20">
                  Explore Portfolio <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <Button variant="glass" size="lg" className="w-full sm:w-auto font-bold">
                  Connect With Us
                </Button>
              </a>
            </motion.div>

            {/* Hero Quick Statistics */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 sm:gap-10 pt-8 border-t border-slate-200/60 w-full max-w-xl"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>

    </section>
  );
}
