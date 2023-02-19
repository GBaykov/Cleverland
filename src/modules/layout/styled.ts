import styled from 'styled-components';

export const App = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  &.menuOpen {
    @media (max-width: 1100px) {
      // position: fixed;
      // overflow: hidden;
    }
  }
`;
