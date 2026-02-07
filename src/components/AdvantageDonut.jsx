import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LabelList,
  Tooltip
} from "recharts";

export default function AdvantageDonut() {
  const data = [
    {
      name: "Faster Screening",
      value: 10,
      label: "10x",
      desc: "AI parses and ranks 250+ applications daily vs 25 manually",
    },
    {
      name: "Faster Time-to-Hire",
      value: 70,
      label: "70%",
      desc: "Average hiring timeline drops from 42 days to just 12 days",
    },
    {
      name: "More Interview Capacity",
      value: 25,
      label: "25x",
      desc: "AI conducts 200+ automated interviews daily vs 8 manual calls",
    },
    {
      name: "Application Completion",
      value: 95,
      label: "95%",
      desc: "Smart forms reduce candidate drop-off dramatically",
    },
    {
      name: "Qualified Applicants",
      value: 89,
      label: "89%",
      desc: "AI attracts higher quality candidate pipelines",
    },
    {
      name: "Lower Recruitment Costs",
      value: 80,
      label: "80%",
      desc: "Major savings compared to agencies and software tools",
    },
    {
      name: "Reduction in Bad Hires",
      value: 50,
      label: "50%",
      desc: "AI matching improves hiring accuracy significantly",
    },
  ];

  const COLORS = [
    "#7C3AED",
    "#2563EB",
    "#06B6D4",
    "#8B5CF6",
    "#4F46E5",
    "#6B7280",
    "#0EA5E9",
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const info = payload[0].payload;

      return (
        <div className="bg-[#121212] border border-[#7C3AED] p-4 rounded-xl shadow-xl max-w-sm">
          <div className="flex flex-col gap-2">
            <span className="text-white text-base font-semibold">
              {info.name}
            </span>

            <span className="text-[#A78BFA] text-2xl font-bold">
              {info.label}
            </span>

            <div className="h-[1px] bg-gray-700 my-1"></div>

            <span className="text-gray-300 text-sm leading-relaxed">
              {info.desc}
            </span>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="h-[520px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>

          {/* Grey center to remove black hole */}
          <Pie
            data={[{ value: 1 }]}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#111827"
            isAnimationActive={false}
          />

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={120}
            outerRadius={190}
            paddingAngle={0}
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="none"
                style={{ cursor: "pointer" }}
              />
            ))}

            <LabelList
              dataKey="label"
              position="inside"
              fill="#fff"
              style={{
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />
          </Pie>

          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "transparent" }}
          />

        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
