"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";
import Button from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "products", "why-choose-us", "research", "news"];
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -60% 0px",
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About Us", href: "#about", id: "about" },
    { name: "Products", href: "#products", id: "products" },
    { name: "Why Us", href: "#why-choose-us", id: "why-choose-us" },
    { name: "Research", href: "#research", id: "research" },
    { name: "News", href: "#news", id: "news" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, x: "-50%" }}
        animate={{ y: 0, x: "-50%" }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] sm:w-[90%] max-w-5xl rounded-full ${
          isScrolled
            ? "top-4 bg-white/70 backdrop-blur-xl border border-slate-200/40 shadow-[0_20px_50px_rgba(15,23,42,0.06)] py-2.5 px-6"
            : "top-6 bg-white/30 backdrop-blur-md border border-white/50 py-4 px-8"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 transition-transform group-hover:scale-105 duration-300">
              <Image
                src="/images/logo.png"
                alt="NovaCure Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <span className="text-lg font-extrabold tracking-tight text-slate-900 leading-none block">
                NovaCure
              </span>
              <span className="text-[10px] block text-slate-500 font-extrabold uppercase tracking-widest mt-0.5">
                Pharma
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1.5 bg-slate-900/5 p-1 rounded-full border border-slate-950/5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative text-xs font-bold px-4 py-2 rounded-full transition-colors duration-300 cursor-pointer ${
                    isActive ? "text-slate-900" : "text-slate-500 hover:text-slate-950"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-white shadow-sm rounded-full border border-slate-100 z-0"
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:block">
            <a href="#contact">
              <Button size="sm" variant="primary" className="shadow-sm">
                Get in Touch
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20, x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, y: -20, x: "-50%" }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-[95%] z-45 bg-white/95 backdrop-blur-2xl shadow-2xl border border-slate-100 rounded-3xl p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between py-3 px-4 rounded-2xl hover:bg-slate-50 font-bold transition-all ${
                  activeSection === link.id ? "text-primary bg-primary-light" : "text-slate-700"
                }`}
              >
                {link.name}
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="w-full">
                <Button className="w-full" variant="primary">
                  Get in Touch
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
