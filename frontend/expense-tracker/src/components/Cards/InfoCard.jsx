import React from 'react'

const InfoCard = ({ icon, label, color, value }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md">
      
      {/* Icon Wrapper */}
      <div className={`w-14 h-14 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}>
        {icon}
      </div>

      {/* Text Section  */}
      <div>
        <h6 className="text-sm text-gray-500 font-medium mb-1">{label}</h6>
        <span className="text-xl font-semibold">${value}</span>
      </div>

    </div>
  );
};

export default InfoCard;
