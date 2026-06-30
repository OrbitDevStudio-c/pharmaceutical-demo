"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function News() {
  const posts = [
    {
      title: "NovaCure Initiates Phase II Clinical Study on mRNA Immunotherapy",
      desc: "Our research labs have commenced clinical validation of NV-402, a promising cancer vaccine candidate.",
      image: "/images/news_card_1.png",
      category: "Research",
      date: "Jun 28, 2026",
      readTime: "5 min read",
      color: "bg-blue-50 text-blue-600 border-blue-200/50",
    },
    {
      title: "Optimizing Global Cold-Chain Distribution for Vaccine Safety",
      desc: "How NovaCure partners with global automated logistics to maintain strict temperature compliance during shipping.",
      image: "/images/news_card_2.png",
      category: "Supply Chain",
      date: "Jun 15, 2026",
      readTime: "4 min read",
      color: "bg-teal-50 text-teal-600 border-teal-200/50",
    },
    {
      title: "Automating Sterile Cleanrooms with High-Precision Robotics",
      desc: "A look inside our newest WHO GMP-compliant liquid medicine filling line using advanced robotic systems.",
      image: "/images/news_card_3.png",
      category: "Technology",
      date: "Jun 02, 2026",
      readTime: "3 min read",
      color: "bg-purple-50 text-purple-600 border-purple-200/50",
    },
  ];

  return (
    <section id="news" className="py-32 bg-slate-50 relative overflow-hidden border-b border-slate-100">
      <div className="absolute inset-0 bg-dot-grid opacity-30 select-none pointer-events-none" />

      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-accent mb-3 bg-teal-light px-3.5 py-1.5 rounded-full">
            Insights & Media
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Latest News & Research Updates
          </h2>
          <p className="text-slate-500 text-sm mt-4 font-medium leading-relaxed">
            Stay informed with our latest scientific discoveries, corporate logistics announcements, and clinical updates.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="bg-white/70 backdrop-blur-md rounded-3xl border border-slate-200/40 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-500 group border-glow"
            >
              <div>
                {/* Image Container with Zoom & Rounded Top */}
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Category Tag overlay */}
                  <span className={`absolute top-4 left-4 z-10 text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border bg-white/95 backdrop-blur-sm ${post.color}`}>
                    {post.category}
                  </span>
                </div>

                {/* Article Info */}
                <div className="p-6">
                  {/* Metadata Row */}
                  <div className="flex gap-4 items-center text-[10px] font-extrabold text-slate-400 mb-3.5 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  {/* Title */}
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-primary transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>
                  {/* Description */}
                  <p className="text-slate-505 text-xs font-medium leading-relaxed">
                    {post.desc}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="p-6 pt-0 border-t border-slate-100/60 mt-6 flex justify-between items-center">
                <button className="flex items-center gap-2 text-xs font-extrabold text-primary group-hover:text-primary-dark transition-colors cursor-pointer group/btn">
                  <span>Read Full Article</span>
                  <motion.div
                    className="flex items-center"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.div>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
