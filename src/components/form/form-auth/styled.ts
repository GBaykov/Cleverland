import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BLACK40, BLACK70, DARK, NEGATIVE, WHITE } from '../../../constants/styles';

// export const AuthFormModal = styled.section`
//   width: 100%;
//   max-width: 528px;
//   padding: 48px 56px;
//   background: ${WHITE};
//   border-radius: 16px;
//   @media (max-width: 600px) {
//     max-width: 288px;
//     padding: 24px 16px;
//   }
// `;

// export const AuthTitle = styled.p`
//   font-family: 'Montserrat';
//   font-style: normal;
//   font-weight: 700;
//   font-size: 24px;
//   line-height: 30px;
//   letter-spacing: 0.1px;
//   color: ${DARK};
//   margin-bottom: 32px;
// `;

// export const StyledAuthForm = styled.form`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 32px;
//   margin-bottom: 16px;
// `;

export const LinkToForgot = styled(Link)`
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  margin-left: 12px;
  color: ${BLACK40};
  margin-top: -16px;
  &.short {
    margin-top: -32px;
  }
`;

export const FormErrorMessage = styled.p`
  color: ${NEGATIVE};
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  margin-left: 12px;
`;
