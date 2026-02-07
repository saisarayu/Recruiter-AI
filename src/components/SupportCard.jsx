import { motion } from "framer-motion";

export default function SupportCard() {
  return (
    <section
      className="py-20 px-6 flex justify-center"
      style={{
        background: "radial-gradient(circle at center, #2a2a2a 0%, #000000 85%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="
          max-w-4xl
          w-full
          bg-[#242424]
          rounded-xl
          border
          border-[#2f2f2f]
          p-12
          text-center
        "
      >
        <h3 className="text-2xl font-bold text-white">
          Still have questions?
        </h3>

        <p className="mt-4 text-gray-400">
          Our team is here to help. Get in touch and we'll respond within 24 hours.
        </p>

        <button
          className="
            mt-8
            bg-[#3B82F6]
            text-white
            px-8
            py-3
            rounded-lg
            font-semibold
            shadow-md
            hover:bg-blue-600
            transition
          "
        >
          Contact Support
        </button>
      </motion.div>
    </section>
  );
}