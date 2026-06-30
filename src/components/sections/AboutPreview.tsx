"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Target, ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function AboutPreview() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Tagline badge */}
            <span className="text-xs font-bold uppercase tracking-wider text-primary mb-3 bg-primary-light px-3.5 py-1.5 rounded-full">
              About NovaCure
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Pioneering Clinical Research & Advanced Therapeutics
            </h2>

            {/* Description */}
            <p className="text-slate-600 font-normal leading-relaxed mb-8">
              At NovaCure Pharma, we combine world-class manufacturing standards with state-of-the-art biological research to discover and manufacture highly reliable therapies. Our facilities adhere strictly to WHO GMP guidelines, delivering safety and efficacy to patients and doctors around the globe.
            </p>

            {/* Mission & Vision Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-10">
              {/* Mission Card */}
              <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Our Mission</h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    To deliver accessible, life-changing therapeutics using high-precision biological manufacturing.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-accent/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-teal-light text-teal-accent flex items-center justify-center shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Our Vision</h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    To be the global benchmark for safety and innovation in biopharmaceutical therapeutics.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Button variant="primary" className="gap-2">
              Read Our Story <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Right Column - Image layout */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Visual background layers */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-light rounded-full blur-2xl opacity-80" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary-light rounded-full blur-2xl opacity-80" />

            {/* Main Image Container */}
            <div className="relative z-10 w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl border border-slate-200/50">
              <Image
                src="/images/about_healthcare.png"
                alt="NovaCure scientists analyzing clinical test tubes"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Trust Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 -left-6 z-20 glass p-5 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs border border-white/60"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
                100%
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">WHO GMP Certified</p>
                <p className="text-[10px] font-semibold text-slate-500">
                  Compliant with rigorous manufacturing protocols.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
