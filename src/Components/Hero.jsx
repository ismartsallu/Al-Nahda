import { motion } from "framer-motion";

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  bgPosition = "center",
}) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: bgPosition,
        }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl px-6 text-center text-white"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
          {title}
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>

      </motion.div>
    </section>
  );
}