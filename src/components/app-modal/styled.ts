import styled from 'styled-components';
import { WHITE } from '../../constants/styles';
export const OverlayForModal = styled.div<{ isShow: boolean }>`
  // z-index: 100;
  // display: ${(props) => (props.isShow ? 'flex' : 'none')};
  // justify-content: center;
  // backdrop-filter: blur(10px);
  // align-items: center;

  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 12;
  background: rgba(54, 54, 54, 0.3);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalCont = styled.div`
  width: 528px;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  background-color: ${WHITE};
  @media (max-width: 600px) {
    width: 288px;
  }
`;
