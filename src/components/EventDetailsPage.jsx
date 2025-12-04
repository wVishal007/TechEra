import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { eventsData } from "../data/EventData";

const EventDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = eventsData.find((e) => e.id === Number(id));

  if (!event) return <div className="text-white p-10">Event not found</div>;

  return (
    <div className="min-h-screen text-white px-6 md:px-20 py-10">

      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-white/20 rounded-lg backdrop-blur-md hover:bg-white/30"
      >
        ← Back
      </button>

      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
        <img
          src={event.img}
          alt={event.title}
          className="w-full h-72 object-cover rounded-xl mb-6"
        />

        <h1 className="text-4xl font-bold">{event.title}</h1>
        <p className="mt-2 opacity-70">{event.date}</p>

        <p className="mt-6 text-lg opacity-90 leading-relaxed">
          {event.longDesc}
        </p>
      </div>
    </div>
  );
};

export default EventDetailsPage;
