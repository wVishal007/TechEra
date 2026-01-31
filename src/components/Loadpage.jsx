import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.jpg";

export default function Loadpage() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 3000),  // "Welcome To" (4s)
      setTimeout(() => setStep(2), 7000),  // Logo (4s)
      setTimeout(() => setStep(3), 9000), // Final animation (2s)
    ];
    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <div className="flex items-center justify-center w-screen h-screen 
      bg-gradient-to-br from-black via-gray-900 to-black text-white 
      overflow-hidden relative">

      {/* Soft Background Glow */}
      <div className="absolute w-[600px] h-[600px] 
        bg-purple-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>

      <AnimatePresence mode="wait">

        {/* STEP 0: Welcome To (4s) */}
        {step === 0 && (
          <motion.h1
            key="welcome-text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 1.4 }}
            className="text-6xl md:text-8xl font-extrabold 
            bg-gradient-to-r from-blue-300 via-white to-purple-300
            text-transparent bg-clip-text"
          >
            Welcome To TechEra
          </motion.h1>
        )}

        {/* STEP 1: Logo (4s) */}
        {step === 1 && (
          <motion.img
            key="logo"
            src={logo}
            alt="Techera Logo"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 2 }}
            transition={{ duration: 2.4 }}
            className="w-52 md:w-72 rounded-2xl 
            drop-shadow-[0_0_40px_rgba(200,200,255,0.7)]"
          />
        )}

        {/* STEP 2: Final 2-second Cool Effect */}
        {step === 2 && (
          <motion.div
            key="final"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="text-6xl md:text-8xl font-extrabold 
            bg-gradient-to-r from-purple-400 via-white to-blue-400 
            text-transparent bg-clip-text drop-shadow-[0_0_40px_white]"
          >
            ✨ Techera ✨
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
