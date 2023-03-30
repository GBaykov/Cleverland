import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';

export const PrivateRouter = () => {
  const { user, token } = useAppSelector((state) => state.AuthReducer);

  return user ? <Outlet /> : <Navigate to='/auth' />;
};
