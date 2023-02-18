import styled from 'styled-components';
import { DARK } from '../../constants/styles';

export const NotificationContainer = styled.div`
  background-color: #feebea;
  border: 1.5px solid #f42c4f;
  border-radius: 5px;
  position: fixed;
  z-index: 12;
  width: 100%;
  color: ${DARK};
  display: flex;

  top: 64px;
  left: 65px;
  max-width: 1100px;
  padding: 24px 32px;

  span {
    margin-left: 28px;
  }

  @media (max-width: 1250px) {
    top: 62px;
    left: 64px;
    max-width: 640px;
    padding: 24px 32px;
    span {
      margin-left: 15px;
    }
  }
  @media (max-width: 766px) {
    align-items: flex-start;
    top: 56px;
    left: 20px;
    max-width: 280px;
    padding: 12px 16px;
    span {
      margin-left: 12px;
      max-width: 186px;
    }
  }
`;
export const NotiIco = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  // flex-direction: column;
  background: #f42c4f;
  border: 1.5px solid #f42c4f;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  color: white;
`;

export const NotificationCross = styled.p`
  cursor: pointer;
  margin-left: auto;
  svg {
    fill: ${DARK};
  }
`;
