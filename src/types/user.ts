export type User = {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: false;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  phone: string;
};

export type RegistrationParams = {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};
export type LoginParams = {
  identifier: string;
  password: string;
};

export type AuthResponseType = {
  jwt: string;
  user: User;
};

export type SignUpInResponse = {
  user: User;
  jwt: string;
};

type Password = {
  password: string;
  passwordConfirmation: string;
};
export type ResetPassword = Password & { code: string };

export type RecoveryField = Password & { email: string };

export type ForgotPassword = Pick<RecoveryField, 'email'>;
