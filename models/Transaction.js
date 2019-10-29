const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  cost: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    default: 'expense'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('transaction', TransactionSchema);
