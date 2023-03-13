import styled from 'styled-components';
import { BLACK10, BLACK5, BLACK20, DARK, HOVER, WHITE } from '../../constants/styles';

export type StyledButtomProp = {
  height?: number;
  width?: number;
  isPrimary: boolean;
  text: string;
};

export const StyledButton = styled.button<StyledButtomProp>`
  height: ${({ height }) => (height ? `${height}px` : '40px')};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  cursor: pointer;
  border-radius: 30px;
  border: ${({ isPrimary }) => (isPrimary ? `none` : `1px solid ${BLACK20}`)};
  color: ${({ isPrimary }) => (isPrimary ? `${WHITE}` : `${DARK}`)};
  background: ${({ isPrimary }) => (isPrimary ? `${HOVER}` : `${WHITE}`)};

  

  &:hover${({ isPrimary }) =>
    isPrimary
      ? `{
    border: 1px solid #FF740F;
    box-shadow: 0px 2px 5px rgba(54, 54, 54, 0.1);
}`
      : `{
    border: 1px solid #A7A7A7;
    box-shadow: 0px 2px 5px rgba(54, 54, 54, 0.1);
}`} ;

  &:active${({ isPrimary }) =>
    isPrimary
      ? `{
    border: 1px solid #BFC4C9;
    box-shadow: 0px 3px 4px rgba(222, 125, 11, 0.2), 0px 1px 10px rgba(249, 89, 8, 0.2);
}`
      : `{
    border: 1px solid #BFC4C9;
    box-shadow: 0px 3px 4px rgba(222, 125, 11, 0.2), 0px 1px 10px rgba(249, 89, 8, 0.2);
}`} ;

   

  &[aria-disabled="true"], &:disabled, :disabled: ${({ isPrimary }) =>
    isPrimary
      ? `{
    background:${BLACK10};
}`
      : `{
    background:${BLACK5};
}`};

 ${({ disabled, isPrimary }) => (disabled && isPrimary ? `cursor: none; background:${BLACK10}` : ``)}
 ${({ disabled, isPrimary }) => (disabled && !isPrimary ? `cursor: none; background:${BLACK5}` : ``)}

`;
