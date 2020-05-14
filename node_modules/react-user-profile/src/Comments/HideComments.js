import styled from 'styled-components';

export default styled.div`
  text-align: center;
  margin-bottom: 1rem;

  @media only screen and (min-width: 500px) {
    text-align: left;
  }
`;

export const Button = styled.button`
  padding: 0;
  cursor: pointer;
  text-decoration: underline;
  font-size: 0.88rem;
  color: #ffa640;
  background: none;
  border: none;
`;
