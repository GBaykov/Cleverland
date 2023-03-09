import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import backArrow from '../../../assets/icons/backArrow.svg';

import { Button } from '../../button';
import { AuthFormModal, AuthTitle, HaveNoRecord, LinkToRegistration, StyledAuthForm } from './styled';

export const FormAuth = () => (
  <AuthFormModal>
    <AuthTitle>Вход в личный кабинет</AuthTitle>
    <StyledAuthForm>
      <input />
      <input />
    </StyledAuthForm>
    <Button isPrimary={true} height={52} text='ВХОД' />
    <HaveNoRecord>
      Нет учётной записи?
      <LinkToRegistration to='/registration'>
        Регистрация <img src={backArrow} alt='backArrow' />
      </LinkToRegistration>
    </HaveNoRecord>
  </AuthFormModal>
);
