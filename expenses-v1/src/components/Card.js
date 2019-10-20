import React from 'react';
import styled from 'styled-components';

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
  const { list, onDelete } = props;

  return (
    <>
      {list.map(item => (
        <Wrapper key={item.id}>
          <Label>Name: {item.name}</Label>
          <Label>Cost: {item.cost}</Label>

          <ButtonWrapper>
            <button name='delete' type='button' onClick={() => onDelete(item)}>
              <span role='img' aria-label='delete'>
                ✖
              </span>
            </button>
          </ButtonWrapper>
        </Wrapper>
      ))}
    </>
  );
};

export default Card;
