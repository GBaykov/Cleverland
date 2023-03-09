import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BLACK70, DARK, WHITE } from '../../../constants/styles';

export const AuthFormModal = styled.section`
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

export const AuthTitle = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.1px;
  color: ${DARK};
  margin-bottom: 32px;
`;

export const StyledAuthForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;
export const HaveNoRecord = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-top: 16px;
  letter-spacing: 0.1px;
  color: ${BLACK70};
  display: flex;
  gap: 16px;
  @media (max-width: 600px) {
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    flex-direction: column;
    gap: 4px;
  }
`;
export const LinkToRegistration = styled(Link)`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: ${DARK};
  img {
    margin-left: 12px;
  }
`;
