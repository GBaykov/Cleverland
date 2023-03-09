import React, { ReactNode } from 'react';
import { FormAuth } from '../../components/form/form-auth';
import { FormPageWrapper } from './styled';

export type FormPageProps = {
  formType: 'auth' | 'registration' | 'recovery';
};

export const FormPage = ({ formType }: FormPageProps) => (
  <FormPageWrapper>{formType === 'auth' && <FormAuth />}</FormPageWrapper>
);
