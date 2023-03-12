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
export type AllPossiblerFields = {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  identifier: string;
};

export type InputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type InputType = 'password' | 'tel' | 'text' | 'email';
export type ClearErrors = UseFormClearErrors<AllPossiblerFields>;

export type FormInputType = InputPropsType & {
  isError?: boolean;
  onClick?: () => void;
  label: string;
  assistiveText?: string;
  isChecked?: boolean;
  onFocus?: () => void;
  type: InputType;
  error?: FieldError;
  errors: string[];
  isFullError: boolean;
  watchName: string;
  clearErrors?: UseFormClearErrors<AllPossiblerFields>;
  name: 'password' | 'identifier' | 'firstName' | 'lastName' | 'email' | 'phone' | 'username';
  isInputAuth: boolean;
  shouldShowError: boolean;
  mask?: string;
};
