import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { eventsData } from "../data/EventData";

const Events = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");

  const categories = ["all", "hackathons", "collabs", "workshops"];

  const filteredEvents =
    filter === "all"
      ? eventsData
      : eventsData.filter((e) => e.category === filter);

  return (
    <div className="min-h-screen w-full text-white px-4 md:px-10 py-10">

      {/* HERO */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
          Community Events & Highlights
        </h1>
        <p className="mt-3 text-lg opacity-80">
          Stay updated with upcoming hackathons, collabs, workshops & community achievements!
        </p>
      </div>

      {/* FILTER NAV */}
      <div className="flex justify-center gap-4 md:gap-8 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition
              ${filter === cat ? "bg-white text-black" : "bg-white/20 backdrop-blur-md"}`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* EVENTS LIST */}
      <h2 className="text-3xl font-semibold mb-6">Events</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            onClick={() => navigate(`/events/${event.id}`)}
            className="cursor-pointer bg-white/10 rounded-2xl p-4 backdrop-blur-md shadow-lg hover:scale-[1.03] transition"
          >
            <img
              src={event.img}
              alt={event.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold">{event.title}</h3>
            <p className="text-sm opacity-70">{event.date}</p>
            <p className="mt-2 opacity-80 text-sm">{event.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
