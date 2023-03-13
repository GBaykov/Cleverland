import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '../../hooks/redux';
import { FormPageTitle, FormPageWrapper } from './styled';

export const FormPage = () => {
  const { user } = useAppSelector((state) => state.AuthReducer);
  return (
    <FormPageWrapper>
      <FormPageTitle>Cleverland</FormPageTitle>
      {user ? <Navigate to='/books/all' /> : <Outlet />}
    </FormPageWrapper>
  );
};
