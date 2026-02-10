import React from "react";
import {
  LuUtensils,
  LuTrendingUp,
  LuTrendingDown,
  LuTrash2
} from "react-icons/lu";

const TransactionInfoCard = ({
  title,
  icon,
  date,
  amount,
  type,
  hideDeleteBtn,
  onDelete
}) => {
  const getAmountStyles = () => {
    return type === "income"
      ? "bg-green-50 text-green-500"
      : "bg-red-50 text-red-500";
  };

  return (
    <div className="group relative flex items-center justify-between gap-4 mt-2 p-3 rounded-lg bg-white border border-gray-200 hover:shadow-md transition-all">

      {/* ICON */}
      <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
        {React.isValidElement(icon) ? (
          <div className="text-2xl">{icon}</div>
        ) : (
          <LuUtensils className="text-2xl text-gray-800" />
        )}
      </div>

      {/* TITLE + DATE */}
      <div className="flex flex-col grow">
        <h6 className="font-semibold text-gray-700 text-sm">{title}</h6>
        <span className="text-xs text-gray-400 mt-1">{date}</span>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-2">
        {!hideDeleteBtn && (
          <button
            className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={onDelete}
          >
            <LuTrash2 className="text-lg" />
          </button>
        )}

        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-md ${getAmountStyles()}`}>
          <h6 className="text-sm font-medium">
            {type === "income" ? "+" : "-"} ${amount}
          </h6>
          {type === "income" ? <LuTrendingUp /> : <LuTrendingDown />}
        </div>
      </div>
    </div>
  );
};

export default TransactionInfoCard;
