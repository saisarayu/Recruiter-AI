import { motion } from "framer-motion";

export default function PlatformStats() {
  const stats = [
    {
      value: "10+",
      label: "Major Job Platforms",
    },
    {
      value: "1-Click",
      label: "Sync Across All",
    },
    {
      value: "3x",
      label: "More Candidate Reach",
    },
  ];

  return (
    <section
      className="py-20 px-6"
      style={{
        background: "radial-gradient(circle at center, #2a2a2a 0%, #000000 85%)",
      }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.06,
              y: -10,
              transition: { duration: 0.25 },
            }}
            className="
              bg-[#1e1e1e]
              rounded-2xl
              border
              border-[#2f2f2f]
              p-12
              text-center
              transition-all
              duration-300
              cursor-pointer
              hover:border-[#9F7AEA]
              hover:shadow-[0_0_20px_rgba(159,122,234,0.35)]
            "
          >
            <h3 className="text-5xl font-extrabold text-[#9F7AEA]">
              {item.value}
            </h3>

            <p className="mt-4 text-gray-300 font-medium text-lg">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
