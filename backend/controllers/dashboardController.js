import Income from "../models/Income.js";
import Expense from "../models/Expense.js";
import { Types } from "mongoose";

// DASHBOARD DATA
export const getDashboardData = async (req, res) => {
    try {
        const userId = req.user._id;
        const userObjectId = new Types.ObjectId(String(userId));

        // TOTAL INCOME
        const totalIncomeAgg = await Income.aggregate([
            { $match: { userId: userObjectId } },
            { $group: { _id: null, total: { $sum: "$amount" } } },
        ]);

        const totalIncome = totalIncomeAgg[0]?.total || 0;

        // TOTAL EXPENSES
        const totalExpensesAgg = await Expense.aggregate([
            { $match: { userId: userObjectId } },
            { $group: { _id: null, total: { $sum: "$amount" } } },
        ]);

        const totalExpenses = totalExpensesAgg[0]?.total || 0;

        // LAST 60 DAYS INCOME
        const last60DaysIncome = await Income.find({
            userId,
            date: { $gte: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000) },
        }).sort({ date: -1 });

        const incomeLast60Days = last60DaysIncome.reduce(
            (sum, item) => sum + item.amount,
            0
        );

        // LAST 30 DAYS EXPENSES
        const last30DaysExpenses = await Expense.find({
            userId,
            date: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
        }).sort({ date: -1 });

        const expenseLast30Days = last30DaysExpenses.reduce(
            (sum, item) => sum + item.amount,
            0
        );

        // LAST 5 TRANSACTIONS (INCOME + EXPENSE)
        const lastTransactions = [
            ...last60DaysIncome
                .map((txn) => ({
                    ...txn.toObject(),
                    type: "income",
                }))
                .slice(0, 5),

            ...last30DaysExpenses
                .map((txn) => ({
                    ...txn.toObject(),
                    type: "expense",
                }))
                .slice(0, 5),
        ].sort((a, b) => b.date - a.date);

        return res.json({
            totalBalance: totalIncome - totalExpenses,
            totalIncome,
            totalExpenses,
            last30DaysExpenses: {
                total: expenseLast30Days,
                transactions: last30DaysExpenses,
            },
            last60DaysIncome: {
                total: incomeLast60Days,
                transactions: last60DaysIncome,
            },
            recentTransactions: lastTransactions,
        });
    } catch (error) {
        console.error("Dashboard Error:", error);
        return res.status(500).json({ message: "Server Error", error });
    }
};
