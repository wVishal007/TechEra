import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import logo from "../assets/logo.jpg";
import Card from "../components/additional/FlipCard";
import Navbar from "../components/Navbar";
import MemberDisplay from '../components/additional/MembersDisplay'

const details = [
  { name: "Aditya", post: "Founder", image: "https://picsum.photos/200?random=1" },
  { name: "Random", post: "Co-Founder", image: "https://picsum.photos/200?random=2" },
  { name: "Random2", post: "Co-Founder", image: "https://picsum.photos/200?random=3" },
];

const Home = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      roughness: 0.2,
      metalness: 0.8,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.01;
      sphere.rotation.x += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
  <div className="relative min-h-screen pt-24 overflow-hidden">

    {/* THREE.js Background */}
    <div ref={mountRef} className="absolute inset-0 -z-10 opacity-70"></div>
    <div className="relative z-10 flex flex-col items-center w-full text-white">

      {/* HERO SECTION */}
      <div className="flex flex-col md:flex-row-reverse justify-between items-center w-full max-w-7xl px-8 md:px-16 mt-10">

        {/* LEFT SIDE – LOGO + TITLE */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left gap-3">

          <img
            src={logo}
            alt="logo"
            className="w-32 h-32 rounded-full shadow-xl border border-cyan-400 animate-pulse"
          />

          <h1 className="text-6xl font-extrabold tracking-wide drop-shadow-[0_0_20px_#00eaff]">
            TechEra
          </h1>

          <p className="text-lg text-cyan-200 opacity-80">
            Empowering Tech. Empowering Community.
          </p>
        </div>

        {/* RIGHT SIDE – MEMBER COUNTER */}
        <div className="mt-10 md:mt-0">
          <MemberDisplay number="1000" />
        </div>

      </div>

      {/* CARD SECTION */}
      <div className="w-full max-w-6xl mt-20">
        <h2 className="text-3xl font-bold text-cyan-300 text-center mb-10 drop-shadow-[0_0_10px_#00eaff]">
          Our Leadership Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 mb-4 md:grid-cols-3 gap-10 justify-items-center">
          {details.map((person, idx) => (
            <Card key={idx} data={person} />
          ))}
        </div>
      </div>

    </div>
  </div>
);
;
};

export default Home;
