import React, { forwardRef, ReactNode, useState } from 'react';
import { FieldError, UseFormClearErrors, UseFormRegister } from 'react-hook-form/dist/types';
import {
  AllPossiblerFields,
  AuthFormValues,
  ClearErrors,
  FormInputType,
  InputType,
  RegistrationFormValues,
} from '../../types/forms';
import { InputIcon, InputLabel, InputWrapper, StyledInput } from './styled';
import check from '../../assets/icons/check.svg';
import eyeClosed from '../../assets/icons/EyeClosed.svg';
import eyeOpen from '../../assets/icons/eyeOpen.svg';

type InputreturnType = ReturnType<UseFormRegister<UseFormClearErrors<AllPossiblerFields>>>;
// type ClearErrors = UseFormClearErrors<RegistrationFormValues > | UseFormClearErrors< AuthFormValues>
export const FormsInput = forwardRef<
  HTMLInputElement,
  {
    label: string;
    type: InputType;
    error?: FieldError;
    watchName: string;
    clearErrors: UseFormClearErrors<AllPossiblerFields>;
  } & InputreturnType
>(({ name, disabled, label, onBlur, onChange, isChecked, type, error, watchName, clearErrors }: FormInputType, ref) => {
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const isInputpassword = name === 'password';

  const typeInputValue = isInputpassword && isEyeOpen ? 'text' : isInputpassword ? 'password' : 'text';
  console.log(error?.message as string);

  return (
    <>
      <InputWrapper>
        <StyledInput
          ref={ref}
          name={name}
          required={true}
          type={typeInputValue}
          onFocus={() => clearErrors && clearErrors(name)}
          onBlur={onBlur}
          title=' '
        />
        <InputLabel>{label}</InputLabel>
        {isChecked && isInputpassword && (
          <InputIcon className='checkicon' src={check} alt='iconCheck' data-test-id='checkmark' />
        )}
        {!!isInputpassword && isEyeOpen && (
          <InputIcon src={eyeOpen} alt='eyeOpen' onClick={() => setIsEyeOpen(false)} />
        )}
        {!!isInputpassword && !isEyeOpen && (
          <InputIcon src={eyeClosed} alt='eyeClosed' onClick={() => setIsEyeOpen(true)} />
        )}
      </InputWrapper>
      {error && <p>{error?.message as string}</p>}
    </>
  );
});
