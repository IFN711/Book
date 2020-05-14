import styled from 'styled-components';

const dimensions = {
  small: 2.5,
  big: 4.37,
};

export default styled.img`
  width: ${props => dimensions[props.size]}rem;
  height: ${props => dimensions[props.size]}rem;
  object-fit: cover;
  border-radius: 50%;
`;
