import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 180px;
  height: 40px;
  background-color: #000000;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const Card = props => {
  const { list } = props;

  console.log(list);
  return (
    <>
      {list.map(item => (
        <Wrapper>{item}</Wrapper>
      ))}
    </>
  );
};

export default Card;
