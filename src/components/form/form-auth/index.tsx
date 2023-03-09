import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

import { Button } from '../../button';
import { FormsInput } from '../../input/form-input';
import { AuthFormModal, AuthTitle, HaveNoRecord, LinkToRegistration, StyledAuthForm } from './styled';
import backArrow from '../../../assets/icons/backArrow.svg';
import { AuthFormValues } from '../../../types/forms';

export const authSchema = object({
  identifier: string().required('Поле не может быть пустым'),
  password: string().required('Поле не может быть пустым'),
});

export const AuthForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<AuthFormValues>({
    mode: 'all',
    resolver: yupResolver(authSchema),
  });

  const onSubmit: SubmitHandler<AuthFormValues> = (data) => console.log(data);

  return (
    <AuthFormModal>
      <AuthTitle>Вход в личный кабинет</AuthTitle>
      <StyledAuthForm onSubmit={handleSubmit(onSubmit)}>
        <FormsInput {...register('identifier')} name='identifier' label='Логин' type='text' />
        <FormsInput {...register('password')} name='password' label='Пароль' type='password' />
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
};
