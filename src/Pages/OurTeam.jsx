import Hero from "../Components/Hero";
import teamHeroBg from "../assets/Images/team/herobg.jpg";
import fiximg1 from "../assets/Images/team/1.jpg";
import { useState, useRef } from "react";
import ImageOverlaySection from "../Components/ImageOverlaySection";


const leadership = [
  { name: "Abdullah Tariq", role: "Chief Executive Officer", desc: "15+ years of driving global expansion and corporate strategy." },
  { name: "Fatima Ali", role: "Chief Operations Officer", desc: "Expert in operational excellence and scalable infrastructure." },
  { name: "Omar Farooq", role: "Chief Financial Officer", desc: "Overseeing financial stability and sustainable growth." }
];

const coreTeam = [
  { name: "Zainab Hassan", role: "Head of Engineering" },
  { name: "Bilal Ahmed", role: "Lead Product Designer" },
  { name: "Sarah Khan", role: "Marketing Director" },
  { name: "Usman Raza", role: "Senior Developer" },
  { name: "Ayesha Noor", role: "HR Manager" },
  { name: "Hassan Mahmud", role: "Project Manager" }
];

export default function OurTeam() {
    const [open, setOpen] = useState(false);
  const form = useRef();


  return (
    <div className="">
      {/* HERO */}
      <Hero
        title="Our Team"
        subtitle="Engage with a dedicated team committed to delivering excellence across every project."
        backgroundImage={teamHeroBg}
      />

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-white">
        <h1 className="text-5xl font-bold mb-4 text-[#085733]">Meet the Minds Behind Our Success</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are a group of passionate individuals working together to build amazing products.
        </p>
      </section>

      {/* 2. Leadership Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 text-[#085733]">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Leadership Team</h2>
          <p className="text-gray-500 mt-2">Guiding our vision and global strategy.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {leadership.map((leader, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl text-center hover:shadow-md transition-shadow">
              <div className="w-32 h-32 rounded-full bg-blue-50 text-[#085733] flex items-center justify-center text-4xl font-bold mx-auto mb-6">
                {leader.name.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold">{leader.name}</h3>
              <p className="text-[#085733] font-medium text-sm mb-4">{leader.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{leader.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <ImageOverlaySection image={fiximg1} />

      {/* 3. Core Team Section */}
      <section className="text-[#085733] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Core Professionals</h2>
            <p className="text-gray-600 mt-2">The dedicated experts who make things happen every day.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {coreTeam.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl hover:shadow-md text-center flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-[#085733] flex items-center justify-center text-2xl font-bold mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 text-[#085733]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {["50+ Projects", "20+ Members", "10+ Awards", "5+ Years Exp"].map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl shadow">
              <h2 className="text-2xl font-bold">{stat}</h2>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 text-[#085733]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Innovation", "Teamwork", "Integrity"].map((value, i) => (
              <div key={i} className="p-6 rounded-2xl">
                <h3 className="text-xl font-semibold">{value}</h3>
                <p className="text-gray-500 mt-2">We believe strongly in {value.toLowerCase()} to drive success.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
