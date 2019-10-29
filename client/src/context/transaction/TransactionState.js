import React, { useReducer } from 'react';
import axios from 'axios';
import TransactionContext from './transactionContext';
import transactionReducer from './transactionReducer';
import {
  GET_TRANSACTIONS,
  ADD_TRANSACTION,
  UPDATE_TRANSACTION,
  DELETE_TRANSACTION,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_TRANSACTIONS,
  CLEAR_FILTER,
  TRANSACTION_ERROR,
  CLEAR_TRANSACTIONS
} from '../types';

const TransactionState = props => {
  const initialState = {
    transactions: null,
    current: null,
    filter: null,
    error: null
  };

  const [state, dispatch] = useReducer(transactionReducer, initialState);

  // Get Transactions
  const getTransactions = async () => {
    try {
      const res = await axios.get('/api/transactions');

      dispatch({
        type: GET_TRANSACTIONS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: TRANSACTION_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Add Transaction
  const addTransaction = async transaction => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/transactions', transaction, config);
      dispatch({
        type: ADD_TRANSACTION,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: TRANSACTION_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Clear Transactions
  const clearTransactions = () => {
    dispatch({ type: CLEAR_TRANSACTIONS });
  };

  // Set Current Transaction
  const setCurrent = transaction => {
    dispatch({ type: SET_CURRENT, payload: transaction });
  };

  // Clear Current Transaction
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter Transactions
  const filterTransactions = text => {
    dispatch({ type: FILTER_TRANSACTIONS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        current: state.current,
        filter: state.filter,
        error: state.error,
        getTransactions,
        addTransaction,
        clearTransactions,
        setCurrent,
        clearCurrent,
        filterTransactions,
        clearFilter
      }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
};

export default TransactionState;
