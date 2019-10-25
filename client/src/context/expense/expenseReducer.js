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

export default (state, action) => {
  switch (action.type) {
    case GET_EXPENSES:
      return {
        ...state,
        expenses: action.payload
      };
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [action.payload, ...state.expenses]
      };
    case EXPENSE_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
