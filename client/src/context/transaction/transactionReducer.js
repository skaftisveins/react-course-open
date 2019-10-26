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

export default (state, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload
      };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };
    case TRANSACTION_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
