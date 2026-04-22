import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Boxes, Cpu, Users, Wrench, Building2, Network } from "lucide-react";

const services = [
  {
    icon: <Boxes size={28} />,
    title: "Trading & Supply Services",
    description: "Reliable sourcing and supply of industrial materials and equipment across multiple sectors.",
  },
  {
    icon: <Cpu size={28} />,
    title: "IT Technology Services",
    description: "Innovative IT solutions including software, infrastructure, and digital transformation services.",
  },
  {
    icon: <Users size={28} />,
    title: "Manpower Supply",
    description: "Skilled and unskilled workforce solutions tailored to project and operational needs.",
  },
  {
    icon: <Wrench size={28} />,
    title: "Facility & Maintenance Services",
    description: "Comprehensive facility management and maintenance ensuring operational efficiency.",
  },
  {
    icon: <Building2 size={28} />,
    title: "Construction Services",
    description: "End-to-end construction solutions from planning to execution with quality assurance.",
  },
  {
    icon: <Network size={28} />,
    title: "Infrastructure Services",
    description: "Development of large-scale infrastructure projects with sustainable and scalable solutions.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-20">

        {/* Header */}
        <motion.div
          className="max-w-6xl mx-auto mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          <p className="text-sm uppercase tracking-widest text-[#857333] mb-3">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#085733] mb-6">
            Integrated Solutions Across Industries
          </h2>

          <p className="text-gray-600 text-lg">
            Delivering high-performance services tailored to meet complex business and infrastructure needs.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white hover:bg-[#085733] transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-5 text-[#085733] group-hover:text-[#857333] transition">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-[#085733] group-hover:text-white mb-3 transition">
                {service.title}
              </h3>

              <p className="text-gray-600 group-hover:text-gray-200 leading-relaxed transition">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
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