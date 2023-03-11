import React, { ReactNode } from 'react';
import { AuthForm } from '../../components/form/form-auth';
import { RegistrationForm } from '../../components/form/form-registration';
import { FormPageWrapper } from './styled';

export type FormPageProps = {
  formType: 'auth' | 'registration' | 'recovery';
};

export const FormPage = ({ formType }: FormPageProps) => (
  <>
    {/* <FormPageWrapper>{formType === 'auth' && <AuthForm />}</FormPageWrapper> */}
    <FormPageWrapper>{formType === 'registration' && <RegistrationForm />}</FormPageWrapper>
  </>
);
