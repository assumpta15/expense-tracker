import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

const CustomLineChart = ({ data = [] }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <defs>
          <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ef4444" stopOpacity={0.6} />
            <stop offset="100%" stopColor="#ef4444" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid stroke="none" />
        {/* <XAxis dataKey="date" /> */}

<XAxis
  dataKey="date"
  axisLine={false}
  tickLine={false}
  tick={{ fill: "#6b7280", fontSize: 12 }}
/>

        {/* <YAxis hide /> */}

        <YAxis
  axisLine={false}
  tickLine={false}
  tick={{ fill: "#6b7280", fontSize: 12 }}
/>
        {/* <Tooltip /> */}

        <Tooltip
  contentStyle={{
    backgroundColor: "#fff",
    borderRadius: "8px",
    border: "none",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  }}
  labelStyle={{ fontWeight: "600", color: "#111827" }}
/>


        {/* <Line
          type="monotone"
          dataKey="amount"
          // stroke="#ef4444"
          stroke="#7c3aed"
          strokeWidth={3}
          // dot={{ r: 4 }}
          dot={false}

          activeDot={{ r: 6 }}
        /> */}


        <Line
  type="monotone"
  dataKey="amount"
  stroke="#7c3aed"
  strokeWidth={3}
  dot={false}
  activeDot={{ r: 6 }}
  isAnimationActive={true}
  animationDuration={1200}
/>


        {/* Optional shaded area */}
        <Area
          type="monotone"
          dataKey="amount"
          stroke="none"
          fill="url(#expenseGradient)"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;
