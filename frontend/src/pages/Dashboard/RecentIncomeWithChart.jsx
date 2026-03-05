







import React, { useEffect, useState } from "react";
import CustomPieChart from "../../components/Charts/CustomPieChart";

const COLORS = ["#875CF5", "#FA2C37", "#4f39f6"];

const RecentIncomeWithChart = ({ data = [], totalIncome = 0 }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (!data.length) {
      setChartData([]);
      return;
    }

    setChartData(
      data.map((item) => ({
        name: item.source,
        amount: Number(item.amount),
      }))
    );
  }, [data]);

  return (
    <div className="card">
      <h5 className="text-lg font-medium mb-4">Last 60 Days Income</h5>

      <CustomPieChart
  data={chartData}
  label="Total Income"
  totalAmount={totalIncome}   
  colors={COLORS}
  showTextAnchor
/>



    </div>
  );
};

export default RecentIncomeWithChart;
