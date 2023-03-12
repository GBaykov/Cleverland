import React, { ReactNode } from 'react';
import { AuthForm } from '../../components/form/form-auth';
import { RegistrationForm } from '../../components/form/form-registration';
import { FormPageWrapper } from './styled';

export type FormPageProps = {
  formType: 'auth' | 'registration' | 'recovery';
};

export const FormPage = ({ formType }: FormPageProps) => (
  <>
    {formType === 'auth' && (
      <FormPageWrapper>
        <AuthForm />
      </FormPageWrapper>
    )}
    {formType === 'registration' && (
      <FormPageWrapper>
        <RegistrationForm />
      </FormPageWrapper>
    )}
    {/* <FormPageWrapper>{formType === 'auth' && <AuthForm />}</FormPageWrapper> */}
    {/* <FormPageWrapper>{formType === 'registration' && <RegistrationForm />}</FormPageWrapper> */}
  </>
);
