import styled from 'styled-components';

export const ModalContainer = styled.div`
  // top: 0;
  // left: 0;
  // position: fixed;
  // width: 100%;
  // height: 100%;
  // z-index: 12;
  // background: rgba(54, 54, 54, 0.3);
  // backdrop-filter: blur(10px);
  // display: flex;
  // justify-content: center;
  // align-items: center;

  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(54, 54, 54, 0.3);
  z-index: 100;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  backdrop-filter: blur(10px);
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
