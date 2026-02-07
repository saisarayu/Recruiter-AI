import { TestimonialCard } from "./TestimonialCard";

import neha from "../assets/neha.png";
import sarah from "../assets/sarah.png";
import arjun from "../assets/arjun.png";


export function TestimonialsGrid() {
  return (
    <div className="flex gap-10 items-start">
      <TestimonialCard
        name="Neha Verma"
        role="HR Business Partner, FinEdge"
        image={neha}
        quote="RecruiterAI made hiring structured and stress-free. We’ve reduced manual work by more than 70% while improving candidate experience."
      />

      <TestimonialCard
        name="Sarah Lee"
        role="HR Director, InnovateHub"
        image={sarah}
        quote="With RecruiterAI, the best candidates are shortlisted instantly. It feels like having an extra recruiter on the team."
      />

      <TestimonialCard
        name="Arjun Patel"
        role="Co-Founder, NextGen Labs"
        image={arjun}
        quote="RecruiterAI gave us enterprise-level hiring power without the cost and transformed our hiring workflow completely."
      />
    </div>
  );
}