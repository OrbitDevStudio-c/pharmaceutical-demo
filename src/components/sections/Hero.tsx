"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dna, HeartPulse, ShieldAlert, Sparkles, ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  const stats = [
    { label: "Products", value: "150+" },
    { label: "Countries Served", value: "25+" },
    { label: "Patients Reached", value: "10M+" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Premium Gradients */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_background.png"
          alt="State of the art laboratory background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85 select-none"
        />
        {/* Soft teal/blue medical gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent md:to-white/10 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/10 z-10" />
        {/* Subtle decorative mesh grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 z-10" />
      </div>

      {/* Floating Decorative Medical Elements */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        {/* DNA Helix */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, 360],
          }}
          transition={{
            y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          }}
          className="absolute top-[20%] right-[10%] md:right-[15%] w-16 h-16 rounded-2xl glass flex items-center justify-center shadow-lg text-primary"
        >
          <Dna className="w-8 h-8" />
        </motion.div>

        {/* Pulse Heart */}
        <motion.div
          animate={{
            y: [0, 15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-[25%] right-[20%] md:right-[30%] w-14 h-14 rounded-2xl glass flex items-center justify-center shadow-lg text-teal-accent"
        >
          <HeartPulse className="w-6 h-6" />
        </motion.div>

        {/* Sparkles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[35%] left-[5%] md:left-[10%] w-12 h-12 rounded-2xl glass flex items-center justify-center shadow-lg text-yellow-500"
        >
          <Sparkles className="w-5 h-5" />
        </motion.div>

        {/* Shield Safety */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[35%] left-[8%] md:left-[18%] w-10 h-10 rounded-xl glass flex items-center justify-center shadow-md text-emerald-500"
        >
          <ShieldAlert className="w-5 h-5" />
        </motion.div>
      </div>

      {/* Hero Content */}
      <Container className="relative z-30 pt-12 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8 flex flex-col items-start text-left max-w-3xl"
          >
            {/* Tagline Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-slate-200 mb-6"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-teal-accent animate-pulse" />
              <span className="text-xs font-bold text-slate-800 tracking-wider uppercase">
                Pioneering Scientific Excellence
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6"
            >
              Innovating Healthcare for a{" "}
              <span className="bg-gradient-to-r from-primary to-teal-accent bg-clip-text text-transparent">
                Better Tomorrow
              </span>
            </motion.h1>

            {/* Short Introduction */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl"
            >
              NovaCure Pharma is dedicated to delivering high-quality pharmaceutical products
              with advanced clinical research, global quality standards, and patient-focused care.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a href="#products">
                <Button variant="primary" size="lg" className="gap-2">
                  Explore Products <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="glass" size="lg">
                  Contact Us
                </Button>
              </a>
            </motion.div>

            {/* Quick Hero Statistics */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 md:gap-8 pt-8 border-t border-slate-200 w-full"
            >
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-2xl sm:text-3xl font-extrabold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
