import styled from 'styled-components';

import Box from '../Box';

export default styled.div`
  background: #ffffff;
  box-shadow: 0 0 0.25rem 0 rgba(172, 172, 172, 0.5);
  border-radius: 0.31rem;

  > ${Box} {
    &:last-child {
      background: none;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;
