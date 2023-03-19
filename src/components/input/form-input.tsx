import React, { forwardRef, useEffect, useState } from 'react';
import { FieldError, UseFormClearErrors, UseFormRegister } from 'react-hook-form/dist/types';
import { AllPossiblerFields, FormInputType, InputType } from '../../types/forms';
import { InputIcon, InputLabel, InputWrapper, StyledInput, StyledMask } from './styled';
import check from '../../assets/icons/check.svg';
import eyeClosed from '../../assets/icons/EyeClosed.svg';
import eyeOpen from '../../assets/icons/eyeOpen.svg';
import { HintError } from '../form/hint';
import { StyledHint } from '../form/hint/styled';
import { FormsInputPhone } from './input-phone';
import { ErrorMessages } from '../../types/messages';
import { DataTestId } from '../../constants/data-test-ids';

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
      onFocus,
      isChecked,
      type,
      error,
      watchName,
      clearErrors,
      shouldFullColorError,
      errors,
      isInputAuth,
      mask,
      register,
    }: FormInputType,
    ref
  ) => {
    const [isEyeOpen, setIsEyeOpen] = useState(false);
    const [isEyeVisible, setIsEyeVisible] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const isInputpassword = name === 'password';
    const isConfirmPassword = name === 'passwordConfirmation';
    const isInputPhone = name === 'phone';
    const isRegularError =
      (!errors && error?.message && !isInputPhone) ||
      (errors && error?.message && error.type === 'required' && !isInputPhone);

    const typeInputValue =
      (isInputpassword || isConfirmPassword) && isEyeOpen
        ? 'text'
        : isInputpassword || isConfirmPassword
        ? 'password'
        : 'text';
    const isPasswordOrConfirmPassword = watchName && (name === 'password' || name === 'passwordConfirmation');

    const emptyErr = () => {
      if (isInputAuth) {
        return 'fullColored';
      }
      return 'fullColored';
    };
    const phoneclass = () => {
      let classN = '';

      if (error?.message) {
        classN += ' fullColored';
      }
      return classN;
    };

    const bordeError = error?.message ? 'borderError' : '';

    const changeIsOpenEye = (e: MouseEvent) => {
      e.preventDefault();
      setIsEyeOpen(!isEyeOpen);
    };

    return (
      <InputWrapper>
        {mask ? (
          <StyledMask
            className={bordeError}
            type={isEyeOpen ? 'text' : type}
            maskChar='x'
            mask={mask}
            {...register}
            alwaysShowMask={!error?.message && !watchName}
            onFocus={() => {
              if (onFocus) {
                onFocus();
              }

              if (clearErrors) {
                clearErrors();
              }
            }}
            onBlur={(e) => {
              setIsFocus(false);
              if (onBlur) {
                onBlur(e);
              }
            }}
          />
        ) : (
          <StyledInput
            className={bordeError}
            ref={ref}
            name={name}
            required={true}
            type={typeInputValue}
            onFocus={() => {
              if (onFocus) {
                onFocus();
              }
              if (clearErrors) {
                clearErrors();
              }
            }}
            onBlur={(e) => {
              setIsFocus(false);
              if (onBlur) {
                onBlur(e);
              }
            }}
            onChange={(e) => {
              if (onChange) {
                onChange(e);
              }
              setIsEyeVisible(true);
            }}
          />
        )}

        <InputLabel>{label}</InputLabel>

        {errors && error?.type !== 'required' && (
          <HintError
            errors={errors}
            hintType={name}
            shouldShowError={!!watchName}
            shouldFullColorError={shouldFullColorError}
            data-test-id={DataTestId.Hint}
          />
        )}

        {!errors && error?.message && name !== 'phone' && (
          <StyledHint className={emptyErr()} data-test-id={DataTestId.Hint}>
            <span>{error.message}</span>
          </StyledHint>
        )}
        {errors && error?.message && error.type === 'required' && name !== 'phone' && (
          <StyledHint className={emptyErr()} data-test-id={DataTestId.Hint}>
            <span>{error.message}</span>
          </StyledHint>
        )}

        {name === 'phone' && (
          <StyledHint className={phoneclass()} data-test-id={DataTestId.Hint}>
            <span>{error?.message === ErrorMessages.required ? error.message : 'В формате +375 (xx) xxx-xx-xx'}</span>
          </StyledHint>
        )}

        {/* {isRegularError && (
          <StyledHint className={emptyErr()} data-test-id={DataTestId.Hint}>
            {error.message}
          </StyledHint>
        )} */}
        {/* {errors && error?.message && error.type === 'required' && name !== 'phone' && (
          <StyledHint className={emptyErr()} data-test-id={DataTestId.Hint}>
            <span>{error.message}</span>
          </StyledHint>
        )} */}

        {!error?.message && !errors?.length && watchName && name === 'password' && (
          <InputIcon className='checkicon' src={check} alt='iconCheck' data-test-id={DataTestId.CheckMark} />
        )}
        {(!!isInputpassword || !!isConfirmPassword) && isEyeOpen && (
          <InputIcon
            src={eyeOpen}
            alt='eyeOpen'
            onClick={() => setIsEyeOpen(false)}
            data-test-id={DataTestId.EyeOpened}
          />
        )}
        {(!!isInputpassword || !!isConfirmPassword) && !isEyeOpen && isEyeVisible && (
          <InputIcon
            src={eyeClosed}
            alt='eyeClosed'
            onClick={() => setIsEyeOpen(true)}
            data-test-id={DataTestId.EyeClosed}
          />
        )}

        {/* {isPasswordOrConfirmPassword && (
          <InputIcon
            onClick={() => changeIsOpenEye}
            src={isEyeOpen ? eyeOpen : eyeClosed}
            alt='eye'
            // onClick={() => setIsEyeOpen(!isEyeOpen)}
            data-test-id={isEyeOpen ? DataTestId.EyeOpened : DataTestId.EyeClosed}
          />
        )} */}
      </InputWrapper>
    );
  }
);
