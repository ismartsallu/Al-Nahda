import { Fragment } from "react";
import { motion } from "framer-motion";
import img1 from '../assets/Images/who_we_are/1.jpg';
import img2 from "../assets/Images/who_we_are/2.jpg";
import img3 from "../assets/Images/who_we_are/3.jpg";



const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function WhoWeAre() {
  return (
    <Fragment>

      {/* SECTION 1: WHO WE ARE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm uppercase tracking-widest text-[#857333] mb-3">
              Who We Are
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#085733] leading-tight mb-6">
              AlNahda Walimran Alkhaleejia <br /> Company Holding
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              A multi-sector enterprise delivering integrated solutions across
              construction, infrastructure, industrial services, IT, and trading.
              Built on a foundation of quality, compliance, and long-term partnerships,
              the company operates across Saudi Arabia and international markets.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              With operational experience since 2018, the organization is aligned with
              Vision 2030, driving sustainable growth and scalable solutions for
              government, corporate, and industrial clients.
            </p>
          </motion.div>

          {/* Right Image Design */}
          <motion.div
            className="relative w-full h-105"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7 }}
          >
            {/* Large Image */}
            <img
              src={img1}
              alt="construction"
              className="absolute top-0 left-0 w-[70%] h-[70%] object-cover rounded-2xl shadow-xl hover:scale-105 transition duration-500"
            />

            {/* Top Right Image */}
            <img
              src={img2}
              alt="industry"
              className="absolute top-5 right-0 w-[40%] h-[45%] object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-500"
            />

            {/* Bottom Image */}
            <img
              src={img3}
              alt="infrastructure"
              className="absolute bottom-0 right-10 w-[55%] h-[45%] object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-500"
            />
          </motion.div>

        </div>
      </section>

    </Fragment>
  );
}