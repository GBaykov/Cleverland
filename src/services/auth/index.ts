import axios from 'axios';
import { HOST } from '../../constants';
import { LoginParams, RegistrationParams, SignUpInResponse, User } from '../../types/user';
import { removeFromStorage, setToStorage } from '../../utils/localstorage';

const signIn = async (data: LoginParams) => {
  const response = await axios.post<SignUpInResponse>(`${HOST}/api/auth/local`, data);
  if (response.data.jwt) {
    setToStorage('token', response.data.jwt);
  }
  if (response.data.user) {
    setToStorage('user', JSON.stringify(response.data.user));
  }
  return response.data;
};

const signUp = async (data: RegistrationParams) => {
  const response = await axios.post<SignUpInResponse>(`${HOST}/api/auth/local/register`, data);
  return response.data;
};

const logOut = () => {
  removeFromStorage('token');
  removeFromStorage('user');
};

export const authService = {
  signIn,
  signUp,
  logOut,
};
