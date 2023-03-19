import { ButtonProps } from '../../types/button';
import { StyledButton } from './styled';

export const registrationBtns = ['Следующий шаг', 'Последний шаг', 'Зарегистрироваться'];

export const Button = ({ width, isPrimary, height, text, type, isDisabled }: ButtonProps) => (
  <StyledButton disabled={isDisabled} type={type} isPrimary={isPrimary} width={width} height={height} text={text}>
    {' '}
    {text}
  </StyledButton>
);
