"use client";

import React, { useState, useEffect } from "react";
import { Globe, Building2, FlaskConical, Truck, ShieldCheck, MapPin, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../ui/Container";

interface OfficeLocation {
  name: string;
  type: string;
  role: "corporate" | "research" | "logistics" | "regulatory";
  details: string;
  coords: { left: string; top: string };
}

export default function WorldMap() {
  const [activeView, setActiveView] = useState<"presence" | "supply">("presence");
  const [hoveredPin, setHoveredPin] = useState<OfficeLocation | null>(null);
  const [svgText, setSvgText] = useState<string>("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetch("/images/world-map.svg")
      .then((res) => res.text())
      .then((data) => {
        setSvgText(data);
      })
      .catch((err) => console.error("Error loading map SVG:", err));
  }, []);

  const presenceLocations: OfficeLocation[] = [
    {
      name: "Albany, USA",
      type: "Corporate Office HQ",
      role: "corporate",
      details: "Central governance, compliance auditing, and North American distribution affairs.",
      coords: { left: "24.8%", top: "36.5%" },
    },
    {
      name: "Sanand, Ahmedabad, India",
      type: "Research HQ",
      role: "research",
      details: "Leading molecular drug design, bio-equivalence studies, and sterile formulation trials.",
      coords: { left: "63.8%", top: "46.5%" },
    },
    {
      name: "Cardiff, United Kingdom",
      type: "Regional Logistics Hub",
      role: "logistics",
      details: "Managing European cold-chain storage and supply dispatch routes.",
      coords: { left: "44.5%", top: "32%" },
    },
    {
      name: "Lucerne, Switzerland",
      type: "Regulatory & Compliance",
      role: "regulatory",
      details: "Liaising with EMA and Swissmedic for biological trial safety approvals.",
      coords: { left: "46.5%", top: "34.5%" },
    },
    {
      name: "Saly, Senegal",
      type: "West Africa Dispatch Center",
      role: "logistics",
      details: "Providing local storage and logistics for immunization projects across ECOWAS.",
      coords: { left: "40.5%", top: "51.5%" },
    },
    {
      name: "Perth, Australia",
      type: "Asia-Pacific Offices",
      role: "regulatory",
      details: "Procurement, licensing, and supply liaison for Oceania healthcare partners.",
      coords: { left: "81.5%", top: "76.5%" },
    },
    {
      name: "Hebron, Israel",
      type: "Regional Support & QA",
      role: "regulatory",
      details: "Quality assurance audits and medical product safety documentation.",
      coords: { left: "53.5%", top: "41.5%" },
    },
  ];

  const liveFeed = [
    { id: 1, text: "Active Cold-Chain Dispatch: 14 Shipments", icon: Truck, status: "ok" },
    { id: 2, text: "Clinical Trial Validation: Sanand Phase II", icon: FlaskConical, status: "active" },
    { id: 3, text: "FDA Regulatory Clearance: Albany Hub", icon: ShieldCheck, status: "ok" },
    { id: 4, text: "ECOWAS Distribution Active via Senegal", icon: Globe, status: "active" },
  ];

  const getPinIcon = (role: string) => {
    switch (role) {
      case "corporate":
        return <Building2 className="w-3 h-3 sm:w-4 sm:h-4 text-white" />;
      case "research":
        return <FlaskConical className="w-3 h-3 sm:w-4 sm:h-4 text-white" />;
      case "logistics":
        return <Truck className="w-3 h-3 sm:w-4 sm:h-4 text-white" />;
      default:
        return <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-white" />;
    }
  };

  const getPinBg = (role: string) => {
    switch (role) {
      case "corporate":
        return "bg-primary shadow-primary/30 ring-primary/20";
      case "research":
        return "bg-teal-accent shadow-teal-accent/30 ring-teal-accent/20";
      case "logistics":
        return "bg-amber-600 shadow-amber-600/30 ring-amber-600/20";
      default:
        return "bg-indigo-600 shadow-indigo-600/30 ring-indigo-600/20";
    }
  };

  return (
    <section id="global-map" className="py-32 bg-slate-50 relative overflow-hidden border-b border-slate-100">
      <div className="absolute inset-0 bg-dot-grid opacity-30 select-none pointer-events-none" />
      
      <Container>
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary mb-3 bg-primary-light px-3.5 py-1.5 rounded-full">
            Global Networks
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            NovaCure Logistics & Supply Telemetry
          </h2>
          <p className="text-slate-500 text-sm mt-4 font-medium leading-relaxed">
            Monitor our operational facilities, regulatory liaison stations, and active biological logistics pathways globally.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="bg-slate-200/60 p-1.5 rounded-full flex items-center gap-1.5 shadow-inner border border-slate-350/20 backdrop-blur-md">
            <button
              onClick={() => setActiveView("presence")}
              className={`px-6 py-3 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeView === "presence"
                  ? "bg-white text-slate-950 shadow-md"
                  : "text-slate-500 hover:text-slate-950"
              }`}
            >
              <Building2 className="w-4 h-4" />
              Corporate & Research Presence
            </button>
            <button
              onClick={() => setActiveView("supply")}
              className={`px-6 py-3 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeView === "supply"
                  ? "bg-white text-slate-950 shadow-md"
                  : "text-slate-500 hover:text-slate-950"
              }`}
            >
              <Globe className="w-4 h-4" />
              Product Supply Network
            </button>
          </div>
        </div>

        {/* Dashboard Panels Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Main Map Box (col-span-9) */}
          <div className="lg:col-span-9 relative rounded-[32px] bg-slate-900 border border-slate-800 p-4 sm:p-8 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[350px] sm:min-h-[480px]">
            {/* SVG styling rules for dark theme */}
            <style dangerouslySetInnerHTML={{
              __html: `
                #world-map-container svg {
                  width: 100%;
                  height: auto;
                  opacity: 0.25;
                }
                #world-map-container svg path {
                  fill: #334155;
                  stroke: #1e293b;
                  stroke-width: 0.7px;
                  transition: fill 0.4s ease, stroke 0.4s ease;
                }
                #world-map-container svg path:hover {
                  fill: #475569;
                }
                
                /* Supply countries glows */
                ${activeView === "supply" ? `
                  #world-map-container svg path[id="us"],
                  #world-map-container svg path[id="in"],
                  #world-map-container svg path[id="gb"],
                  #world-map-container svg path[id="ch"],
                  #world-map-container svg path[id="sn"],
                  #world-map-container svg path[id="au"],
                  #world-map-container svg path[id="il"],
                  #world-map-container svg path[id="ca"],
                  #world-map-container svg path[id="de"],
                  #world-map-container svg path[id="fr"],
                  #world-map-container svg path[id="jp"],
                  #world-map-container svg path[id="za"],
                  #world-map-container svg path[id="br"],
                  #world-map-container svg path[id="mx"],
                  #world-map-container svg path[id="ar"],
                  #world-map-container svg path[id="sa"],
                  #world-map-container svg path[id="ae"],
                  #world-map-container svg path[id="sg"],
                  #world-map-container svg path[id="kr"],
                  #world-map-container svg path[id="nz"],
                  #world-map-container svg path[id="eg"],
                  #world-map-container svg path[id="ke"],
                  #world-map-container svg path[id="co"],
                  #world-map-container svg path[id="cl"],
                  #world-map-container svg path[id="th"],
                  #world-map-container svg path[id="vn"],
                  #world-map-container svg path[id="my"],
                  #world-map-container svg path[id="ph"],
                  #world-map-container svg path[id="id"],
                  #world-map-container svg path[id="tr"],
                  #world-map-container svg path[id="pl"],
                  #world-map-container svg path[id="se"] {
                    fill: #134e4a !important;
                    stroke: #0d9488 !important;
                    stroke-width: 0.8px;
                  }
                ` : ""}

                /* Presence highlight */
                ${activeView === "presence" ? `
                  #world-map-container svg path[id="us"],
                  #world-map-container svg path[id="in"],
                  #world-map-container svg path[id="gb"],
                  #world-map-container svg path[id="ch"],
                  #world-map-container svg path[id="sn"],
                  #world-map-container svg path[id="au"],
                  #world-map-container svg path[id="il"] {
                    fill: #1e3a8a !important;
                    stroke: #0a66c2 !important;
                    stroke-width: 0.8px;
                  }
                ` : ""}

                /* Dash flow keyframes */
                @keyframes dashflow {
                  to { stroke-dashoffset: -40; }
                }
                .dash-route {
                  stroke-dasharray: 6 4;
                  animation: dashflow 4s linear infinite;
                }
              `
            }} />

            {/* Map Canvas - scales automatically to viewport with NO horizontal scroll */}
            <div className="relative w-full flex-1 flex items-center justify-center py-4">
              <div className="relative w-full">
                {/* SVG Dotted / Outline map */}
                <div
                  id="world-map-container"
                  className="w-full relative select-none pointer-events-none"
                  dangerouslySetInnerHTML={{ __html: svgText }}
                />

                {/* Vector Curved Routes (Overlay) */}
                {activeView === "presence" && (
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-15" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Albany -> Cardiff */}
                    <path d="M 24.8,36.5 Q 34.65,29.25 44.5,32" fill="none" stroke="rgba(10, 102, 194, 0.4)" strokeWidth="0.25" />
                    <path d="M 24.8,36.5 Q 34.65,29.25 44.5,32" fill="none" stroke="#0A66C2" strokeWidth="0.35" className="dash-route" />

                    {/* Albany -> Lucerne */}
                    <path d="M 24.8,36.5 Q 35.65,30.5 46.5,34.5" fill="none" stroke="rgba(10, 102, 194, 0.4)" strokeWidth="0.25" />
                    <path d="M 24.8,36.5 Q 35.65,30.5 46.5,34.5" fill="none" stroke="#0A66C2" strokeWidth="0.35" className="dash-route" />

                    {/* Albany -> Saly */}
                    <path d="M 24.8,36.5 Q 32.65,40 40.5,51.5" fill="none" stroke="rgba(10, 102, 194, 0.4)" strokeWidth="0.25" />
                    <path d="M 24.8,36.5 Q 32.65,40 40.5,51.5" fill="none" stroke="#0A66C2" strokeWidth="0.35" className="dash-route" />

                    {/* Albany -> Ahmedabad */}
                    <path d="M 24.8,36.5 Q 44.3,33.5 63.8,46.5" fill="none" stroke="rgba(10, 102, 194, 0.4)" strokeWidth="0.25" />
                    <path d="M 24.8,36.5 Q 44.3,33.5 63.8,46.5" fill="none" stroke="#0A66C2" strokeWidth="0.35" className="dash-route" />

                    {/* Ahmedabad -> Perth */}
                    <path d="M 63.8,46.5 Q 72.65,55 81.5,76.5" fill="none" stroke="rgba(13, 148, 136, 0.4)" strokeWidth="0.25" />
                    <path d="M 63.8,46.5 Q 72.65,55 81.5,76.5" fill="none" stroke="#0D9488" strokeWidth="0.35" className="dash-route" />

                    {/* Ahmedabad -> Hebron */}
                    <path d="M 63.8,46.5 Q 58.65,40 53.5,41.5" fill="none" stroke="rgba(13, 148, 136, 0.4)" strokeWidth="0.25" />
                    <path d="M 63.8,46.5 Q 58.65,40 53.5,41.5" fill="none" stroke="#0D9488" strokeWidth="0.35" className="dash-route" />
                  </svg>
                )}

                {/* Pins - scaled down with ring-2 on mobile */}
                <AnimatePresence>
                  {activeView === "presence" &&
                    presenceLocations.map((pin) => (
                      <div
                        key={pin.name}
                        className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                        style={{ left: pin.coords.left, top: pin.coords.top }}
                        onMouseEnter={() => setHoveredPin(pin)}
                        onMouseLeave={() => setHoveredPin(null)}
                        onClick={() => setHoveredPin(hoveredPin?.name === pin.name ? null : pin)}
                      >
                        <div className="relative flex items-center justify-center">
                          <span className={`absolute inline-flex h-6 w-6 sm:h-8 sm:w-8 rounded-full opacity-50 animate-ping ${
                            pin.role === "corporate" ? "bg-primary" : pin.role === "research" ? "bg-teal-accent" : "bg-amber-500"
                          }`} />
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className={`w-5 h-5 sm:w-6.5 sm:h-6.5 rounded-full flex items-center justify-center shadow-lg border border-slate-800 ring-2 sm:ring-4 ${getPinBg(
                              pin.role
                            )}`}
                          >
                            {getPinIcon(pin.role)}
                          </motion.div>
                        </div>
                      </div>
                    ))}
                </AnimatePresence>

                {/* Tooltip Popup - Centers absolutely on mobile using screen checks */}
                <AnimatePresence>
                  {activeView === "presence" && hoveredPin && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className={`absolute z-35 p-5 rounded-2xl glass-panel-dark shadow-2xl border border-white/5 w-[85%] sm:w-72 md:w-80 pointer-events-auto ${
                        isMobile 
                          ? "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" 
                          : ""
                      }`}
                      style={
                        isMobile
                          ? {}
                          : {
                              left: `calc(${hoveredPin.coords.left} + 16px)`,
                              top: `calc(${hoveredPin.coords.top} - 100px)`,
                            }
                      }
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-teal-accent" />
                          <h4 className="text-sm font-extrabold text-white">{hoveredPin.name}</h4>
                        </div>
                        {isMobile && (
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setHoveredPin(null);
                            }}
                            className="text-slate-400 hover:text-white text-xs font-bold px-1.5 py-0.5 rounded bg-white/5 border border-white/10 cursor-pointer"
                          >
                            Close
                          </button>
                        )}
                      </div>
                      <div className="mb-2.5">
                        <span className="text-[9.5px] font-extrabold uppercase tracking-widest text-teal-accent bg-teal-accent/10 border border-teal-accent/20 px-2 py-0.5 rounded">
                          {hoveredPin.type}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-bold leading-normal">
                        {hoveredPin.details}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Map Legend - Stacked below map on mobile, absolute on desktop */}
            <div className="mt-4 lg:mt-0 lg:absolute lg:bottom-6 lg:left-6 z-10 w-full lg:w-auto lg:max-w-[200px] p-4 bg-slate-950/80 backdrop-blur-md rounded-2xl border border-slate-800 shadow-xl flex flex-col gap-2">
              <p className="text-[8px] sm:text-[9px] font-extrabold text-slate-550 uppercase tracking-widest text-center lg:text-left">Network Codes</p>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 text-[9.5px] sm:text-[10.5px] font-bold text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>Corporate HQ</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-teal-accent shrink-0" />
                  <span>Research HQ</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0" />
                  <span>Logistics Hubs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-600 shrink-0" />
                  <span>Regulatory Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Logistics Telemetry Feed Panel (col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-6 items-stretch">
            
            {/* Live Telemetry Ticker */}
            <div className="rounded-[24px] bg-slate-900 border border-slate-800 p-6 flex flex-col gap-4 text-white shadow-lg">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-teal-accent animate-pulse" />
                  Live Telemetry
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <div className="flex flex-col gap-4">
                {liveFeed.map((feed) => {
                  const Icon = feed.icon;
                  return (
                    <div key={feed.id} className="flex gap-3.5 items-start">
                      <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700/60 flex items-center justify-center text-teal-accent shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[11.5px] font-bold leading-normal text-slate-300">
                          {feed.text}
                        </p>
                        <p className="text-[9px] font-extrabold text-slate-500 uppercase tracking-widest mt-0.5">
                          Status: Active
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Logistics Summary Info */}
            <div className="rounded-[24px] bg-white border border-slate-200/40 p-6 flex flex-col gap-3 shadow-sm flex-1 justify-center">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                Supply Summary
              </span>
              <div>
                <p className="text-3xl font-extrabold text-slate-950 tracking-tight leading-none">25+</p>
                <p className="text-[11px] font-bold text-slate-500 mt-1">Countries Exported</p>
              </div>
              <div className="pt-3 border-t border-slate-100">
                <p className="text-3xl font-extrabold text-slate-950 tracking-tight leading-none">100%</p>
                <p className="text-[11px] font-bold text-slate-500 mt-1">Cold-Chain Compliant</p>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
