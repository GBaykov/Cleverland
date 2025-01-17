import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BLACK70, DARK, WHITE } from '../../constants/styles';

export const FormLayout = styled.section`
padding: 48px 56px;
width: 100%;
max-width: 528px;
background: ${WHITE}
border-radius: 16px;
@media(max-width: 700px){
    max-width: 288px;
    padding: 24px 16px;
}
`;

export const RegAuthFormModal = styled.section`
  position: relative;
  width: 100%;
  max-width: 528px;
  padding: 48px 56px;
  background: ${WHITE};
  border-radius: 16px;

  className='recov';
   @media (max-width: 700px) {
    max-width: 288px;
    padding: 24px 16px;
  }
  &.centred {
    text-align: center;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
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
  &.recov {
    margin-top: 32px;
  }
  &.centred {
    text-align: center;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
  }
`;

export const StyledRegAuthForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  // gap: 32px;
  margin-bottom: 16px;
  button {
    margin-top: 32px;
  }
  &.centred {
    text-align: center;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 700px) {
    button {
      margin-top: 62px;
    }
  }
`;

export const HaveRecord = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-top: 16px;
  letter-spacing: 0.1px;
  color: ${BLACK70};
  display: flex;
  gap: 16px;
  @media (max-width: 700px) {
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    flex-direction: column;
    gap: 4px;
  }
  &.centred {
    text-align: center;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
  }
`;
export const LinkToAuthRegistration = styled(Link)`
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

export const StyledErrText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-top: 16px;
  letter-spacing: 0.1px;
  color: ${DARK};
  @media (max-width: 700px) {
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
  }
  &.centred {
    text-align: center;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
  }
`;
