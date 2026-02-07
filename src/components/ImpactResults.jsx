import { motion } from "framer-motion";

export default function ImpactResults() {
  const results = [
    {
      title: "Faster Screening",
      value: "10x",
      desc: "AI parses and ranks 250+ applications per day vs 25 manually",
      border: "border-blue-500",
    },
    {
      title: "Faster Time-to-Hire",
      value: "70%",
      desc: "Average hiring timeline drops from 42 days to just 12 days",
      border: "border-purple-500",
    },
    {
      title: "More Interview Capacity",
      value: "25x",
      desc: "AI conducts 200+ automated screening interviews daily vs 8 manual calls",
      border: "border-blue-300",
    },
    {
      title: "Application Completion",
      value: "95%",
      desc: "Smart application forms reduce candidate drop-off dramatically",
      border: "border-white",
    },
    {
      title: "More Qualified Applicants",
      value: "89%",
      desc: "AI attracts higher-quality candidate pipelines",
      border: "border-teal-400",
    },
    {
      title: "Lower Recruitment Costs",
      value: "80%",
      desc: "Huge savings vs traditional recruiting agencies",
      border: "border-gray-500",
    },
    {
      title: "Reduction in Bad Hires",
      value: "50%",
      desc: "AI matching improves hiring accuracy",
      border: "border-purple-600",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {results.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className={`
            bg-[#1a1a1a]
            p-6
            rounded-xl
            border-2
            ${item.border}
            text-left
            cursor-pointer
          `}
        >
          <h3 className="text-[#9F7AEA] text-3xl font-bold">
            {item.value}
          </h3>

          <p className="text-white font-semibold mt-2">
            {item.title}
          </p>

          <p className="text-gray-400 text-sm mt-2">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
