import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function OurClients() {

  const [showAll, setShowAll] = useState(false);

  const clients = [
    new URL("../assets/Images/PartnerLogos/1.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/2.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/3.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/4.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/5.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/6.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/7.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/8.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/9.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/10.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/11.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/12.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/13.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/14.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/15.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/16.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/17.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/18.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/19.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/20.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/21.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/22.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/23.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/24.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/25.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/26.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/27.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/28.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/29.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/30.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/31.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/32.jpg", import.meta.url).href,
    new URL("../assets/Images/PartnerLogos/33.jpg", import.meta.url).href,
  ];

  const visibleClients = showAll ? clients : clients.slice(0, 12);

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 md:px-20">

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
          >
            <p className="text-sm uppercase tracking-widest text-[#857333] mb-3">
              Our Network
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#085733] mb-6 leading-tight">
              Trusted by Leading Organizations
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We collaborate with clients and partners across multiple sectors,
              delivering reliable solutions and long-term value through
              consistent execution and strategic expertise.
            </p>

            <p className="text-gray-500 text-sm">
              Building long-term partnerships across industries
            </p>
          </motion.div>

          {/* RIGHT LOGOS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
          >
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 items-center">

              {visibleClients.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center grayscale hover:grayscale-0 transition duration-300"
                >
                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    loading="lazy"
                    className="h-10 md:h-12 object-contain"
                  />
                </div>
              ))}

            </div>

            {/* SEE MORE BUTTON */}
            {clients.length > 12 && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-6 py-2 border border-[#857333] text-[#857333] rounded-md hover:bg-[#085733] hover:text-[#ffffff] transition"
                >
                  {showAll ? "Show Less" : "See More"}
                </button>
              </div>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
}