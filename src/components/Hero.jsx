import MessageBox from "./MessageBox";
import MessageBoxRight from "./MessageBoxRight";
import MessageBoxBottomLeft from "./MessageBoxBottomLeft";
import MessageBoxBottomRight from "./MessageBoxBottomRight";

const Hero = () => {
  return (<section
  id="testimonials"
  className="w-screen h-screen bg-black text-white relative"
>

      <MessageBox />
      <MessageBoxRight />
      <MessageBoxBottomLeft />
      <MessageBoxBottomRight />

      {/* CENTER CONTENT */}
      <div className="h-full flex items-start justify-center pt-48 px-10">

        <div className="max-w-4xl text-center">

          <h1 className="text-6xl font-bold leading-tight">
            Every Hire, Faster and Better
          </h1>

          <h2 className="text-6xl font-bold text-blue-400 mt-2">
            with RecruiterAI
          </h2>

          <p className="text-gray-400 text-lg mt-6 leading-relaxed">
            Stop losing great candidates to slow, manual hiring processes.
            Let AI handle the heavy lifting while you focus on building your team.
          </p>

          <div className="flex gap-6 mt-8 justify-center">

            <button className="bg-blue-600 px-7 py-3 rounded-full font-semibold opacity-100">
              Start Hiring Smarter
            </button>

            <button className="border border-gray-500 px-7 py-3 rounded-full">
              See How It Works
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;