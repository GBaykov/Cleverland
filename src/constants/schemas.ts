import { lazy, object, ref, string } from 'yup';

import { ErrorMessages } from '../types/messages';

import {
  passwordUpperLetterRegex,
  passwordMinOneNumRegex,
  loginLetterRegex,
  loginNumberRegex,
  phoneRegex,
  emailRegex,
  minEightSymbolRegex,
} from './regexp';

export const usernameSchema = object({
  username: string()
    .required(ErrorMessages.required)
    .matches(loginLetterRegex, 'латинский алфавит')
    .matches(loginNumberRegex, 'цифры'),
});

export const passwordSchema = object({
  password: string()
    .required(ErrorMessages.required)
    .matches(minEightSymbolRegex, ErrorMessages.minEightChars)
    .matches(passwordUpperLetterRegex, { message: ErrorMessages.withUpperLater })
    .matches(passwordMinOneNumRegex, { message: ErrorMessages.withNumber }),
});

export const authSchema = object({
  identifier: string().required(ErrorMessages.required),
  password: string().required(ErrorMessages.required),
});

export const registrationSchemas = [
  object({
    username: string()
      .required(ErrorMessages.required)
      .matches(loginLetterRegex, 'латинский алфавит')
      .matches(loginNumberRegex, 'цифры'),
    password: string()
      .required(ErrorMessages.required)
      .matches(minEightSymbolRegex, ErrorMessages.minEightChars)
      .matches(passwordUpperLetterRegex, { message: ErrorMessages.withUpperLater })
      .matches(passwordMinOneNumRegex, { message: ErrorMessages.withNumber }),
  }),
  object({
    firstName: string().required(ErrorMessages.required),
    lastName: string().required(ErrorMessages.required),
  }),
  object({
    phone: string().required(ErrorMessages.required).matches(phoneRegex, { message: 'В формате +375 (xx) xxx-xx-xx' }),
    email: string().required(ErrorMessages.required).matches(emailRegex, 'Введите корректный e-mail'),
  }),
];

export const forgotPasswordSchema = object({
  email: string().required(ErrorMessages.required).matches(emailRegex, 'Введите корректный e-mail'),
});

export const resetPasswordSchema = object({
  password: string()
    .required(ErrorMessages.required)
    .matches(minEightSymbolRegex, ErrorMessages.minEightChars)
    .matches(passwordUpperLetterRegex, { message: ErrorMessages.withUpperLater })
    .matches(passwordMinOneNumRegex, { message: ErrorMessages.withNumber }),
  passwordConfirmation: lazy((value) =>
    string().when('passwordConfirmation', (_, schema) =>
      value === '' ? schema.required(ErrorMessages.required) : schema.oneOf([ref('password')], 'Пароли не совпадают')
    )
  ),
});
