import { motion } from "framer-motion";

export function TestimonialCard({ name, role, image, quote, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.4,
        delay: index * 0.5,
        ease: "easeOut",
      }}
      className="
        w-[260px]
        min-h-[520px]
        flex flex-col
        items-center
        rounded-[28px]
        bg-[#4F4F4F]
        px-6
        pt-8
        pb-6
        transition-transform
        duration-300
        hover:-translate-y-2
      "
    >
      <img
        src={image}
        alt={name}
        className="h-20 w-20 rounded-full object-cover border-2 border-white"
      />

      <h3 className="mt-5 text-white text-2xl font-semibold text-center">
        {name}
      </h3>

      <p className="mt-1 text-[#D0D0D0] text-sm text-center leading-snug">
        {role}
      </p>

      <div
        className="
          mt-6
          w-full
          flex-1
          rounded-[40px]
          bg-white
          border-2 border-blue-500
          px-6
          py-8
          text-base
          text-black
          leading-relaxed
        "
      >
        “{quote}”
      </div>
    </motion.div>
  );
}
