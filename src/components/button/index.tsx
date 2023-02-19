import { IButton, StyledButton } from './styled';

export const Button = ({ width, isPrimary, height, text }: IButton) => (
  <StyledButton isPrimary={isPrimary} width={width} height={height} text={text}>
    {' '}
    {text}
  </StyledButton>
);
