import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';

export const PrivateRouter = () => {
  const { user, token } = useAppSelector((state) => state.AuthReducer);

  return user || token ? <Outlet /> : <Navigate to='/' />;
};
