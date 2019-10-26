const express = require('express');
const router = express.Router();

const Transaction = require('../models/Transaction');

// @route   GET api/transactions
// @desc    Get all transactions
// @access  Public
router.get('/', async (req, res) => {
  // console.log(req.transaction.name);
  try {
    const transactions = await Transaction.find({
      transaction: req.transaction
    }).sort({
      date: -1
    });
    res.json(transactions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/transactions
// @desc    Add new transactions
// @access  Public
router.post('/', async (req, res) => {
  const { name, cost, date } = req.body;
  try {
    const newTransaction = new Transaction({
      name,
      cost,
      date
    });

    const transaction = await newTransaction.save();
    res.json(transaction);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/transactions
// @desc    Update new transactions
// @access  Public
router.put('/', (req, res) => {
  res.send('Update Transaction');
});

// @route   DELETE api/transactions
// @desc    Delete new transactions
// @access  Public
router.delete('/', (req, res) => {
  res.send('Delete Transaction');
});

module.exports = router;
