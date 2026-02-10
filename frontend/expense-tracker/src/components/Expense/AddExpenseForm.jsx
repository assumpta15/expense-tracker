import React, { useState } from "react";
import Input from "../Inputs/Input";
import EmojiPickerPopup from "../EmojiPickerPopup";


const AddExpenseForm = ({ onAddExpense }) => {

  console.log("onAddExpense value:", onAddExpense);

  const [income, setIncome] = useState({
    source: "",
    amount: 0,
    date: "",
    icon: "",
    
  });

  const handleChange = (key, value) =>
    setIncome({ ...income, [key]: value });

  return (
    <div> 
      <EmojiPickerPopup
        icon={income.icon}
        onSelect={(icon) => handleChange("icon", icon)}
      />

      <Input
        value={income.source}
        onChange={({ target }) =>
          handleChange("source", target.value)
        }
        label="source"
        placeholder="Rent, Groceries, etc"
        type="text"
      />

      <Input
        value={income.amount}
        onChange={({ target }) =>
          handleChange("amount", Number(target.value))
        }
        label="Amount"
        type="number"
      />

      <Input
        value={income.date}
        onChange={({ target }) =>
          handleChange("date", target.value)
        }
        label="Date"
        type="date"
      />


<div className="flex jusstify-end mt-6">
 <button
  type="button"
        className="add-btn add-btn-fill"
        onClick={() => onAddExpense(income)}
      >
        Add Expense
      </button>
</div>
      
    </div>
  );
};

export default AddExpenseForm;
