import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "10x", label: "Faster Screening" },
    { value: "70%", label: "Faster Hiring" },
    { value: "80%", label: "Cost Savings" },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 bg-[#000000]"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-white"
        >
          Ready to Hire Better, Faster?
        </motion.h2>

        {/* SUBHEADLINE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-[#737373]"
        >
          Join 500+ companies hiring smarter with AI
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 flex flex-col md:flex-row justify-center items-center gap-5"
        >
          <button
            className="
              bg-white
              text-[#3B82F6]
              font-semibold
              px-8
              py-4
              rounded-xl
              shadow-lg
              transition-all
              hover:scale-105
            "
          >
            Start Free Trial →
          </button>

          <button
            className="
              border
              border-[#A5D8FF]
              text-white
              px-8
              py-4
              rounded-xl
              transition-all
              hover:bg-[#404040]
              flex
              items-center
              gap-2
            "
          >
            📅 Schedule Demo
          </button>
        </motion.div>

        {/* FEATURES ROW */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 flex flex-col md:flex-row justify-center gap-8 text-[#737373] text-sm"
        >
          <div className="flex items-center gap-2">
            <span className="text-[#D0BCFF]">●</span>
            No credit card required
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#A5D8FF]">●</span>
            14-day free trial
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#B197FC]">●</span>
            Cancel anytime
          </div>
        </motion.div>

        {/* STATS CARDS - NOW BELOW CTA EXACTLY LIKE IMAGE */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="
                bg-[#404040]
                border
                border-[#3B82F6]
                rounded-2xl
                p-10
                text-center
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]
              "
            >
              <h3 className="text-4xl font-bold text-white">
                {item.value}
              </h3>

              <p className="mt-2 text-[#737373]">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
