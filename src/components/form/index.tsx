import React, { ReactNode } from 'react';
import { FormLayout } from './styled';

export type FormProps = {
  children: ReactNode;
};

export const Form = ({ children }: FormProps) => <FormLayout>{children}</FormLayout>;
