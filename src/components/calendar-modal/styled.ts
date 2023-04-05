import styled from 'styled-components';
import { ACCENT, BLACK5 } from '../../constants/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  padding: 48px 56px;
  margin: 0 auto;
  @media (max-width: 600px) {
    padding: 42px 16px 32px;
    gap: 24px;
  }
`;

export const CloseButtonContainer = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  cursor: pointer;
  background: ${BLACK5};
  border: none;
  outline: none;
  @media (max-width: 600px) {
    right: 8px;
    top: 8px;
  }
  & svg {
    width: 14px;
    height: 14px;
    & path {
      fill: ${ACCENT};
    }
  }
`;

export const Title = styled.h4`
  margin: 0 32px;
  font: 24px;
  text-align: center;
  @media (max-width: 600px) {
    margin: 0 24px;
    font: 18px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
