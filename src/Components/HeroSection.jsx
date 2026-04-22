import React from "react";
import { Link } from "react-router-dom";
import herobg from "../assets/Images/Herobg/Herobg.jpg";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">

      {/* Background Image */}
      <img
        src={herobg}
        alt="AlNahda Walimran Alkhaleejia Company Holding"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/70 to-black/40" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-20 max-w-5xl text-white">

        {/* Company Name */}
        <p className="uppercase tracking-widest text-sm text-[#857333] font-semibold mb-3">
          AlNahda Walimran Alkhaleejia
        </p>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Company Holding
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
          Delivering integrated solutions across construction, infrastructure,
          IT, and industrial sectors with a commitment to quality, innovation,
          and long-term partnerships aligned with Vision 2030.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-10">

          <Link
            to="/ourprojects"
            className="px-7 py-3 bg-[#857333] hover:bg-[#857333] rounded-lg font-medium transition shadow-lg"
          >
            Explore Projects
          </Link>

          <Link
            to="/services"
            className="px-7 py-3 border border-white/30 hover:bg-white/10 rounded-lg transition hover:border-[#857333] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#857333]"
          >
            Our Services
          </Link>

        </div>

        {/* Key Highlights */}
        <div className="flex flex-wrap gap-10 text-sm text-gray-300">

          <div>
            <h3 className="text-xl font-bold text-white">2018</h3>
            <p>Established</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white">6+</h3>
            <p>Business Sectors</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white">Global</h3>
            <p>Operations</p>
          </div>

        </div>

      </div>

      {/* Subtle Bottom Fade */}
      <div className="absolute bottom-0 w-full h-24 bg-linear-to-t from-black/80 to-transparent" />

    </section>
  );
}