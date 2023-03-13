import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BLACK40, BLACK70, DARK, NEGATIVE, WHITE } from '../../../constants/styles';

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
