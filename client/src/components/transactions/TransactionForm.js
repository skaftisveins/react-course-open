import React, { useState, useContext, useEffect } from 'react';
import TransactionContext from '../../context/transaction/transactionContext';

const TransactionForm = () => {
  const transactionContext = useContext(TransactionContext);

  const {
    addTransaction,
    updateTransaction,
    clearCurrent,
    current
  } = transactionContext;

  useEffect(() => {
    if (current !== null) {
      setTransaction(current);
    }
  }, [transactionContext, current]);

  const [transaction, setTransaction] = useState({
    title: '',
    description: '',
    cost: '',
    type: 'expense'
  });

  const { title, description, cost, type } = transaction;

  const handleChange = e => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addTransaction(transaction);
    } else {
      updateTransaction(transaction);
    }
    setTransaction({
      title: '',
      description: '',
      cost: '',
      type: 'expense'
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-primary">
        {current ? 'Edit Transaction' : 'Add Transaction'}
      </h2>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={title}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="description"
        name="description"
        value={description}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="cost"
        name="cost"
        value={cost}
        onChange={handleChange}
      />
      <h5>Transaction Type</h5>
      <input
        type="radio"
        name="type"
        value="expense"
        checked={type === 'expense'}
        onChange={handleChange}
      />
      Expense{' '}
      <input
        type="radio"
        name="type"
        value="income"
        checked={type === 'income'}
        onChange={handleChange}
      />
      Income{' '}
      <div>
        <input
          type="submit"
          value={current ? 'Update Transaction' : 'Add Transaction'}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default TransactionForm;
