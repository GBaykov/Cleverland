import { DataTestId } from '../../../constants/data-test-ids';
import { ErrorMessages } from '../../../types/messages';
import { ErrorPart, StyledHint } from './styled';

type HintErrorProps = {
  errors: string[];
  hintType: string;
  isFullError?: boolean;
  shouldShowError: boolean;
};

export const HintError = ({ errors, hintType, isFullError, shouldShowError }: HintErrorProps) => {
  const highlight = (errMessage: string) => {
    if (errors.includes(errMessage) && shouldShowError) {
      return 'highlight';
    }
    return '';
  };
  const fullColored = () => {
    if (isFullError) {
      return 'fullColored';
    }
    return '';
  };

  return (
    <>
      {hintType === 'password' && (
        <StyledHint className={fullColored()} data-test-id={DataTestId.Hint}>
          Пароль <ErrorPart className={highlight(ErrorMessages.minEightChars)}>не менее 8 символов</ErrorPart>,{' '}
          <ErrorPart className={highlight(ErrorMessages.withUpperLater)}>с заглавной буквой</ErrorPart> и{' '}
          <ErrorPart className={highlight(ErrorMessages.withNumber)}>цифрой</ErrorPart>
        </StyledHint>
      )}
      {hintType === 'username' && (
        <StyledHint className={fullColored()} data-test-id={DataTestId.Hint}>
          Используйте для логина <ErrorPart className={highlight('латинский алфавит')}>латинский алфавит</ErrorPart> и{' '}
          <ErrorPart className={highlight('цифры')}>цифры</ErrorPart>
        </StyledHint>
      )}
    </>
  );
};
