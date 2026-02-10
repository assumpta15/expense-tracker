import Expense from "../models/Expense.js";
import * as xlsx from "xlsx";

// ADD EXPENSE
export const addExpense = async (req, res) => {
    try {
        const { icon, source, amount, date } = req.body;

        if (!source || !amount) {
            return res.status(400).json({ message: "Source and amount are required" });
        }

        const expense = await Expense.create({
            userId: req.user._id,
            icon,
            source,
            amount,
            date: date || Date.now(),
        });

        return res.status(201).json({ message: "Expense added", expense });
    } catch (error) {
        return res.status(500).json({ message: "Error adding expense", error: error.message });
    }
};

// GET ALL EXPENSES
export const getAllExpense = async (req, res) => {
    try {
        const expenses = await Expense.find({ userId: req.user._id }).sort({ createdAt: -1 });
        return res.status(200).json(expenses);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching expenses", error: error.message });
    }
};

// DELETE EXPENSE
export const deleteExpense = async (req, res) => {
    try {
        await Expense.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "Expense deleted" });
    } catch (error) {
        return res.status(500).json({ message: "Error deleting expense", error: error.message });
    }
};

// DOWNLOAD EXPENSE EXCEL
export const downloadExpenseExcel = async (req, res) => {
    try {
        const userId = req.user._id;

        const expenses = await Expense.find({ userId }).sort({ date: -1 });

        const data = expenses.map((item) => ({
            Source: item.source,
            Amount: item.amount,
            Date: item.date.toISOString().split("T")[0],
        }));

        const workbook = xlsx.utils.book_new();
        const worksheet = xlsx.utils.json_to_sheet(data);

        xlsx.utils.book_append_sheet(workbook, worksheet, "Expenses");

        const filePath = "expense_details.xlsx";
        xlsx.writeFile(workbook, filePath);

        return res.download(filePath);
    } catch (error) {
        return res.status(500).json({ message: "Server Error", error: error.message });
    }
};
