import { useEffect, useState } from "react";

const statsData = [
  { number: 50, suffix: "+", label: "Projects Delivered" },
  { number: 10, suffix: "+", label: "Industry Sectors" },
  { number: 100, suffix: "+", label: "Skilled Workforce" },
  { number: 5, suffix: "+", label: "Operational Regions" },
];

// Counter hook
function useCounter(end, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

export default function CTA() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6 md:px-20">

        {/* Header */}
        <div
          className="mb-16 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-widest text-[#857333] mb-3">
            Our Impact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#085733] mb-6">
            Driving Growth Across Multiple Sectors
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our performance metrics reflect our commitment to delivering
            high-quality solutions, operational excellence, and long-term value.
          </p>
        </div>

        {/* Stats Grid */}
        <StatsGrid />

      </div>
    </section>
  );
}

function StatsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
      {statsData.map((stat) => (
        <StatCard key={stat.label} stat={stat} />
      ))}
    </div>
  );
}

function StatCard({ stat }) {
  const count = useCounter(stat.number);

  return (
    <div className="hover:bg-[#085733] text-[#085733] hover:text-white p-8 rounded-xl hover:shadow-xl transition">
      <h3 className="text-3xl md:text-4xl font-bold mb-2">
        {count}{stat.suffix}
      </h3>

      <p className="text-sm uppercase tracking-wide">
        {stat.label}
      </p>
    </div>
  );
}
