"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Send, Check, Award, Trophy } from "lucide-react";
import Container from "../ui/Container";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 4000);
  };

  const productLinks = [
    { name: "Tablets & Capsules", href: "#products" },
    { name: "Liquid Syrups", href: "#products" },
    { name: "Clinical Injectables", href: "#products" },
    { name: "Supplements & Vitamins", href: "#products" },
    { name: "Medical Devices", href: "#products" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Why NovaCure", href: "#why-choose-us" },
    { name: "Research & Development", href: "#research" },
    { name: "News & Media", href: "#news" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-24 pb-8 relative overflow-hidden">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-dot-grid-dark opacity-10 pointer-events-none select-none" />

      <Container className="relative z-10">
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-slate-900">
          
          {/* Column 1: Info & Awards */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
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
                <span className="text-xl font-bold tracking-tight text-white">
                  NovaCure
                </span>
                <span className="text-xs block text-slate-500 font-semibold uppercase tracking-wider -mt-1">
                  Pharma
                </span>
              </div>
            </a>
            <p className="text-xs leading-relaxed max-w-sm text-slate-400 font-medium">
              NovaCure Pharma is a global biopharmaceutical leader specializing in the development, manufacturing, and distribution of highly stable therapeutic formulations and medical devices.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3l-0.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-6">Company</h4>
            <ul className="flex flex-col gap-3.5 text-xs font-medium">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-6">Products</h4>
            <ul className="flex flex-col gap-3.5 text-xs font-medium">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Awards */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Subscribe to Scientific Insights</h4>
              <p className="text-slate-500 text-xs font-medium leading-normal mb-4">
                Receive our quarterly journals on drug discovery and global regulatory reports.
              </p>
              
              <form onSubmit={handleSubscribe} className="relative w-full max-w-sm mx-auto lg:mx-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={subscribed}
                  placeholder="news@yourhospital.org"
                  className="w-full bg-slate-900 border border-slate-800 rounded-full py-3.5 pl-5 pr-12 text-xs text-white placeholder-slate-650 focus:outline-none focus:border-teal-accent focus:ring-1 focus:ring-teal-accent transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={subscribed}
                  className="absolute right-1.5 top-1.5 w-9 h-9 rounded-full bg-primary hover:bg-primary-dark text-white flex items-center justify-center transition-colors cursor-pointer disabled:bg-emerald-500"
                  aria-label="Subscribe"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-4 h-4" />}
                </button>
              </form>
            </div>

            {/* Awards seals */}
            <div className="pt-4 border-t border-slate-900 flex flex-wrap gap-4 items-center justify-center lg:justify-start">
              <div className="flex gap-2 items-center text-slate-500 text-[10.5px] font-bold">
                <Trophy className="w-4.5 h-4.5 text-amber-500" />
                <span>Global Quality Leadership 2026</span>
              </div>
              <div className="flex gap-2 items-center text-slate-500 text-[10.5px] font-bold">
                <Award className="w-4.5 h-4.5 text-teal-accent" />
                <span>WHO GMP Excellence Certificate</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom row: copyright and legal links */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-8 text-[11px] font-medium text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <p>© {new Date().getFullYear()} NovaCure Pharma. All rights reserved.</p>
            {/* Credit section for OrbitDev Studio */}
            <div className="flex items-center gap-2 border-t sm:border-t-0 sm:border-l border-slate-900 pt-3 sm:pt-0 sm:pl-6 justify-center sm:justify-start">
              <span className="text-[10px] text-slate-650 font-extrabold uppercase tracking-widest shrink-0">Website Made By</span>
              <a href="https://devstudiooffical.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                <div className="relative w-6 h-6">
                  <Image
                    src="/images/orbitdevstudio.png"
                    alt="OrbitDev Studio Logo"
                    fill
                    className="object-contain filter brightness-110"
                  />
                </div>
                <span className="text-xs font-extrabold text-white tracking-wide">OrbitDevStudio</span>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Pharmacovigilance Reporting</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
