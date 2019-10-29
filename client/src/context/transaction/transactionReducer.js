import {
  GET_TRANSACTIONS,
  ADD_TRANSACTION,
  UPDATE_TRANSACTION,
  DELETE_TRANSACTION,
  FILTER_TRANSACTIONS,
  CLEAR_TRANSACTIONS, // FIX LATER
  SET_CURRENT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  TRANSACTION_ERROR
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
        loading: false
      };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
        loading: false
      };
    case UPDATE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.map(transaction =>
          transaction.id === action.payload._id ? action.payload : transaction
        ),
        loading: false
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction._id !== action.payload
        ),
        loading: false
      };
    case CLEAR_TRANSACTIONS:
      return {
        ...state,
        transactions: null,
        filter: null,
        error: null,
        current: null
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case FILTER_TRANSACTIONS:
      return {
        ...state,
        filter: state.transactions.filter(transaction => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return (
            transaction.title.match(regex) ||
            transaction.description.match(regex)
          );
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filter: null
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
