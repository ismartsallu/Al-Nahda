import { motion } from "framer-motion";
import Hero from "../Components/Hero";
import { Award, TrendingUp, Globe, Shield, Layers, Briefcase } from "lucide-react";
import ImageOverlaySection from "../Components/ImageOverlaySection";
import officeBg from "../assets/Images/about_page/herobg.jpg";
import leftImage from "../assets/Images/about_page/leftside.jpg";
import fiximg3 from "../assets/Images/about_page/3.jpg";


const aboutHeroBg = new URL("../assets/Images/Herobg/About-Herobg.jpg", import.meta.url).href;
const officeBgSec = new URL("../assets/Images/Herobg/About-sec-img2.jpg", import.meta.url).href;

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function About() {
  
  return (
    <section className="bg-white text-gray-900">

      {/* HERO */}
      <Hero
        title="AlNahda Walimran Alkhaleejia Company Holding"
        subtitle="Built for Scale. Designed for Impact."
        backgroundImage={officeBg}
      />

      {/* BIG STATEMENT (Apple Style) */}
      <section className="max-w-5xl mx-auto px-6 py-28">
        <motion.h1
          {...fade}
          className="text-4xl md:text-6xl text-[#085733] font-semibold leading-tight tracking-tight"
        >
          We build integrated solutions that power industries,
          enable infrastructure, and drive long-term value.
        </motion.h1>
      </section>

      {/* COMPANY DESCRIPTION */}
      <section className="max-w-4xl mx-auto px-6 pb-28">
        <motion.p {...fade} className="text-lg text-gray-600 leading-relaxed">
          AlNahda Walimran Alkhaleejia Company Holding is a Saudi-based
          multi-sector enterprise delivering services across infrastructure,
          industrial operations, and supply chain ecosystems. With operational
          expertise since 2018, we focus on precision, scalability, and
          sustainable execution aligned with Vision 2030.
        </motion.p>

        <motion.p {...fade} className="text-lg text-gray-600 leading-relaxed mt-6">
          We are a multidisciplinary organization combining engineering,
          operational excellence, and strategic insight to deliver complex
          projects across sectors. Our approach is rooted in efficiency,
          adaptability, and long-term partnership.
        </motion.p>

        <motion.p {...fade} className="text-lg text-gray-600 leading-relaxed mt-6">
          From infrastructure development to industrial services, we enable
          organizations to scale with confidence while maintaining the highest
          standards of quality and compliance.
        </motion.p>

        <motion.p {...fade} className="text-lg text-gray-600 leading-relaxed mt-6">
          The company combines expertise from industrial, construction, trading, and service sectors, 
          similar to diversified holding groups operating across the Gulf region.
        </motion.p>

        <motion.p {...fade} className="text-lg text-gray-600 leading-relaxed mt-6">
          Its structure reflects a modern holding model where different subsidiaries and 
          divisions operate under unified governance, ensuring efficiency and strategic alignment.
        </motion.p>

        <motion.p {...fade} className="text-lg text-gray-600 leading-relaxed mt-6">
         The “Al Omran” legacy is associated with industrial and trading activities such as 
         manufacturing, construction support, and infrastructure development, 
         which historically include areas like property development, contracting, 
         and material supply.
        </motion.p>
      </section>

      {/* SPLIT SECTION (Image + Text) */}
      <section className="grid md:grid-cols-2">

        {/* Image */}
        <div className="h-125">
          <img
            src={leftImage}
            className="w-full h-full object-cover"
            alt="Office"
          />
        </div>

        {/* Text */}
        <div className="flex items-start px-10 md:px-16 py-16">
          <motion.div {...fade} className="max-w-xl space-y-5">

            <h2 className="text-3xl md:text-4xl text-[#085733] font-semibold">
              Strategy meets execution.
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We operate at the intersection of engineering excellence,
              operational efficiency, and enterprise strategy—enabling
              organizations to deliver complex projects with precision.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our integrated approach ensures seamless coordination across
              planning, execution, and delivery phases, reducing risk while
              maximizing performance and long-term value.
            </p>

            <p className="text-gray-600 leading-relaxed">
              From infrastructure development to industrial operations, we
              provide scalable solutions tailored to meet evolving market
              demands and national development goals.
            </p>

          </motion.div>
        </div>

      </section>

      {/* MISSION & VISION */}
      <section className=" py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          <motion.div {...fade}>
            <h3 className="text-2xl text-[#085733] font-semibold mb-4">Our Mission</h3>
            <p className="text-[#085733] leading-relaxed">
              To deliver reliable, scalable, and high-quality solutions that
              empower industries and contribute to sustainable development.
            </p>
          </motion.div>

          <motion.div {...fade}>
            <h3 className="text-2xl text-[#085733] font-semibold mb-4">Our Vision</h3>
            <p className="text-[#085733] leading-relaxed">
              To become a globally recognized enterprise driving innovation,
              infrastructure growth, and operational excellence across markets.
            </p>
          </motion.div>

        </div>
      </section>


      {/* CORE PRINCIPLES (Full Width) */}
      <section className="w-full py-28 text-[#085733]">

        <div className="max-w-6xl mx-auto px-6">
           <motion.h2 {...fade} className="text-3xl md:text-4xl font-semibold mb-12">
              Core Principles
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-16">
            
            {[
              {
                title: "Precision",
                desc: "Execution built on accuracy, discipline, and technical expertise.",
              },
              {
                title: "Scalability",
                desc: "Solutions designed to grow with enterprise and national demands.",
              },
              {
                title: "Reliability",
                desc: "Consistent delivery aligned with global standards and expectations.",
              },
              {
                title: "Integrity & Compliance",
                desc: "Strong adherence to legal and ethical standards.",
              },
              {
                title: "Quality Excellence",
                desc: "Commitment to superior execution and excellence.",
              },
              {
                title: "Customer Focus",
                desc: "Client-centric solutions and partnerships.",
              },
              {
                title: "Innovation",
                desc: "Incorporation of modern technologies and practices for efficiency and effectiveness.",
              },
              {
                title: "Safety & Sustainability",
                desc: "Responsible and safe operations.",
              },
              {
                title: "Reliability",
                desc: "Consistent delivery aligned with global standards and expectations.",
              },
            ].map((item, i) => (
              <motion.div key={i} {...fade}>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS (Minimal Apple Style) */}
      <section className="py-24">
        <div className="max-w-6xl text-[#085733] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { value: "50+", label: "Projects" },
            { value: "100+", label: "Clients" },
            { value: "6+", label: "Sectors" },
            { value: "8+", label: "Years" },
          ].map((stat, i) => (
            <motion.div key={i} {...fade}>
              <h3 className="text-3xl md:text-4xl font-semibold">
                {stat.value}
              </h3>
              <p className="text-gray-500 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="text-[#085733] max-w-6xl mx-auto px-6 py-28">
        <motion.h2 {...fade} className="text-3xl md:text-4xl font-semibold mb-12">
          Industries We Serve
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Construction & Infrastructure",
            "Oil & Gas",
            "Energy & Utilities",
            "Manufacturing",
            "Real Estate Development",
            "Government & Public Sector",
          ].map((item, i) => (
            <motion.div key={i} {...fade} className="border-b pb-4">
              {item}
            </motion.div>
          ))}
        </div>
      </section>


      {/* CAPABILITIES (Minimal Grid) */}
      <section className="max-w-6xl mx-auto px-6 py-28 text-[#085733]">
        <motion.h2
          {...fade}
          className="text-3xl md:text-4xl font-semibold mb-12"
        >
          Core Capabilities
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-y-8 gap-x-16 text-lg">
          {[
            "Maintenance & Facility Services",
            "Construction & Infrastructure",
            "Industrial & Technical Services",
            "Trading & Supply Chain",
          ].map((item, i) => (
            <motion.div key={i} {...fade} className="border-b pb-4">
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      <ImageOverlaySection image={fiximg3} />

      {/* WHY CHOOSE US */}
      <section className="py-28 text-[#085733]">
        <div className="max-w-6xl mx-auto px-6">

          <motion.h2 {...fade} className="text-3xl md:text-4xl font-semibold mb-16">
            Why Choose Us
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Award className="w-10 h-10 " />,
                title: "Proven Credibility",
                desc:
                  "A trusted organization delivering consistent performance across multiple sectors with a strong reputation for quality and reliability.",
              },
              {
                icon: <Layers className="w-10 h-10" />,
                title: "Multi-Sector Expertise",
                desc:
                  "Integrated capabilities across construction, infrastructure, IT, industrial services, and trading under a unified structure.",
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: "Scalable Operations",
                desc:
                  "Designed to execute projects of varying scale — from localized operations to large-scale national and international initiatives.",
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: "Quality & Compliance",
                desc:
                  "Strict adherence to international standards, safety protocols, and regulatory frameworks across all operations.",
              },
              {
                icon: <Globe className="w-10 h-10" />,
                title: "Global Perspective",
                desc:
                  "Combining international expertise with local execution to deliver solutions aligned with regional and global requirements.",
              },
              {
                icon: <Briefcase className="w-10 h-10" />,
                title: "Strategic Partnerships",
                desc:
                  "Building long-term collaborations with government entities, corporations, and industrial leaders.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fade}
                className="group relative flex flex-col p-6 sm:p-8 bg-white rounded-2x rounded-2xl hover:shadow-xl hover:shadow-[#085733]/20 hover:bg-[#085733] transition-all duration-300 ease-in-out hover:-translate-y-1 overflow-hidden"
              >
                {/* Optional: Subtle decorative background blob for extra polish */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#085733]/5 rounded-bl-full -z-10 group-hover:bg-white/10 transition-colors duration-300" />

                {/* Icon Container */}
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#085733]/10 text-[#085733] group-hover:bg-white/20 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#085733] group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#085733] leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL STATEMENT (STRONG CLOSE) */}
      <section className="max-w-4xl mx-auto px-6 py-28 text-center text-[#085733]">
        <motion.h2
          {...fade}
          className="text-3xl md:text-5xl font-semibold leading-tight"
        >
          Building the future of integrated enterprise solutions.
        </motion.h2>
      </section>

    </section>
  );
}