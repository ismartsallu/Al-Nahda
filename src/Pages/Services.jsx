import { useState } from "react";
import Hero from "../Components/Hero";
import { Data as servicesData } from "../Components/Data";
import ImageOverlaySection from "../Components/ImageOverlaySection";
import servicesHeroBg from "../assets/Images/Herobg/Services-herobg.jpg";
import fiximg1 from "../assets/Images/Services/fiximg1.jpg";


export default function Services() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="bg-white text-gray-900">

      {/* HERO */}
      <Hero
        title="Services"
        subtitle="Integrated solutions designed for scale and precision."
        backgroundImage={servicesHeroBg}
      />

      {/* BIG STATEMENT */}
      <section className="max-w-5xl mx-auto px-6 py-28">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-[#085733]">
          We deliver multi-sector services that enable infrastructure,
          optimize operations, and accelerate growth.
        </h1>
      </section>

      {/* SERVICES LIST (Minimal) */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT LIST */}
          <div className="space-y-6">
            {servicesData.map((service, index) => (
              <div
                key={index}
                onClick={() => setActiveService(service)}
                className="cursor-pointer border-b pb-6 group"
              >
                <h3 className="text-xl text-[#085733] font-medium group-hover:text-[#857333] transition">
                  {service.category}
                </h3>
                <p className="text-[#085733] mt-2">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          

          {/* RIGHT DETAIL PANEL */}
          <div className="sticky top-32 h-fit">
            {activeService ? (
              <div className=" p-8 rounded-2xl border flex flex-col gap-6">

                {/* Title */}
                <h2 className="text-2xl font-semibold text-[#085733]">
                  {activeService.category}
                </h2>

                {/* Description */}
                <p className="text-[#085733]">
                  {activeService.description}
                </p>

                {/* Items */}
                <ul className="space-y-3">
                  {activeService.items.map((item, i) => (
                    <li key={i} className="text-gray-700 border-b pb-2">
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Bottom Image */}
                <div className="mt-4 overflow-hidden rounded-xl">
                  <img
                    src={activeService.image || "service Image Not Available"}
                    alt={activeService.category}
                    className="w-full h-48 object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                  />
                </div>

              </div>
            ) : (
              <div className="text-gray-400">
                Select a service to view details.
              </div>
            )}
          </div>
        </div>
      </section>

      <ImageOverlaySection image={fiximg1} />

       {/* INDUSTRIES */}
      <section className="max-w-6xl mx-auto px-6 py-28">

        <h2 className="text-[#085733] text-3xl md:text-4xl font-semibold mb-16">
          Industries We Serve
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-[#085733]">

          {[
            "Oil & Gas",
            "Energy & Utilities",
            "Construction",
            "Manufacturing",
            "Real Estate",
            "Government Sector",
          ].map((item, i) => (
            <div key={i} className="border-b pb-4">
              {item}
            </div>
          ))}

        </div>

      </section>


      {/* HOW WE WORK */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-[#085733] text-3xl md:text-4xl font-semibold mb-16">
            How We Deliver
          </h2>

          <div className="grid md:grid-cols-4 gap-10 text-center">

            {[
              "Assessment",
              "Planning",
              "Execution",
              "Optimization",
            ].map((step, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-[#085733] mb-2">
                  {`0${i + 1}`}
                </div>
                <p className="text-[#085733]">{step}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CAPABILITIES GRID (MINIMAL STYLE) */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <h2 className="text-[#085733] text-3xl md:text-4xl font-semibold mb-16">
          Core Capabilities
        </h2>

        <div className="grid md:grid-cols-2 gap-y-8 gap-x-20 text-lg">
          {[
            "Maintenance & Facility Services",
            "Construction & Infrastructure",
            "Industrial & Technical Services",
            "Trading & Supply Chain",
          ].map((item, i) => (
            <div key={i} className="border-b pb-4 text-[#085733]">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-[#085733] text-3xl md:text-4xl font-semibold mb-16">
            Why Choose Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            {[
              {
                title: "Integrated Solutions",
                desc: "End-to-end service delivery across multiple sectors.",
              },
              {
                title: "Operational Excellence",
                desc: "Focused on efficiency, quality, and performance.",
              },
              {
                title: "Scalable Execution",
                desc: "Solutions designed for both local and global operations.",
              },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-xl font-semibold mb-3 text-[#085733]">
                  {item.title}
                </h3>
                <p className="text-[#085733]">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="max-w-4xl mx-auto px-6 py-28 text-center">
        <h2 className="text-[#085733] text-3xl md:text-5xl font-semibold leading-tight">
          Delivering solutions that define the future of enterprise operations.
        </h2>
      </section>
    </section>
  );
}