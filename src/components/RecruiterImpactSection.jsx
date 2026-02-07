import AdvantageDonut from "./AdvantageDonut";
import ImpactResults from "./ImpactResults";

export default function RecruiterImpactSection() {
  return (
    <section id="impact" className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Recruiter AI Advantage
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT - PIE CHART */}
          <div className="flex justify-center">
            <AdvantageDonut />
          </div>

          {/* RIGHT - RESULT BOXES */}
          <div>
            <ImpactResults />
          </div>

        </div>

        <p className="text-gray-400 text-center mt-8">
          Hover over each section to see detailed impact
        </p>

      </div>
    </section>
  );
}
