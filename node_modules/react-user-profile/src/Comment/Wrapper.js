import styled from 'styled-components';

import Photo from '../Photo';

export default styled.li`
  display: flex;
  padding: 2rem 0 1rem 0;
  font-size: 0.88rem;
  color: #444444;

  &:first-child {
    padding-top: 1rem;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #ebebeb;
  }

  strong {
    font-weight: 500;
    color: #002c71;
  }

  ${Photo} {
    margin-top: -30%;
  }

  > *:nth-child(2) {
    margin-left: 0.7rem;
  }
`;
