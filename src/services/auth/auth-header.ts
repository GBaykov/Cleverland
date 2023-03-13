import { getFromStorage } from '../../utils/localstorage';

export const authHeader = () => {
  const token = getFromStorage('token');
  if (token) {
    return `Bearer ${token}`;
  }
  return '';
};
