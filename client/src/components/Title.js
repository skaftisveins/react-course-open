import styled from 'styled-components';

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 300;
  margin: auto;
  color: ${props => (props.main ? 'hotpink' : 'white')};
  background-color: black;
  text-align: center;
  vertical-align: top;
`;
export default Title;
