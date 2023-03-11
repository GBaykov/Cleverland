import { ButtonProps, StyledButton } from './styled';

export const Button = ({ width, isPrimary, height, text, type }: ButtonProps) => (
  <StyledButton type={type} isPrimary={isPrimary} width={width} height={height} text={text}>
    {' '}
    {text}
  </StyledButton>
);
