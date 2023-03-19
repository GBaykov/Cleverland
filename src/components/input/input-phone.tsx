import React, { forwardRef, useState } from 'react';
import { FieldError, UseFormClearErrors, UseFormRegister } from 'react-hook-form/dist/types';
import { FormInputType } from '../../types/forms';
import { StyledMask } from './styled';

export const FormsInputPhone = forwardRef<any, any>(
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

      isEyeOpen,
      mask,
    }: any,
    ref
  ) => {
    const [readOnly, setReadOnly] = useState(true);
    const bordeError = error?.message ? 'borderError' : '';

    return (
      <StyledMask
        className={bordeError}
        type={isEyeOpen ? 'text' : type}
        maskChar='x'
        mask={mask}
        ref={ref}
        alwaysShowMask={!error?.message && !watchName}
        onFocus={() => clearErrors && clearErrors()}
      />
    );
  }
);
