// import React from "react";
// import CustomTooltip from "./CustomTooltip";
// import CustomLegend from "./CustomLegend";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
// } from "recharts";

// const CustomPieChart = ({
//   data,
//   label,
//   totalBalance,
//   colors,
//   showTextAnchor = true,
// }) => {
//   return (
//     <ResponsiveContainer width="100%" height={380}>
//       <PieChart>
//         <Pie
//           data={data}
//           dataKey="amount"
//           nameKey="name"
//           cx="50%"
//           cy="50%"
//           outerRadius={130}
//           innerRadius={100}
//           labelLine={false}
//         >
//           {/* {data.map((entry, index) => (
//             <Cell
//               key={`cell-${index}`}
//               fill={colors[index % colors.length]}
//             />
//           ))} */}

//          {data.map((_, index) => (
//             <Cell
//               key={`cell-${index}`}
//               fill={colors[index % colors.length]}
//             />
//           ))}

//         </Pie>

//         <Tooltip content={CustomTooltip} />
//         <Legend  content={CustomLegend}/>

//         {showTextAnchor && (
//           <>
//             {/* LABEL */}
//             <text
//               x="50%"
//               y="50%"
//               dy={-25}
//               textAnchor="middle"
//               fill="#666"
//               fontSize="14px"
//             >
//               {label}
//             </text>

//             {/* TOTAL */}
//             <text
//               x="50%"
//               y="50%"
//               dy={8}
//               textAnchor="middle"
//               fill="#333"
//               fontSize="24px"
//               fontWeight="600"
//             >
//               {totalBalance}
//             </text>
//           </>
//         )}
//       </PieChart>
//     </ResponsiveContainer>
//   );
// };

// export default CustomPieChart;













import React from "react";
import CustomTooltip from "./CustomTooltip";
import CustomLegend from "./CustomLegend";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const CustomPieChart = ({
  data = [],
  label,
  totalAmount = 0,   
  colors = [],
  showTextAnchor = true,
}) => {
  return (
    <ResponsiveContainer width="100%" height={380}>
      <PieChart>
        <Pie
          data={data}
          dataKey="amount"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={130}
          innerRadius={100}
          labelLine={false}
        >
          {data.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colors[index % colors.length]}
            />
          ))}
        </Pie>

        {/* HOVER TOOLTIP (KEPT) */}
        <Tooltip content={<CustomTooltip />} />

        {/* LEGEND (KEPT) */}
        <Legend content={<CustomLegend />} />

        {/* CENTER TEXT */}
        {showTextAnchor && (
          <>
            {/* LABEL */}
            <text
              x="50%"
              y="50%"
              dy={-25}
              textAnchor="middle"
              fill="#666"
              fontSize="14px"
            >
              {label}
            </text>

            {/* TOTAL */}
            <text
              x="50%"
              y="50%"
              dy={8}
              textAnchor="middle"
              fill="#333"
              fontSize="24px"
              fontWeight="600"
            >
              ${Number(totalAmount).toLocaleString()}
            </text>
          </>
        )}
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
