import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Factory, Hotel, Construction } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function OurProjects() {

  const projects = [
    {
      title: "First Fix Construction Support",
      sector: "Construction Services",
      icon: Construction,
      desc: "AlNahda executed project works for First Fix, a Saudi-based construction company, supporting assigned scopes in coordination with project teams. All activities were delivered in line with approved project requirements, timelines, and quality standards.",
      details:
        [
          "Construction Scope Execution",
          "Coordination with Project Teams",
          "Compliance with Project Specifications",
          "Timely Delivery & Quality Assurance"
        ],
    },
    {
      title: "Saudi Aramco Subcontracting Works",
      sector: "Infrastructure Services",
      icon: Factory,
      desc: "AlNahda supported Saudi Aramco projects as a subcontractor, delivering defined scopes of work in coordination with main contractors and stakeholders. Execution focused on strict adherence to approved specifications, schedules, and site requirements.",
      details:
        [
          "Subcontracted Project Execution",
          "Coordination with Main Contractors",
          "Adherence to Aramco Standards",
          "Site Compliance & Safety",
        ],
    },
    {
      title: "The Ritz-Carlton Riyadh Maintenance",
      sector: "Facility & Maintenance Services",
      icon: Hotel,
      desc: "AlNahda executed a maintenance contract for The Ritz-Carlton, Riyadh, covering routine inspections, preventive and corrective maintenance, and continuous operational support to ensure all facilities operated according to required standards.",
      details:
        [
          "Preventive & Corrective Maintenance",
          "Routine Inspections",
          "Facility Operations Support",
          "High-End Hospitality Standards Compliance",
        ],
    },

  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 md:px-20">

        {/* Header */}
        <motion.div
          className="mb-16 max-w-3xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-widest text-[#857333] mb-3">
            Our Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#085733] mb-6">
            Key Projects & Execution Portfolio
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            A selection of major projects delivered across multiple sectors,
            demonstrating our capability to execute complex operations at scale.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-12">

          {projects.map((p, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.1 }}
              className="grid md:grid-cols-3 gap-8 items-start border-b border-[#857333] pb-10"
            >
              {/* Icon + Sector */}
              <div>
                <p.icon className="w-12 h-12 text-[#085733] mb-4" />
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  {p.sector}
                </p>
              </div>

              {/* Main Content */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-semibold text-[#085733] mb-3">
                  {p.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {p.desc}
                </p>

                <p className="text-gray-500 leading-relaxed text-sm">
                  {p.details}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 flex justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          <Link
            to="/Ourprojects"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-8 py-3 bg-[#857333] hover:bg-[#085733] text-white rounded-lg font-medium transition"
          >
            View Full Portfolio
          </Link>
        </motion.div>

      </div>
    </section>
  );
}