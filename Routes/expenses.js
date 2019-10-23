const express = require('express');
const router = express.Router();

// @route   GET api/expenses
// @desc    Get all expenses
// @access  Private
router.get('/', (req, res) => {
  res.send('Get all expenses');
});

// @route   POST api/expenses
// @desc    Add new expenses
// @access  Private
router.post('/', (req, res) => {
  res.send('Add Expense');
});

// @route   PUT api/expenses
// @desc    Update new expenses
// @access  Private
router.put('/', (req, res) => {
  res.send('Update Expense');
});

// @route   DELETE api/expenses
// @desc    Delete new expenses
// @access  Private
router.delete('/', (req, res) => {
  res.send('Delete Expense');
});

module.exports = router;
