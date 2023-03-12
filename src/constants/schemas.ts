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
// {
//   1: object({
//     username: string()
//       .required(ErrorMessages.required)
//       .matches(loginLetterRegex, 'латинский алфавит')
//       .matches(loginNumberRegex, 'цифры'),
//     password: string()
//       .required(ErrorMessages.required)
//       .matches(minEightSymbolRegex, ErrorMessages.atLeastEightChars)
//       .matches(passwordUpperLetterRegex, { message: ErrorMessages.withUpperLater })
//       .matches(passwordMinOneNumRegex, { message: ErrorMessages.withNumber }),
//   }),
//   2: object({
//    firstName: string().required(ErrorMessages.required),
//     lastName: string().required(ErrorMessages.required),
//   }),
//   3: object({
//     phone: string().required(ErrorMessages.required).matches(phoneRegex, { message: 'В формате +375 (xx) xxx-xx-xx' }),
//     email: string().required(ErrorMessages.required).matches(emailRegex, 'Введите корректный e-mail'),
//   }),
// };
