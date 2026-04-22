import { Building2, Wrench, Cpu, Truck, Globe, Users, Network} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function WhatWeDo() {

const sectors = [
  {
    icon: <Truck className="w-10 h-10 text-[#085733] group-hover:text-[#857333]" />,
    title: "Trading & Supply Services",
    desc: "Efficient sourcing and supply of materials, equipment, and project essentials across multiple industries.",
  },
  {
    icon: <Cpu className="w-10 h-10 text-[#085733] group-hover:text-[#857333]" />,
    title: "IT Technology Services",
    desc: "Advanced IT solutions including system integration, digital transformation, and enterprise technology support.",
  },
  {
    icon: <Users className="w-10 h-10 text-[#085733] group-hover:text-[#857333]" />,
    title: "Manpower Supply",
    desc: "Provision of skilled and unskilled workforce to support construction, industrial, and corporate operations.",
  },
  {
    icon: <Wrench className="w-10 h-10 text-[#085733] group-hover:text-[#857333]" />,
    title: "Facility & Maintenance Services",
    desc: "Comprehensive facility management and maintenance solutions ensuring efficiency and asset longevity.",
  },
  {
    icon: <Building2 className="w-10 h-10 text-[#085733] group-hover:text-[#857333]" />,
    title: "Construction Services",
    desc: "Execution of high-quality construction projects with a focus on safety, precision, and timely delivery.",
  },
  {
    icon: <Network className="w-10 h-10 text-[#085733] group-hover:text-[#857333]" />,
    title: "Infrastructure Services",
    desc: "Development of scalable infrastructure solutions supporting urban growth and industrial expansion.",
  },
];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 md:px-20">

        {/* Top Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">

          {/* Left */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
          >
            <p className="text-sm uppercase tracking-widest text-[#857333] mb-3">
              Our Business Areas
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#085733] leading-tight mb-6">
              Diversified Capabilities Across Key Sectors
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              AlNahda Walimran Alkhaleejia Company Holding operates across
              multiple industries, delivering integrated solutions that support
              infrastructure development, industrial growth, and digital transformation.
            </p>
          </motion.div>

          {/* Right Highlight Box */}
          <motion.div
            className="bg-gray-50 p-10 rounded-lg shadow-lg"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#857333]">
              Integrated Approach
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our structure enables seamless collaboration across divisions,
              ensuring efficiency, scalability, and consistent delivery across
              all projects and sectors.
            </p>
          </motion.div>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-white rounded-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-5">{item.icon}</div>

              <h3 className="text-xl font-semibold text-[#085733] mb-3 group-hover:text-[#857333] transition">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 flex justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          <Link
            to="/services"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-8 py-3 bg-[#857333] hover:bg-[#085733] text-white rounded-lg font-medium transition"
          >
            View All Services
          </Link>
        </motion.div>

      </div>
    </section>
  );
}