import { motion } from "framer-motion";
import HeroSection from '../Components/HeroSection'
import WhyChooseUs from '../Components/WhyChooseUs'
import ProjectDetails from '../Components/ProjectDetails'
import OurClients from '../Components/OurClients'
import Testimonials from '../Components/Testimonials'
import CTA from '../Components/CTA'
import WhoWeAre from '../Components/WhoWeAre'
import Services from '../Components/Services.jsx'
import ImageOverlaySection from '../Components/ImageOverlaySection'
import ImageOverlaySectionImage2 from '../assets/Images/home_page/2.jpg'

export default function Home() {
  
const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

  return (
    <div className="">
      <HeroSection />
      <WhoWeAre />
      <Services />
      <ProjectDetails />
      <CTA />
      <WhyChooseUs />
      <ImageOverlaySection image={ImageOverlaySectionImage2} />
      <Testimonials />
      <OurClients />

       {/* FINAL STATEMENT (STRONG CLOSE) */}
      <section className="max-w-4xl mx-auto px-6 py-28 text-center text-[#085733]">
        <motion.h2
          {...fade}
          className="text-3xl md:text-5xl font-semibold leading-tight"
        >
          Driving operational excellence through seamless integration.
        </motion.h2>
      </section>
    </div>
  )
}
