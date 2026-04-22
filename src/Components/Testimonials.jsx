import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ClientTrust() {

  const clients = [
    {
      company: "First Fix Construction Support",
      sector: "Construction & Infrastructure",
      feedback:
        "Delivered complex infrastructure projects with high precision, meeting all compliance and quality standards.",
    },
    {
      company: "The Ritz-Carlton Riyadh Maintenance",
      sector: "Facility Management",
      feedback:
        "Reliable maintenance services ensuring uninterrupted operations across multiple locations.",
    },
    {
      company: "Saudi Aramco Subcontracting Works",
      sector: "Industrial Services",
      feedback:
        "Strong execution capability and technical expertise across industrial service operations.",
    },
    {
      company: "Technology Solutions Client",
      sector: "IT & Digital Transformation",
      feedback:
        "Provided scalable IT solutions supporting business growth and operational efficiency.",
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
            Client Engagement
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#085733] mb-6">
            Trusted by Organizations Across Sectors
          </h2>

          <p className="text-gray-900 max-w-3xl mx-auto text-lg">
            Our clients rely on us for consistent execution, operational excellence,
            and long-term partnership across diverse industries.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">

          {clients.map((c, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 hover:shadow-xl transition"
            >
              <p className="text-sm text-[#857333] font-medium mb-2 uppercase tracking-wide">
                {c.sector}
              </p>

              <h3 className="text-xl font-semibold text-[#085733] mb-4">
                {c.company}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                “{c.feedback}”
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}