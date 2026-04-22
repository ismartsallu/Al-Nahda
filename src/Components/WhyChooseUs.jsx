import { Award, TrendingUp, Globe, Shield, Layers, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyChooseUs() {

  const reasons = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Credibility",
      description:
        "A trusted organization delivering consistent performance across multiple sectors with a strong reputation.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Multi-Sector Expertise",
      description:
        "Capabilities across construction, infrastructure, IT, and industrial services under one structure.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scalable Operations",
      description:
        "From localized operations to large-scale international projects with efficiency.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality & Compliance",
      description:
        "Adhering to global standards, safety protocols, and regulatory frameworks.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Perspective",
      description:
        "Blending international expertise with local execution for impactful delivery.",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Strategic Partnerships",
      description:
        "Long-term collaborations with governments and industry leaders.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-20">

        {/* Header Centered */}
        <motion.div
          className=" max-w-6xl mx-auto mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          <p className="text-sm uppercase tracking-widest text-[#857333] mb-3">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#085733] leading-tight mb-6">
            Built for Scale & Excellence
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Delivering integrated, high-performance solutions backed by expertise,
            structure, and long-term value creation.
          </p>
        </motion.div>

        {/* Horizontal Timeline Style */}
        <div className="relative">

          {/* Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200" />

          <div className="grid md:grid-cols-3 gap-10">
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {/* Icon Circle */}
                <div className=" mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md text-[#085733] group-hover:bg-[#085733] group-hover:text-white transition">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#085733] mb-2 group-hover:text-[#857333]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed  mx-auto">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <motion.div
          className="mt-24 bg-linear-to-r from-[#085733] to-[#857333] text-white rounded-3xl p-12 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          <h3 className="text-3xl font-semibold mb-4">
            Let’s Build Something Exceptional Together
          </h3>

          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Partner with a team that delivers precision, scale, and reliability across every project.
          </p>

          <Link
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-8 py-3 bg-white text-[#085733] rounded-lg font-medium hover:bg-[#857333] hover:text-white transition"
          >
            Get in Touch
          </Link>
        </motion.div>

      </div>
    </section>
  );
}