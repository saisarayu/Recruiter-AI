import { TestimonialBackground } from "./TestimonialBackground";
import { TestimonialHeader } from "./TestimonialHeader";
import { TestimonialsGrid } from "./TestimonialGrid";

export default function TestimonialsSection() {
  return (
    <section id="testimonials">
      <TestimonialBackground>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 px-4 md:px-0">
          <TestimonialHeader />
          <TestimonialsGrid />
        </div>
      </TestimonialBackground>
    </section>
  );
}
