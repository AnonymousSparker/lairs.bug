"use client";

import { motion } from "framer-motion";

// Updated FadeIn to use 'animate' for immediate visibility on mount
// rather than relying solely on 'whileInView' which can sometimes lag on navigation.
export const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }} // Changed from whileInView to animate for reliable page loads
    transition={{ duration: 0.4, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SlideInLeft = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ type: "spring", stiffness: 300, damping: 20, delay }}
  >
    {children}
  </motion.div>
);

export const HoverCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.01 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    className={className}
  >
    {children}
  </motion.div>
);

// This component renders a motion.button. 
// Do NOT put another <button> inside this. Use it AS the button.
export const ClickScale = ({ children, onClick, className = "" }: { children: React.ReactNode, onClick?: () => void, className?: string }) => (
  <motion.button
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className={className}
  >
    {children}
  </motion.button>
);