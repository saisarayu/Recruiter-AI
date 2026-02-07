import { motion } from "framer-motion";

export default function AnimatedDarkBackground({ children }) {
  return (
    <div className="relative overflow-hidden">

      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, #1f1f1f, #0a0a0a)",
            "radial-gradient(circle at 60% 40%, #242424, #0d0d0d)",
            "radial-gradient(circle at 40% 60%, #1e1e1e, #0a0a0a)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {children}
    </div>
  );
}