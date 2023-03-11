import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { FieldError, UseFormWatch } from 'react-hook-form';
import { UseFormClearErrors } from 'react-hook-form/dist/types';

export type AuthFormValues = {
  identifier: string;
  password: string;
};
export type RegistrationFormValues = {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

export type InputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type InputType = 'password' | 'tel' | 'text';

export type FormInputType = InputPropsType & {
  isError?: boolean;
  onClick?: () => void;
  label?: string;
  assistiveText?: string;
  isChecked?: boolean;
  onFocus?: () => void;
  type: InputType;
  error?: FieldError;
  watchName: string;
  clearErrors?: UseFormClearErrors<AuthFormValues>;
  name: 'password' | 'identifier';
};
