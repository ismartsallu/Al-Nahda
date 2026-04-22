import { useState } from "react";
import Hero from "../Components/Hero";
import { projects } from "../Components/Data";
import { useNavigate } from "react-router-dom";
import fiximg1 from "../assets/Images/projects/fiximg1.jpg";
import herobg from "../assets/Images/projects/herobg.jpg";
import ImageOverlaySection from "../Components/ImageOverlaySection";

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(projects[0] || {});
  const navigate = useNavigate();

  return (
    <section className="bg-white text-[#085733]">

      {/* HERO */}
      <Hero
        title="Projects"
        subtitle="Delivering measurable impact through strategic execution."
        backgroundImage={herobg}
      />

      {/* BIG STATEMENT */}
      <section className="max-w-5xl mx-auto px-6 py-28">
        <h1 className="text-[#085733] text-4xl md:text-6xl font-semibold leading-tight">
          We execute high-impact projects across industries,
          delivering scalable infrastructure and operational excellence.
        </h1>
      </section>

      {/* PROJECT NAV + DETAIL */}
      <section className="max-w-7xl mx-auto px-6 pb-28 grid md:grid-cols-2 gap-16">

        {/* LEFT LIST */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setActiveProject(project)}
              className={`cursor-pointer border-b pb-6 transition ${activeProject.name === project.name
                ? "text-[#857333]"
                : "text-[#085733]"
                }`}
            >
              <h3 className="text-xl font-medium">
                {project.name}
              </h3>
              <p className="text-gray-500 mt-1 text-sm">
                {project.category}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT DETAIL PANEL */}
        <div className="sticky top-32 h-fit">
          <div className="space-y-6">

            {/* Image */}
            <img
              src={activeProject.image}
              alt={activeProject.name}
              className="w-full h-80 object-cover rounded-xl"
            />

            {/* Content */}
            <div>
              <h2 className="text-3xl font-semibold mb-4">
                {activeProject.name}
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                {activeProject.details}
              </p>

              {/* Highlights */}
              {activeProject.highlights && (
                <ul className="space-y-3 mb-6">
                  {activeProject.highlights.map((item, i) => (
                    <li key={i} className="border-b pb-2 text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              <button
                onClick={() => navigate("/contact")}
                className="text-[#857333] font-semibold hover:underline"
              >
                Get in Touch →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 text-[#085733]">
          <h2 className="text-3xl md:text-4xl font-semibold mb-28">
            Our Project Approach
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              {
                title: "Planning",
                desc: "Detailed project analysis and feasibility study",
              },
              {
                title: "Execution",
                desc: "Efficient and timely implementation",
              },
              {
                title: "Quality Control",
                desc: "Strict compliance with industry standards",
              },
              {
                title: "Delivery",
                desc: "On-time completion with client satisfaction",
              },
            ].map((step, i) => (
              <div key={i}>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL WIDTH IMAGE BREAK */}
      <ImageOverlaySection image={fiximg1} />

      {/* WHY CHOOSE US */}
      <section className="w-full px-6 py-28">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-16">
            Why Clients Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Proven Execution",
                desc: "Track record of delivering complex projects successfully",
              },
              {
                title: "Integrated Solutions",
                desc: "End-to-end services across multiple industries",
              },
              {
                title: "Quality & Compliance",
                desc: "Adherence to international standards and safety",
              },
              {
                title: "Skilled Workforce",
                desc: "Experienced professionals and technical experts",
              },
              {
                title: "Scalable Operations",
                desc: "Capability to handle projects of any scale",
              },
              {
                title: "Client-Centric Approach",
                desc: "Focused on long-term partnerships and value",
              },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT IMPACT (MINIMAL STATS) */}
      <section className="max-w-5xl mx-auto px-6 py-28 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {[
          { value: "50+", label: "Projects Delivered" },
          { value: "10+", label: "Industries" },
          { value: "5+", label: "Countries" },
          { value: "100%", label: "Client Satisfaction" },
        ].map((stat, i) => (
          <div key={i}>
            <h3 className="text-3xl md:text-4xl font-semibold">
              {stat.value}
            </h3>
            <p className="text-gray-500 mt-2">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="text-[#085733] py-28">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Expanding Across Regions
          </h2>

          <p className="text-gray-600 max-w-2xl">
            Delivering projects across multiple regions with a focus on scalability,
            innovation, and long-term impact.
          </p>

          <div className="mt-12 flex justify-start gap-10 text-lg font-medium">
            <span>KSA</span>
            <span>UAE</span>
            <span>India</span>
            <span>Global Markets</span>
          </div>
        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="max-w-4xl mx-auto px-6 py-28 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-[#085733]">
          Transforming ideas into impactful, scalable solutions.
        </h2>
      </section>

    </section>
  );
}