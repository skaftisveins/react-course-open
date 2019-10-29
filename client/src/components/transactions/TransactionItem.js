import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TransactionContext from '../../context/transaction/transactionContext';

// const StyledSpan = styled.span`
//   float: right;
//   color: ${props => (props.prof ? 'badge-success' : 'badge-primary')};
// `;

const TransactionItem = ({ transaction }) => {
  const transactionContext = useContext(TransactionContext);
  const { deleteTransaction, setCurrent, clearCurrent } = transactionContext;

  const { _id, title, description, cost, type } = transaction;

  const onDelete = () => {
    deleteTransaction(_id);
    clearCurrent();
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {title}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' + (type === 'expense' ? 'badge-danger' : 'badge-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {description && <li>{description}</li>}
        {cost && <li>{cost}</li>}
        {/* <i className='fas fa-envelope-open' />  */}
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrent(transaction)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

TransactionItem.propTypes = {
  transaction: PropTypes.object.isRequired
};

export default TransactionItem;
