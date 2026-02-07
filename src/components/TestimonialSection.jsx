import { motion } from "framer-motion";
import { TestimonialBackground } from "./TestimonialBackground";
import { TestimonialHeader } from "./TestimonialHeader";
import { TestimonialsGrid } from "./TestimonialGrid";

export default function TestimonialsSection() {
  return (
    <section id="testimonials">
      <TestimonialBackground>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 px-4 md:px-0"
        >
          <TestimonialHeader />
          <TestimonialsGrid />
        </motion.div>
      </TestimonialBackground>
    </section>
  );
}
