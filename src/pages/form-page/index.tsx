import React, { ReactNode } from 'react';
import { FormPageWrapper } from './styled';

export type FormPageProps = {
  children: ReactNode;
};

export const FormPage = ({ children }: FormPageProps) => <FormPageWrapper>{children}</FormPageWrapper>;
