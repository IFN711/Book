import styled from 'styled-components';

import Photo from '../Photo';

export const Wrapper = styled.div`
  @media only screen and (max-width: 499px) {
    ${Photo} {
      margin-top: -40%;
      transform: translateY(-15%);
    }
  }

  @media only screen and (min-width: 500px) {
    display: flex;
    align-items: center;
    text-align: left;

    ${Photo} {
      margin-right: 1.5rem;
    }
  }
`;

export const Title = styled.div`
  font-size: 1.13rem;
  color: #002c71;
  font-weight: 500;
`;

export const Subtitle = styled.div`
  font-size: 0.75rem;
  color: #8298b9;
`;
