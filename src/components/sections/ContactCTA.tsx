"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function ContactCTA() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: Phone, text: "+1 (800) 555-0199", label: "Client Support Toll-Free" },
    { icon: Mail, text: "partnership@novacurepharma.com", label: "B2B & Distribution Queries" },
    { icon: MapPin, text: "75 Broad St, New York, NY 10004", label: "Research HQ & Corporate Office" },
  ];

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden relative">
      {/* Background Decorative Accents */}
      <div className="absolute top-[10%] right-[-10%] w-[35rem] h-[35rem] bg-primary-light rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[25rem] h-[25rem] bg-teal-light rounded-full blur-3xl opacity-50 pointer-events-none" />

      <Container className="relative z-10">
        <div className="bg-slate-900 text-white rounded-[32px] overflow-hidden shadow-2xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 sm:p-12 lg:p-16">
            
            {/* Left Column - Context & Coordinates */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-accent mb-3 bg-teal-accent/10 border border-teal-accent/20 px-3.5 py-1.5 rounded-full inline-block">
                  Connect With Us
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4">
                  Partner with NovaCure for Global Health Solutions
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-lg">
                  Whether you are a clinical pharmacy chain, global logistics broker, or research university, we are equipped to support your therapeutic product pipelines.
                </p>
              </div>

              {/* Contact Details List */}
              <div className="flex flex-col gap-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.text} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-teal-accent shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-400">{info.label}</p>
                        <p className="text-sm font-bold text-white mt-0.5">{info.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-6">
              <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.form
                      key="contact-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-5"
                    >
                      <h3 className="text-lg font-bold text-white mb-2">Request Partnership Proposal</h3>
                      
                      {/* Name Input */}
                      <div>
                        <label htmlFor="name" className="text-xs font-bold text-slate-300 block mb-1.5">
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
                          className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-accent focus:ring-1 focus:ring-teal-accent transition-colors"
                        />
                      </div>

                      {/* Email Input */}
                      <div>
                        <label htmlFor="email" className="text-xs font-bold text-slate-300 block mb-1.5">
                          Work Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john.doe@hospital.org"
                          className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-accent focus:ring-1 focus:ring-teal-accent transition-colors"
                        />
                      </div>

                      {/* Message Input */}
                      <div>
                        <label htmlFor="message" className="text-xs font-bold text-slate-300 block mb-1.5">
                          How Can We Help You?
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          placeholder="Describe your pharmaceutical distribution or procurement requirements..."
                          className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-accent focus:ring-1 focus:ring-teal-accent transition-colors resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <Button variant="secondary" className="w-full gap-2 mt-2" type="submit">
                        Send Message <Send className="w-4 h-4" />
                      </Button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-message"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully</h3>
                      <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
                        Thank you for reaching out. A corporate representative from our partnership team will contact you within 24 hours.
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
