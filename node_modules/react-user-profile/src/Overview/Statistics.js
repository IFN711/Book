import styled from 'styled-components';

import Button from '../Button';

export const Wrapper = styled.div`
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: repeat(5fr);
  grid-gap: 1.4rem 0;
  text-align: left;

  @media only screen and (max-width: 499px) {
    ${Button} {
      grid-column: 1/6;
    }
  }

  @media only screen and (min-width: 500px) {
    grid-template-columns: repeat(9, 1fr);

    ${Button} {
      grid-column: 7/10;
    }
  }
`;

export const Entry = styled.div`
  ${props => props.left && 'margin-right: auto;'}
  ${props => props.center && 'margin: 0 auto;'}
  ${props => props.right && 'margin-left: auto;'}
  ${props => props.separator && 'width:1px; height: 100%; background: rgba(151, 151, 151, 0.1); margin: 0 auto;'}
`;

export const Value = styled.div`
  font-size: 1.5rem;
  color: #ffa640;
`;

export const Key = styled.div`
  font-size: 0.63rem;
  color: #343e00;
`;
