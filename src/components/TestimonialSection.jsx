import { TestimonialBackground } from "./TestimonialBackground";
import { TestimonialHeader } from "./TestimonialHeader";
import { TestimonialsGrid } from "./TestimonialGrid";

export default function TestimonialsSection() {
  return (
    <section id="testimonials">
      <TestimonialBackground>
        <div className="flex items-start gap-16">
          <TestimonialHeader />
          <TestimonialsGrid />
        </div>
      </TestimonialBackground>
    </section>
  );
}
