import { motion } from "framer-motion";

export default function PlatformSection() {
  const platforms = [
    { name: "LinkedIn", color: "#0077B5" },
    { name: "Naukri.com", color: "#1E73BE" },
    { name: "Indeed", color: "#2164F3" },
    { name: "AngelList", color: "#000000" },
    { name: "Instahyre", color: "#0F5FFF" },
    { name: "Wellfound", color: "#050505" },
    { name: "IIMJobs", color: "#E31E24" },
    { name: "Glassdoor", color: "#0CAA41" },
    { name: "Monster India", color: "#6E46AE" },
    { name: "Cutshort", color: "#EF5A2F" },
  ];

  return (
    <section id="solution" className="bg-black py-24 overflow-hidden">
      <div className="text-center px-6">
        <h2 className="text-5xl font-bold text-white">
          Post Once, <span className="text-[#9F7AEA]">Reach Everywhere</span>
        </h2>

        <p className="mt-4 text-gray-400">
          RecruiterAI automatically syncs your job postings across all major platforms
        </p>
      </div>

      <div className="mt-12 relative w-full">
        <motion.div
          className="flex gap-10 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...platforms, ...platforms].map((platform, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.12,
                y: -6,
                transition: { duration: 0.2 },
              }}
              style={{
                "--hoverColor": platform.color,
              }}
              className="
                bg-[#1a1a1a]
                px-6
                py-3
                rounded
                text-gray-400
                transition-all
                duration-300
                cursor-pointer
                whitespace-nowrap
                border
                border-[#2a2a2a]

                hover:text-white
                hover:border-[var(--hoverColor)]
                hover:shadow-[0_0_16px_var(--hoverColor)]
              "
            >
              {platform.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
