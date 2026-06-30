"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function ContactCTA() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Procurement",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", subject: "Procurement", message: "" });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: Phone, text: "+1 (800) 555-0199", label: "Client Support Toll-Free" },
    { icon: Mail, text: "partnership@novacurepharma.com", label: "B2B & Distribution Queries" },
    { icon: MapPin, text: "75 Broad St, New York, NY 10004", label: "Corporate Office HQ (Albany)" },
  ];

  return (
    <section id="contact" className="py-32 bg-white overflow-hidden relative">
      {/* Decorative gradient light layers */}
      <div className="absolute top-[10%] right-[-10%] w-[450px] h-[450px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] bg-teal-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-grid opacity-30 select-none pointer-events-none" />

      <Container className="relative z-10">
        <div className="bg-slate-950 text-white rounded-[40px] overflow-hidden shadow-2xl border border-slate-900 relative">
          {/* Subtle grid pattern inside */}
          <div className="absolute inset-0 bg-dot-grid-dark opacity-15 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 sm:p-12 lg:p-20 relative z-10">
            
            {/* Left Column - Details & Support stats */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-accent mb-4 bg-teal-accent/10 border border-teal-accent/20 px-3.5 py-1.5 rounded-full inline-block">
                  Corporate Partnership
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6">
                  Partner with NovaCure for Global Health Solutions
                </h2>
                <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8 max-w-lg">
                  Whether you represent a clinical pharmacy chain, healthcare agency, or pharmaceutical distributor, we are equipped to support your therapeutic product pipelines.
                </p>
              </div>

              {/* Contacts Coordinates */}
              <div className="flex flex-col gap-6 my-8">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.text} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-accent shrink-0 shadow-inner">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">{info.label}</p>
                        <p className="text-sm font-bold text-white mt-0.5">{info.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Compliance banner */}
              <div className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-2xl border border-slate-850 max-w-md">
                <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0" />
                <p className="text-[10.5px] text-slate-400 font-semibold leading-normal">
                  All submissions are encrypted and routed directly to our corporate compliance team under strict NDA guidelines.
                </p>
              </div>
            </div>

            {/* Right Column - Premium Form */}
            <div className="lg:col-span-6">
              <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-850 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.form
                      key="contact-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-6"
                    >
                      <div>
                        <h3 className="text-lg font-extrabold text-white">Request Partnership dossier</h3>
                        <p className="text-xs text-slate-500 mt-1 font-semibold">Please specify your credentials and requirements.</p>
                      </div>

                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Dr. John Doe"
                          className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-700 focus:outline-none focus:border-teal-accent focus:ring-1 focus:ring-teal-accent transition-colors shadow-inner"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block mb-2">
                          Corporate Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="j.doe@hospital.org"
                          className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-700 focus:outline-none focus:border-teal-accent focus:ring-1 focus:ring-teal-accent transition-colors shadow-inner"
                        />
                      </div>

                      {/* Selector */}
                      <div>
                        <label htmlFor="subject" className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block mb-2">
                          Subject of Interest
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-300 focus:outline-none focus:border-teal-accent focus:ring-1 focus:ring-teal-accent transition-colors shadow-inner appearance-none cursor-pointer"
                        >
                          <option value="Procurement">Bulk Medicine Procurement</option>
                          <option value="Research">Clinical Research Collaboration</option>
                          <option value="Regulatory">Regulatory Stability Data</option>
                          <option value="Support">Customer Relations & QA</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block mb-2">
                          Brief Requirements Description
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          placeholder="Outline dispatch countries and dosage requirements..."
                          className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-700 focus:outline-none focus:border-teal-accent focus:ring-1 focus:ring-teal-accent transition-colors resize-none shadow-inner"
                        />
                      </div>

                      {/* Button */}
                      <Button variant="secondary" className="w-full gap-2.5 font-bold mt-2 shadow-lg shadow-teal-accent/15" type="submit">
                        Submit Dossier Request <Send className="w-4 h-4" />
                      </Button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-message"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center text-center py-16"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-extrabold text-white mb-2">Dossier Request Sent</h3>
                      <p className="text-slate-400 text-xs font-semibold leading-relaxed max-w-xs">
                        Our corporate affairs department will respond with stability datasets and partnership documentation within 24 hours.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
