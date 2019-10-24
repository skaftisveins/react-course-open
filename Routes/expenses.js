const express = require('express');
const router = express.Router();

const Expenses = require('../models/Expenses');

// @route   GET api/expenses
// @desc    Get all expenses
// @access  Public
router.get('/', (req, res) => {
  try {
    // const expenses = await Expenses
  } catch (err) {}
  res.send('Get all expenses');
});

// @route   POST api/expenses
// @desc    Add new expenses
// @access  Public
router.post('/', (req, res) => {
  res.send('Add Expense');
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
