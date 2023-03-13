import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

import { Button } from '../../button';
import { FormsInput } from '../../input/form-input';
import { FormErrorMessage, LinkToForgot } from './styled';
import backArrow from '../../../assets/icons/backArrow.svg';
import { AuthFormValues } from '../../../types/forms';

import {
  HaveRecord,
  LinkToAuthRegistration,
  RegAuthFormModal,
  RegAuthTitle,
  StyledErrText,
  StyledRegAuthForm,
} from '../styled';
import { ErrorMessages } from '../../../types/messages';
import { authSchema } from '../../../constants/schemas';
import { BtnType } from '../../../types/button';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { Loader } from '../../loader';
import { authSlice, signIn, signUp } from '../../../store/reducers/auth-reducer';

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
  const { isLoading, isSuccess, isError, error, user } = useAppSelector((state) => state.AuthReducer);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<AuthFormValues> = (data) => {
    console.log(data);
    dispatch(signIn(data));
  };

  console.log('render auth');

  return (
    <>
      {error !== ErrorMessages.smthError && !user && (
        <RegAuthFormModal>
          <RegAuthTitle>Вход в личный кабинет</RegAuthTitle>
          <StyledRegAuthForm onSubmit={handleSubmit(onSubmit)} noValidate={true}>
            <FormsInput
              {...register('identifier')}
              name='identifier'
              label='Логин'
              type='text'
              error={errors.identifier}
              watchName={watch('identifier')}
              clearErrors={clearErrors}
              isInputAuth={true}
            />
            <FormsInput
              {...register('password')}
              name='password'
              label='Пароль'
              type='password'
              error={errors.password}
              watchName={watch('password')}
              clearErrors={clearErrors}
              isInputAuth={true}
            />

            {error === ErrorMessages.wrongLoginOrPassword && (
              <FormErrorMessage>Неверный логин или пароль!</FormErrorMessage>
            )}

            <LinkToForgot to='/forgot-pass'>
              {error === ErrorMessages.wrongLoginOrPassword ? 'Восстановить?' : 'Забыли логин или пароль?'}
            </LinkToForgot>

            <Button onClick={() => onSubmit} type={BtnType.submit} isPrimary={true} height={52} text='ВХОД' />
          </StyledRegAuthForm>

          <HaveRecord>
            Нет учётной записи?
            <LinkToAuthRegistration to='/registration'>
              Регистрация <img src={backArrow} alt='backArrow' />
            </LinkToAuthRegistration>
          </HaveRecord>
        </RegAuthFormModal>
      )}

      {error === ErrorMessages.smthError && (
        <StyledRegAuthForm>
          <RegAuthTitle>Вход не выполнен</RegAuthTitle>
          <StyledRegAuthForm onSubmit={handleSubmit(onSubmit)}>
            <StyledErrText>{ErrorMessages.smthError}</StyledErrText>
            <Button isPrimary={true} onClick={() => onSubmit} text='Повторить' height={52} type={BtnType.submit} />
          </StyledRegAuthForm>
        </StyledRegAuthForm>
      )}
      {isLoading && <Loader />}
    </>
  );
};
