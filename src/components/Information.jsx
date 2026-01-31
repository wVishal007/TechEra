import React from "react";
import { motion } from "framer-motion";

const Section = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="w-full max-w-6xl p-6 my-10 rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl border border-cyan-400/30"
  >
    <h2 className="text-3xl font-bold text-cyan-300 mb-4 drop-shadow-[0_0_10px_#00eaff]">
      {title}
    </h2>
    <p className="text-gray-200 leading-relaxed whitespace-pre-line">
      {children}
    </p>
  </motion.div>
);

const Information = () => {
  return (
    <div className="min-h-screen w-full pt-28 pb-20 px-6 md:px-20 bg-gradient-to-b from-black via-[#00121f] to-black text-white overflow-x-hidden">

      {/* Page Header */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="text-6xl font-extrabold text-center text-cyan-300 mb-16 drop-shadow-[0_0_20px_#00eaff]"
      >
        About <span className="text-white">TechEra</span>
      </motion.h1>

      <div className="flex flex-col items-center">

        {/* SECTION 1 */}
        <Section title="⭐ TechEra – A Complete Student Community for Innovation, Creativity & Technology">
          {`Techera is more than a club—it is a dynamic, student-powered ecosystem designed to unleash the full potential of young innovators, creators, engineers, designers, gamers, artists, and curious minds.\n\nIt functions as a one-of-a-kind platform where academic learning meets real-world experience, imagination meets technology, and ideas evolve into impactful creations.\n\nTechera stands for inspiration, innovation, interaction, and impact.`}
        </Section>

        {/* Mission */}
        <Section title="🌟 Our Mission">
          {`Our mission is to make every student feel confident, capable, and inspired through engaging learning experiences.\n\nWe encourage innovative thinking, hands-on learning, collaboration, experimentation, and personal growth.`}
        </Section>

        {/* Pillars */}
        <Section title="⚙️ Our Core Pillars">
          {`1. Innovation\n2. Inclusivity\n3. Exploration\n4. Collaboration\n5. Leadership\n6. Creativity\n7. Growth\n\nThese pillars define everything we do.`}
        </Section>

        {/* What We Offer */}
        <Section title="💡 What We Offer">
          {`• Hackathons, coding contests, workshops, bootcamps\n• AI, ML, Web Dev, Robotics, Cybersecurity & IoT training\n• Innovation challenges, project showcases, technical events\n• Hands-on learning with real-world guidance`}
        </Section>

        {/* Entertainment */}
        <Section title="🎮 Entertainment & Creative Tech Events">
          {`• Esports tournaments\n• AR/VR experiences\n• Game development jams\n• Tech quizzes, creative exhibitions, DIY showcases`}
        </Section>

        {/* Skills */}
        <Section title="🧠 Skill Development Opportunities">
          {`Students build:\n• Technical expertise\n• Communication & leadership\n• Teamwork & management\n• Problem-solving & creativity\n• Real project experience`}
        </Section>

        {/* Community */}
        <Section title="🤝 Community & Networking">
          {`Techera builds a strong, friendly, and collaborative environment where students learn, grow, and succeed together.`}
        </Section>

        {/* Why Unique */}
        <Section title="🏆 Why Techera Stands Out">
          {`• Balanced focus on tech + creativity + leadership\n• Real exposure to industry practices\n• Opportunities for all skill levels\n• Safe, supportive, energetic culture`}
        </Section>

        {/* Who Can Join */}
        <Section title="👩‍🎓 Who Can Join?">
          {`Anyone! Beginners, coders, designers, gamers, creators, innovators.\nNo prior experience required—just passion.`}
        </Section>

        {/* Vision */}
        <Section title="🚀 Our Vision">
          {`To create a future-ready, technology-driven, creativity-powered platform that shapes confident innovators and leaders.`}
        </Section>

        {/* Future */}
        <Section title="🌐 Expanding Horizons – Our Future Vision">
          {`Techera connects students with global communities, modern tech, industry mentors, and worldwide opportunities.\n\nWe prepare students for a global stage.`}
        </Section>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-16 text-center"
        >
          <h2 className="text-4xl font-bold text-cyan-300 drop-shadow-[0_0_15px_#00eaff] mb-4">
            🌈 TechEra – The Student Era Begins Now
          </h2>
          <p className="text-gray-300 max-w-4xl">
            Techera empowers students to dream big, think creatively, work smart, collaborate globally, and achieve fearlessly.  
            <br />This is not just a club—it's a movement shaping the innovators of tomorrow.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Information;
