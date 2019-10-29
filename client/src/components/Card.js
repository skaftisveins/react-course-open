import React, { Fragment, useContext, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TransactionContext from '../context/transaction/transactionContext';

import { themeContext } from '../context/theme/themeContext';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 260px;
  height: 100px;
  border-style: solid;
  border-color: #09d3ff;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;
  position: relative;
  background-color: ${props => props.theme.background};
`;

const Label = styled.label`
  display: flex;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  align-self: flex-end;
  display: flex;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const Card = props => {
  const transactionContext = useContext(TransactionContext);
  const { transactions, filter, getTransactions } = transactionContext;
  console.log(transactions);
  const { list, onDelete } = props;

  // useEffect(() => {
  //   getTransactions();
  // }, []);

  // if (transactions !== null && transactions.length === 0) {
  //   return <h4>Please add an transaction</h4>;
  // }

  return (
    <>
      {list.map(item => (
        <themeContext.Consumer>
          {themeState => (
            <Wrapper key={item.id}>
              <Label>Name: {item.name}</Label>
              <Label>Cost: {item.cost}</Label>

              <ButtonWrapper>
                <button
                  name="delete"
                  type="button"
                  onClick={() => onDelete(item)}
                >
                  <span role="img" aria-label="delete">
                    ✖
                  </span>
                </button>
              </ButtonWrapper>
            </Wrapper>
          )}
        </themeContext.Consumer>
      ))}
    </>
  );
};

// Card.prototypes = {
//   list: PropTypes.arryOf(PropTypes.string)
// };

// Card.defaultProps = {
//   list: []
// };

export default Card;
