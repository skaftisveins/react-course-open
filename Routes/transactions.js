const express = require('express');
const router = express.Router();

const Transaction = require('../models/Transaction');

// @route   GET api/transactions
// @desc    Get all transactions
// @access  Public
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find({
      transaction: req.transactions
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
  const { title, description, cost, type } = req.body;
  try {
    const newTransaction = new Transaction({
      title,
      description,
      cost,
      type
    });

    await newTransaction.save();
    res.json(newTransaction);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/transactions
// @desc    Update new transactions
// @access  Public
router.put('/:id', async (req, res) => {
  const { title, description, cost, type } = req.body;

  // Build contact object
  const transactionFields = {};
  if (title) transactionFields.title = title;
  if (description) transactionFields.description = description;
  if (cost) transactionFields.cost = cost;
  if (type) transactionFields.type = type;

  try {
    let transaction = await Transaction.findById(req.params.id);

    if (!transaction)
      return res.status(404).json({ msg: 'Transaction not found' });

    // // Make sure user owns contact
    // if (contact.user.toString() !== req.user.id) {
    //   return res.status(401).json({ msg: 'Not authorized' });
    // }

    transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      { $set: transactionFields },
      { new: true }
    );

    res.json(transaction);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/transactions
// @desc    Delete new transactions
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    let transaction = await Transaction.findById(req.params.id);

    if (!transaction)
      return res.status(404).json({ msg: 'Transaction not found' });

    // // Make sure user owns contact
    // if (contact.user.toString() !== req.user.id) {
    //   return res.status(401).json({ msg: 'Not authorized' });
    // }

    await Transaction.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Transaction removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
