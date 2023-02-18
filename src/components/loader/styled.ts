import styled from 'styled-components';

export const LoaderContainer = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  width: 100%;
  min-height: 100%;
  scroll: none;
  z-index: 12;

  background: rgba(54, 54, 54, 0.3);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Spinner = styled.p`
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: rotate 1.5s infinite linear;
`;
