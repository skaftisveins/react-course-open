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
  FILTER_TRANSACTION,
  CLEAR_FILTER,
  TRANSACTION_ERROR,
  CLEAR_TRANSACTION
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
  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        current: state.current,
        filter: state.filter,
        getTransactions // TODO
      }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
};

export default TransactionState;
