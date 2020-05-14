import styled from 'styled-components';

export default styled.ul`
  width: 100%;
  margin: 0;
  padding: 0 0.5rem 0 0;
  list-style-type: none;
  max-height: 27rem;
  text-align: left;
  overflow-y: auto;

  ::-webkit-scrollbar-button {
    display: none;
    height: 0.3rem;
  }
  ::-webkit-scrollbar-button:hover {
    background-color: #aaa;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 44, 113, 0.12);
    border-radius: 6.25rem;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 44, 113, 0.3);
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(216, 216, 216, 0.3);
    border-radius: 6.25rem;
  }
  ::-webkit-scrollbar-track:hover {
    background-color: rgba(216, 216, 216, 0.5);
  }
  ::-webkit-scrollbar {
    width: 0.3rem;
  }
`;
