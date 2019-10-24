import React, { useReducer } from 'react';
import axios from 'axios';
import ExpenseContext from './expenseContext';
import expenseReducer from './expenseReducer';
import {
  GET_EXPENSES,
  ADD_EXPENSE,
  UPDATE_EXPENSE,
  DELETE_EXPENSE,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_EXPENSE,
  CLEAR_FILTER,
  EXPENSE_ERROR,
  CLEAR_EXPENSE
} from '../types';

const ExpenseState = props => {
  const initialState = {
    expenses: null,
    current: null,
    filter: null,
    error: null
  };

  const [state, dispatch] = useReducer(expenseReducer, initialState);

  // Get Expenses
  const getExpenses = async () => {
    try {
      const res = await axios.get('/api/expenses');

      dispatch({
        type: GET_EXPENSES,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: EXPENSE_ERROR,
        payload: err.response.msg
      });
    }
  };
  return (
    <ExpenseContext.Provider
      value={{
        expenses: state.expenses,
        current: state.current,
        filter: state.filter,
        getExpenses
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseState;
