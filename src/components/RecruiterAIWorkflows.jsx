export default function RecruiterAIWorkflows() {
  return (
    <section className="bg-[#000000] py-24 text-white">
      <div className="text-center px-6">
        <h2 className="text-5xl font-bold text-white">
          AI Recruiting Software That Works Like Your Own HR Team
        </h2>

        <p className="mt-4 text-[#737373]">
          Build custom hiring workflows in minutes. No coding required.
        </p>
      </div>

      <div className="mt-14 max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">

        {/* FLOWCHART 1 */}
        <FlowWrapper
          title="Automated Screening & Scheduling"
          benefit="Screen 250+ applications in minutes vs. 8 hours manually"
        >
          <Step text="New Application Submitted" />

          <ArrowConnector />

          <Step text="AI Resume Screening" sub="Ranks top 20% of candidates" />

          <ArrowConnector />

          <Step text="Auto-send Screening Questions" sub="Via email" />

          <ArrowConnector />

          <Decision text="Score > 75% ?" />

          <ArrowConnector />

          <YesNo
            yes="Auto-schedule Interview"
            no="Thank You Email + Talent Pool"
          />

          <ArrowConnector />

          <Step text="Send 24h Interview Reminder" />
        </FlowWrapper>


        {/* FLOWCHART 2 */}
        <FlowWrapper
          title="Multi-Stage Interview Automation"
          benefit="Reduce time-to-hire from 42 days to 12 days"
        >
          <Step text="Candidate Accepts Interview Invite" />

          <ArrowConnector />

          <Step text="Round 1: AI Video Interview" sub="Technical screening" />

          <ArrowConnector />

          <Step text="AI Scores Responses" sub="Custom rubric" />

          <ArrowConnector />

          <Decision text="Score > 80% ?" />

          <ArrowConnector />

          <YesNo
            yes="Schedule Round 2 with Hiring Manager"
            no="Auto-Rejection Email with Feedback"
          />

          <ArrowConnector />

          <Decision text="Hire or Reject?" />

          <ArrowConnector />

          <YesNo
            yes="Send Offer Letter + Welcome Kit"
            no="Personalized Rejection Email"
          />
        </FlowWrapper>


        {/* FLOWCHART 3 */}
        <FlowWrapper
          title="Passive Candidate Re-engagement"
          benefit="Build a qualified talent pipeline automatically – never start from zero"
        >
          <Step text="Rejected Candidate (60-74% Score)" />

          <ArrowConnector />

          <Step text="Add to Future Talent Database" />

          <ArrowConnector />

          <Step text="Wait 3 Months" sub="Automated patience period" />

          <ArrowConnector />

          <Decision text="New Position Opens?" />

          <ArrowConnector />

          <YesNo
            yes="Send Personalized Re-engagement Email"
            no="Check Again Next Quarter"
          />

          <ArrowConnector />

          <Decision text="Interested?" />

          <ArrowConnector />

          <YesNo
            yes="Fast-track to Interview Stage"
            no="Keep in Talent Pool"
          />
        </FlowWrapper>

      </div>
    </section>
  );
}


// -------- INTERNAL UI COMPONENTS --------

function FlowWrapper({ title, benefit, children }) {
  return (
    <div
      className="
        bg-[#404040]
        rounded-2xl
        p-6
        flex flex-col
        items-center
        shadow-lg
        transition-all
        duration-300
        hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]
      "
    >
      <h3 className="text-lg font-semibold text-[#A5D8FF] mb-4 text-center">
        {title}
      </h3>

      <div className="flex flex-col items-center gap-2 w-full">
        {children}
      </div>

      <p className="mt-6 text-sm text-[#B197FC] text-center">
        {benefit}
      </p>
    </div>
  );
}


function Step({ text, sub }) {
  return (
    <div
      className="
        w-full
        bg-[#3B82F6]
        text-white
        p-4
        rounded-xl
        text-center
        transition-all
        duration-300
        hover:scale-[1.03]
        hover:shadow-lg
        cursor-pointer
      "
    >
      <div>{text}</div>
      {sub && <div className="text-xs mt-1 opacity-80">{sub}</div>}
    </div>
  );
}


function Decision({ text }) {
  return (
    <div className="relative my-4 flex items-center justify-center">
      <div
        className="
          w-[140px]
          h-[140px]
          bg-[#D0BCFF]
          rotate-45
          rounded-2xl
          flex
          items-center
          justify-center
          shadow-md
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-[0_0_20px_rgba(208,188,255,0.6)]
          cursor-pointer
        "
      >
        <span
          className="
            -rotate-45
            text-black
            text-center
            font-bold
            text-base
            px-3
          "
        >
          {text}
        </span>
      </div>
    </div>
  );
}


function YesNo({ yes, no }) {
  return (
    <div className="w-full flex gap-4">

      <div
        className="
          flex-1
          bg-[#3B82F6]
          text-white
          p-3
          rounded-lg
          text-center
          text-sm
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-lg
          cursor-pointer
        "
      >
        {yes}
      </div>

      <div
        className="
          flex-1
          bg-[#737373]
          text-white
          p-3
          rounded-lg
          text-center
          text-sm
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-lg
          cursor-pointer
        "
      >
        {no}
      </div>

    </div>
  );
}


function ArrowConnector() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[2px] h-3 bg-gray-400"></div>
      <div className="text-gray-400 text-lg leading-none">↓</div>
      <div className="w-[2px] h-3 bg-gray-400"></div>
    </div>
  );
}
