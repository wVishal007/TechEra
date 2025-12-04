import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  const socials = [
    {
      id: 1,
      name: "WhatsApp",
      icon: <FaWhatsapp className="text-4xl text-green-400" />,
      link: "https://chat.whatsapp.com/L5i3gkwI7gSErhUivmShMO?mode=wwt",
      glow: "shadow-green-400/50",
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: <FaLinkedin className="text-4xl text-blue-400" />,
      link: "https://www.linkedin.com/company/techeraa/",
      glow: "shadow-blue-400/50",
    },
    {
      id: 3,
      name: "Instagram",
      icon: <FaInstagram className="text-4xl text-pink-400" />,
      link: "https://www.instagram.com/tech__eraa",
      glow: "shadow-pink-400/50",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black text-white">

      {/* ✨ Starfield background */}
      <div className="absolute inset-0 bg-[radial-gradient(white,transparent_1px)] bg-[size:20px_20px] opacity-10 animate-pulse" />

      {/* 🌠 Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg"
      >
        Connect with TechEra 🚀
      </motion.h1>

      {/* 🪐 Social Links */}
      <div className="flex gap-10 flex-wrap justify-center mb-10 z-10">
        {socials.map((social) => (
          <motion.a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
            className={`p-5 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-lg ${social.glow}`}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>

      {/* 🌍 Contact Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="text-center space-y-2 z-10"
      >
        <p className="text-lg text-gray-300">
          📞 Contact: <span className="text-white font-semibold">9310526618</span>
        </p>
        <p className="text-lg text-gray-300">
          📧 Email:{" "}
          <span className="text-white font-semibold">techeraa151@gmail.com</span>
        </p>
      </motion.div>

      {/* 🌌 Floating Glow Animation */}
      <motion.div
        className="absolute -z-10 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl animate-pulse"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 25, -25, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
