

import React, { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import CustomBarChart from "../Charts/CustomBarChart";
import { prepareIncomeBarChartData } from "../../utils/helper";

const IncomeOverview = ({ transactions = [], onAddIncome }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareIncomeBarChartData(transactions);
    setChartData(result);
  }, [transactions]);

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <div className="">
          <h5 className="text-lg font-medium">Income Overview</h5>
          <p className="text-sm text-gray-500 mt-0.5">
            Track your earnings over time and analyze your income trends.
          </p>
        </div>

        <button
          className="flex items-center gap-2 add-btn"
          onClick={onAddIncome}
        >
          <LuPlus className="text-lg" />
          Add Income
        </button>
      </div>

      {/* BAR CHART */}
      <div className=" mt-10">
        <CustomBarChart 
        data = {chartData} />
      </div>
    </div>
  );
};

export default IncomeOverview;
