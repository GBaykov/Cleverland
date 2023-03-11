import { getFromStorage } from '../../utils/localstorage';

export const authHeader = () => {
  const token = getFromStorage('token');
  // const token = tokenFromStorage && JSON.parse(tokenFromStorage);
  return token && { Authorization: `Bearer {${token}}` };
  // if (token) {
  //   return { Authorization: `Bearer {${token}}` };
  // }
};
