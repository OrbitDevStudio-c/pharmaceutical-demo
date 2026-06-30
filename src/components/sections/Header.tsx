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
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden-mobile");
    } else {
      document.body.classList.remove("overflow-hidden-mobile");
    }
    return () => {
      document.body.classList.remove("overflow-hidden-mobile");
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const sections = ["home", "about", "products", "why-choose-us", "research", "news"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: 0.1,
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
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className="fixed inset-0 w-full h-screen z-[100] bg-white/75 backdrop-blur-3xl border-r border-white/20 flex flex-col p-6 md:hidden shadow-[0_0_50px_rgba(15,23,42,0.03)]"
          >
            {/* Header row in drawer */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9">
                  <Image
                    src="/images/logo.png"
                    alt="NovaCure Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="text-base font-extrabold text-slate-900 leading-none block">
                    NovaCure
                  </span>
                  <span className="text-[9px] block text-slate-500 font-extrabold uppercase tracking-widest mt-0.5">
                    Pharma
                  </span>
                </div>
              </div>
              {/* Close Button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-500 hover:text-slate-900 focus:outline-none cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col gap-2 overflow-y-auto flex-1 pr-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between py-4 px-5 rounded-2xl hover:bg-slate-50 font-bold transition-all border border-transparent ${
                    activeSection === link.id
                      ? "text-primary bg-primary-light border-primary/5"
                      : "text-slate-700"
                  }`}
                >
                  <span className="text-sm">{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            {/* CTA Button at the bottom */}
            <div className="pt-6 border-t border-slate-100 mt-auto">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="w-full block">
                <Button className="w-full py-4 text-sm font-bold shadow-md shadow-primary/10" variant="primary">
                  Get In Touch
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
