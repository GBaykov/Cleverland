import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

import { Button } from '../../button';
import { FormsInput } from '../../input/form-input';
import { FormErrorMessage, HaveNoRecord, LinkToForgot, LinkToRegistration } from './styled';
import backArrow from '../../../assets/icons/backArrow.svg';
import { AuthFormValues } from '../../../types/forms';
import { BtnType } from '../../button/styled';
import { RegAuthFormModal, RegAuthTitle, StyledRegAuthForm } from '../styled';
import { ErrorMessages } from '../../../types/messages';
import { authSchema } from '../../../constants/schemas';

export const AuthForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    clearErrors,
    formState: { errors },
  } = useForm<AuthFormValues>({
    mode: 'all',
    resolver: yupResolver(authSchema),
    criteriaMode: 'all',
  });

  const onSubmit: SubmitHandler<AuthFormValues> = (data) => {
    console.log(data);
  };
  const errorMessageIdentifier = errors?.identifier?.message as string;
  const errorMessagePassword = errors?.password?.message as string;
  console.log('render auth');

  return (
    <RegAuthFormModal>
      <RegAuthTitle>Вход в личный кабинет</RegAuthTitle>
      <StyledRegAuthForm onSubmit={handleSubmit(onSubmit)} noValidate={true}>
        <FormsInput
          {...register('identifier')}
          name='identifier'
          label='Логин'
          type='text'
          // error={errors.identifier}
          watchName={watch('identifier')}
          clearErrors={clearErrors}
        />
        <FormsInput
          {...register('password')}
          name='password'
          label='Пароль'
          type='password'
          // error={errors.password}
          watchName={watch('password')}
          clearErrors={clearErrors}
        />
        <LinkToForgot to='/forgot-pass'>Забыли логин или пароль?</LinkToForgot>
        {/* <FormErrorMessage>Неверный логин или пароль!</FormErrorMessage>
        <LinkToForgot className='short' to='/forgot-pass'>
          Восстановить?
        </LinkToForgot> */}
        <Button onClick={() => onSubmit} type={BtnType.submit} isPrimary={true} height={52} text='ВХОД' />
      </StyledRegAuthForm>
      <HaveNoRecord>
        Нет учётной записи?
        <LinkToRegistration to='/registration'>
          Регистрация <img src={backArrow} alt='backArrow' />
        </LinkToRegistration>
      </HaveNoRecord>
    </RegAuthFormModal>
  );
};
