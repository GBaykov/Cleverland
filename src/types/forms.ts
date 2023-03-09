import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export type AuthFormValues = {
  identifier: string;
  password: string;
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
};
