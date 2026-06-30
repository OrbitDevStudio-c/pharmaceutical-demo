"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "glass";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer active:scale-95";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg shadow-primary/10",
    secondary: "bg-teal-accent text-white hover:bg-teal-dark shadow-md hover:shadow-lg shadow-teal-accent/10",
    outline: "border border-slate-300 text-slate-700 bg-transparent hover:bg-slate-50 hover:border-slate-400",
    glass: "glass text-slate-800 hover:bg-white/80 shadow-sm border-white/60",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
