import styled from 'styled-components';

export default styled.div`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
`;

export const ShareWindow = styled.div`
  position: absolute;
  top: -2.7rem;
  right: 0;
  padding: 0.8rem 2rem;
  background: #ffff;
  box-shadow: 0 0 1rem 8px rgba(172, 172, 172, 0.5);
  border-radius: 0.31rem;
  transition: all 0.25s;

  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  opacity: ${props => (props.visible ? 1 : 0)};
`;
