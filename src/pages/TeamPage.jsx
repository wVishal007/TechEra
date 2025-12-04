import React, { useState } from "react";

const departments = [
  {
    id: "technical",
    name: "Technical",
    lead: {
      name: "Aditya Kumar",
      role: "Technical Lead",
      img: "https://i.ibb.co/2t0VSkM/profile1.jpg",
    },
    coLead: {
      name: "Sarthak Gupta",
      role: "Technical Co-Lead",
      img: "https://i.ibb.co/wzVJTwM/profile2.jpg",
    },
  },
  {
    id: "video",
    name: "Video Editing",
    lead: {
      name: "Rahul Sharma",
      role: "Video Editing Lead",
      img: "https://i.ibb.co/ZH0CFP9/profile3.jpg",
    },
    coLead: {
      name: "Aman Verma",
      role: "Video Editing Co-Lead",
      img: "https://i.ibb.co/Hnv10bT/profile4.jpg",
    },
  },
  {
    id: "graphics",
    name: "Graphics Designing",
    lead: {
      name: "Neha Singh",
      role: "Graphics Lead",
      img: "https://i.ibb.co/y6XxGBS/profile5.jpg",
    },
    coLead: {
      name: "Harshit Mehra",
      role: "Graphics Co-Lead",
      img: "https://i.ibb.co/4mwD0CL/profile6.jpg",
    },
  },
  {
    id: "content",
    name: "Content Writing",
    lead: {
      name: "Isha Rana",
      role: "Content Lead",
      img: "https://i.ibb.co/m5GRVJr/profile7.jpg",
    },
    coLead: {
      name: "Shivam Kumar",
      role: "Content Co-Lead",
      img: "https://i.ibb.co/6HbsxT2/profile8.jpg",
    },
  },
  {
    id: "marketing",
    name: "Marketing",
    lead: {
      name: "Pooja Mehta",
      role: "Marketing Lead",
      img: "https://i.ibb.co/2PTkTxC/profile9.jpg",
    },
    coLead: {
      name: "Ayush Raj",
      role: "Marketing Co-Lead",
      img: "https://i.ibb.co/F6Jg9tY/profile10.jpg",
    },
  },
  {
    id: "management",
    name: "Event & Management",
    lead: {
      name: "Aditi Sharma",
      role: "Management Lead",
      img: "https://i.ibb.co/sHCcLpy/profile11.jpg",
    },
    coLead: {
      name: "Mohit Singh",
      role: "Management Co-Lead",
      img: "https://i.ibb.co/6bZF9qk/profile12.jpg",
    },
  },
];

// --------------------------------------------------------------

export default function TeamPage() {
  const [selected, setSelected] = useState("technical");

  const currentDept = departments.find((d) => d.id === selected);

  return (
    // <div className="min-h-screen text-white bg-gradient-to-b from-black via-gray-900 to-black">
    <div className="min-h-screen text-white">

      <div className="max-w-7xl mx-auto py-16 px-6">
        {/* Page Title */}
        <h1 className="text-center text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Meet Our Team 🚀
        </h1>

        {/* Department Selector */}
        <div className="mt-10 flex gap-4 overflow-x-auto pb-4 no-scrollbar justify-center flex-wrap">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setSelected(dept.id)}
              className={`px-6 py-2 rounded-full font-semibold border transition-all duration-300 ${
                selected === dept.id
                  ? "bg-blue-500 text-white border-blue-400 shadow-lg shadow-blue-400/40"
                  : "bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {dept.name}
            </button>
          ))}
        </div>

        {/* Lead + Co-Lead Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          {/* Lead */}
          <TeamCard
            title="Lead"
            person={currentDept.lead}
            color="from-cyan-400 to-blue-600"
          />

          {/* Co-Lead */}
          <TeamCard
            title="Co-Lead"
            person={currentDept.coLead}
            color="from-purple-400 to-pink-600"
          />
        </div>
      </div>
    </div>
  );
}

// --------------------------------------------------------------

function TeamCard({ title, person, color }) {
  return (
    <div className="bg-gray-800/40 p-8 rounded-2xl border border-gray-700 backdrop-blur-xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/30">
      <h2
        className={`text-center text-xl font-bold mb-6 bg-gradient-to-r ${color} bg-clip-text text-transparent`}
      >
        {title}
      </h2>

      <div className="flex flex-col items-center">
        <img
          src={person.img}
          alt={person.name}
          className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-blue-500/50 shadow-lg"
        />

        <p className="text-2xl font-semibold">{person.name}</p>
        <p className="text-gray-300 mt-1">{person.role}</p>
      </div>
    </div>
  );
}
