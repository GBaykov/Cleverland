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
