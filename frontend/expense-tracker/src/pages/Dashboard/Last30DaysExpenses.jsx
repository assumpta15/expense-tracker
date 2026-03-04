import React, { useEffect, useState } from 'react'
import { prepareExpenseBarChartData } from '../../utils/helper';
import CustomBarChart from '../../components/Charts/CustomBarChart';

const Last30DaysExpenses = ({data}) => {
    
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const result = prepareExpenseBarChartData(data);
        setChartData(result);
    }, [data])
  return (
    // <div className='card col-span-1 '>
    //     <div className='flex items-center justify-between'>
    //         <h5 className='text-lg'>Last 30 Days Expenses</h5>
    //     </div>
      

    //   <CustomBarChart data = {chartData} />
    // </div>



    <div className="card col-span-1">
  <div className="flex items-center justify-between">
    <h5 className="text-lg">Last 30 Days Expenses</h5>
  </div>

  <div className="h-[300px] mt-4">
    {chartData.length > 0 ? (
      <CustomBarChart data={chartData} />
    ) : (
      <p className="text-sm text-gray-400">No expense data yet</p>
    )}
  </div>
</div>

  )
}

export default Last30DaysExpenses
