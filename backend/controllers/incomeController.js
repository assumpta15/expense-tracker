import Income from "../models/Income.js";
import * as xlsx from "xlsx";

// ADD INCOME
export const addIncome = async (req, res) => {
    try {
        const { icon, source, amount, date } = req.body;

        if (!source || !amount) {
            return res.status(400).json({ message: "Source and amount are required" });
        }

        const income = await Income.create({
            userId: req.user._id,
            icon,
            source,
            amount,
            date: date || Date.now(),
        });

        return res.status(201).json({ message: "Income added", income });
    } catch (error) {
        return res.status(500).json({ message: "Error adding income", error: error.message });
    }
};

// GET ALL INCOME
export const getAllIncome = async (req, res) => {
    try {
        const incomes = await Income.find({ userId: req.user._id }).sort({ createdAt: -1 });
        return res.status(200).json(incomes);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching incomes", error: error.message });
    }
};

// DELETE INCOME
export const deleteIncome = async (req, res) => {
    try {
        await Income.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "Income deleted" });
    } catch (error) {
        return res.status(500).json({ message: "Error deleting income", error: error.message });
    }
};

// DOWNLOAD EXCEL
export const downloadIncomeExcel = async (req, res) => {
    try {
        const userId = req.user._id;

        const incomes = await Income.find({ userId }).sort({ date: -1 });

        const data = incomes.map((item) => ({
            Source: item.source,
            Amount: item.amount,
            Date: item.date.toISOString().split("T")[0],
        }));

        const workbook = xlsx.utils.book_new();
        const worksheet = xlsx.utils.json_to_sheet(data);

        xlsx.utils.book_append_sheet(workbook, worksheet, "Income");

        const filePath = "income_details.xlsx";
        xlsx.writeFile(workbook, filePath);

        return res.download(filePath);
    } catch (error) {
        return res.status(500).json({ message: "Server Error", error: error.message });
    }
};
