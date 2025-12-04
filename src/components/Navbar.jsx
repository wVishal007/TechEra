import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // const links = ["Home", "Events", "Team", "Contact"];
  const links = [
    {name:"Home",link:""},
    {name:"Events",link:"events"},
    {name:"Team",link:"team"},
    {name:"Contact Us",link:"contact"}
  ];
  const navigate = useNavigate()

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-cyan-500/20 px-6 py-3 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 rounded-full border border-cyan-400 shadow-[0_0_10px_#00eaff]"
          />
          <h1 className="text-2xl font-bold text-cyan-300 tracking-wide">
            TECHERA
          </h1>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-10 text-white font-medium">
          {links.map((link, i) => (
            <button
              key={i}
              onClick={()=>navigate(`/${link.link}`)}
              className="hover:text-cyan-400 transition-all duration-300"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* HAMBURGER ICON */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* DARK OVERLAY WHEN SIDEBAR IS OPEN */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black border-l border-cyan-500/20 transition-transform duration-500 z-50
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-5 flex justify-between items-center border-b border-cyan-500/20">
          <h2 className="text-xl text-cyan-300 font-bold">Menu</h2>
          <button onClick={() => setOpen(false)} className="text-white">
            <X size={28} />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col text-white text-lg gap-6 p-6">
          {links.map((link, i) => (
            <li
              key={i}
              className="hover:text-cyan-400 transition-all cursor-pointer"
               onClick={()=>{
                setOpen(false)
                navigate(`/${link.link}`)
              }}
              // onClick={() => setOpen(false)}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
