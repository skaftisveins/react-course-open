const express = require('express');
const router = express.Router();

const Expense = require('../models/Expense');

// @route   GET api/expenses
// @desc    Get all expenses
// @access  Public
router.get('/', async (req, res) => {
  // console.log(req.expenses.date);
  try {
    const expenses = await Expense.find({ Expenses: req.expenses.name }).sort({
      date: -1
    });
    res.json(expenses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/expenses
// @desc    Add new expenses
// @access  Public
router.post('/', async (req, res) => {
  const { name, cost, date } = req.body;
  try {
    const newExpense = new Expense({
      name,
      cost,
      date
    });

    const expense = await newExpense.save();
    res.json(expense);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/expenses
// @desc    Update new expenses
// @access  Public
router.put('/', (req, res) => {
  res.send('Update Expense');
});

// @route   DELETE api/expenses
// @desc    Delete new expenses
// @access  Public
router.delete('/', (req, res) => {
  res.send('Delete Expense');
});

module.exports = router;
