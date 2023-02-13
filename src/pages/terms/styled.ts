import styled from 'styled-components';
import { DARK } from '../../constants/styles';

export const TermsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (max-width: 600px) {
    gap: 24x;
  }
`;
export const TermsHead = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.1px;
  color: ${DARK};
  @media (max-width: 600px) {
    font-size: 18px;
    line-height: 28px;
  }
`;

export const FirstLevel = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  color: #363636;
`;
export const SecondLevel = styled.div`
  padding-left: 30px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #363636;
  div {
    padding-left: 30px;
    div {
      padding-left: 30px;
      div {
        padding-left: 30px;
        div {
          padding-left: 30px;
        }
      }
    }
  }
`;
