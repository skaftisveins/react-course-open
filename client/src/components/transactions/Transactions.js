import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TransactionItem from './TransactionItem';
import TransactionContext from '../../context/transaction/transactionContext';

const Transactions = () => {
  const transactionContext = useContext(TransactionContext);

  const { transactions, filter, getTransactions, loading } = transactionContext;

  useEffect(() => {
    getTransactions();
  }, []);

  if (transactions !== null && transactions.length === 0 && !loading)
    return <h4>Please add a transaction</h4>;

  return (
    <>
      {transactions !== null && !loading ? (
        <TransitionGroup>
          {filter !== null
            ? filter.map(transaction => (
                <CSSTransition
                  key={transaction._id}
                  timeout={500}
                  classNames='item'
                >
                  <TransactionItem transaction={transaction} />
                </CSSTransition>
              ))
            : transactions.map(transaction => (
                <CSSTransition
                  key={transaction._id}
                  timeout={500}
                  classNames='item'
                >
                  <TransactionItem transaction={transaction} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <></>
      )}
    </>
  );
};

export default Transactions;
