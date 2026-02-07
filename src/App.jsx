import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RecruiterAIWorkflows from "./components/RecruiterAIWorkflows";
import RecruiterImpactSection from "./components/RecruiterImpactSection";
import PlatformSection from "./components/PlatformSection";
import PlatformStats from "./components/PlatformStats";
import TestimonialsSection from "./components/TestimonialSection";
import FAQSection from "./components/FAQSection";
import SupportCard from "./components/SupportCard";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <Hero />

      <RecruiterAIWorkflows />

      <RecruiterImpactSection />

      <PlatformSection />

      <PlatformStats />

      <TestimonialsSection />

      <FAQSection />

      <SupportCard />

      <CallToAction />

      <Footer />
    </div>
  );
}

export default App;
