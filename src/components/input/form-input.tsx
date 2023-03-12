import React, { forwardRef, useState } from 'react';
import { FieldError, UseFormClearErrors, UseFormRegister } from 'react-hook-form/dist/types';
import { AllPossiblerFields, FormInputType, InputType } from '../../types/forms';
import { InputIcon, InputLabel, InputWrapper, StyledInput, StyledMask } from './styled';
import check from '../../assets/icons/check.svg';
import eyeClosed from '../../assets/icons/EyeClosed.svg';
import eyeOpen from '../../assets/icons/eyeOpen.svg';
import { HintError } from '../form/hint';
import { StyledHint } from '../form/hint/styled';

type InputreturnType = ReturnType<UseFormRegister<UseFormClearErrors<AllPossiblerFields>>>;
export const FormsInput = forwardRef<
  HTMLInputElement,
  {
    label: string;
    type: InputType;
    error?: FieldError;
    watchName: string;
    clearErrors: UseFormClearErrors<AllPossiblerFields>;
  } & InputreturnType
>(
  (
    {
      name,
      disabled,
      label,
      onBlur,
      onChange,
      isChecked,
      type,
      error,
      watchName,
      clearErrors,
      isFullError,
      errors,
      isInputAuth,
      mask,
    }: FormInputType,
    ref
  ) => {
    const [isEyeOpen, setIsEyeOpen] = useState(false);
    const isInputpassword = name === 'password';
    const isInputPhone = name === 'phone';
    const isRegularError =
      (!errors && error?.message && !isInputPhone) ||
      (errors && error?.message && error.type === 'required' && !isInputPhone);

    const typeInputValue = isInputpassword && isEyeOpen ? 'text' : isInputpassword ? 'password' : 'text';

    const errorNotDisplayed = () => {
      if (!isInputAuth) {
        return 'notDisplayed';
      }
      return '';
    };

    const bordeError = error?.message ? 'borderError' : '';
    return (
      <InputWrapper>
        {mask ? (
          <StyledMask
            className={bordeError}
            type={isEyeOpen ? 'text' : type}
            maskChar='x'
            mask={mask}
            // {...register}
            alwaysShowMask={!error?.message && !watchName && !isInputPhone}
            onFocus={() => clearErrors && clearErrors()}
          />
        ) : (
          <StyledInput
            className={bordeError}
            ref={ref}
            name={name}
            required={true}
            type={typeInputValue}
            onFocus={() => clearErrors && clearErrors(name)}
            onBlur={onBlur}
            title=' '
          />
        )}

        <InputLabel>{label}</InputLabel>

        {errors && error?.type !== 'required' && (
          <HintError shouldShowError={!!watchName} errors={errors} hintType={name} isFullError={isFullError} />
        )}

        {isRegularError && <StyledHint className={errorNotDisplayed()}>{error.message}</StyledHint>}

        {isInputPhone && (
          <StyledHint className={errorNotDisplayed()}>
            {error?.message ? error.message : 'В формате +375 (xx) xxx-xx-xx'}
          </StyledHint>
        )}

        {isInputpassword && isChecked && (
          <InputIcon className='checkicon' src={check} alt='iconCheck' data-test-id='checkmark' />
        )}
        {!!isInputpassword && isEyeOpen && (
          <InputIcon src={eyeOpen} alt='eyeOpen' onClick={() => setIsEyeOpen(false)} />
        )}
        {!!isInputpassword && !isEyeOpen && (
          <InputIcon src={eyeClosed} alt='eyeClosed' onClick={() => setIsEyeOpen(true)} />
        )}
      </InputWrapper>
    );
  }
);
