import styled from 'styled-components';
import { DARK, WHITE } from '../../constants/styles';

export const FormLayout = styled.section`
padding: 48px 56px;
width: 100%;
max-width: 528px;
background: ${WHITE}
border-radius: 16px;
@media(max-width: 600px){
    max-width: 288px;
    padding: 24px 16px;
}
`;

export const RegAuthFormModal = styled.section`
  width: 100%;
  max-width: 528px;
  padding: 48px 56px;
  background: ${WHITE};
  border-radius: 16px;
  @media (max-width: 600px) {
    max-width: 288px;
    padding: 24px 16px;
  }
`;

export const RegAuthTitle = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.1px;
  color: ${DARK};
  margin-bottom: 32px;
`;

export const StyledRegAuthForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 16px;
`;
