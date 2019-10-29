import React, { useEffect, useContext, useRef } from 'react';
import TransactionContext from '../../context/transaction/transactionContext';

const TransactionFilter = () => {
  const transactionContext = useContext(TransactionContext);
  const text = useRef('');

  const { filterTransaction, filter, clearFilter } = transactionContext;

  useEffect(() => {
    if (filter === null) {
      text.current.value = '';
    }
  });

  const handleChange = e => {
    if (text.current.value !== '') {
      filterTransaction(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        type="text"
        ref={text}
        placeholder="Filter Transactions"
        onChange={handleChange}
      />
    </form>
  );
};

export default TransactionFilter;
