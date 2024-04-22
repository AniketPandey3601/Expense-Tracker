const Expense = require('../models/expense');

exports.addExpense = async (req, res) => {
  try {
    const { price, description, category } = req.body;
    const newExpense = await Expense.create({ price, description, category });
    res.json(newExpense);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.json(expenses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};