import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import {
  forgotPasswordSchema,
  passwordSchema,
  registrationSchemas,
  resetPasswordSchema,
  usernameSchema,
} from '../../../constants/schemas';
import { usePasswordErrors, useUsernameErrors } from '../../../hooks/errors';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { authSlice, signUp } from '../../../store/reducers/auth-reducer';
import { BtnType } from '../../../types/button';
import { RegistrationFormValues } from '../../../types/forms';

import { Button, registrationBtns } from '../../button';

import { FormsInput } from '../../input/form-input';
import {
  HaveRecord,
  LinkToAuthRegistration,
  RegAuthFormModal,
  RegAuthTitle,
  StyledErrText,
  StyledRegAuthForm,
} from '../styled';
import { TopRecoveryNavigate } from './styled';
import backArrow from '../../../assets/icons/backArrow.svg';
import { Loader } from '../../loader';
import { ErrorMessages } from '../../../types/messages';
import { getForgotPassword, getResetPassword, recoverySlice } from '../../../store/reducers/recovery-reducer';
import { RecoveryField } from '../../../types/user';
import { StyledHint } from '../hint/styled';

export const RecoveryForm = () => {
  const { search } = useLocation();
  const code = search.split('=')[1];

  const {
    register,
    handleSubmit,
    watch,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<RecoveryField>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    criteriaMode: 'all',
    shouldFocusError: false,
    resolver: yupResolver(code ? resetPasswordSchema : forgotPasswordSchema),
  });

  const { isLoading, isForgotSuccess, isResetSuccess, error, isSuccess } = useAppSelector(
    (state) => state.RecoveryReducer
  );
  const { clearData } = recoverySlice.actions;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  console.log(errors);

  const onSubmit: SubmitHandler<RecoveryField> = (data) => {
    if (code) {
      dispatch(
        getResetPassword({
          code,
          password: data.password,
          passwordConfirmation: data.passwordConfirmation,
        })
      );
    }
    if (!code) {
      dispatch(getForgotPassword(data));
    }
    if (error && code) {
      dispatch(
        getResetPassword({
          code,
          password: data.password,
          passwordConfirmation: data.passwordConfirmation,
        })
      );
    }
    if (isResetSuccess && code) {
      console.log('btn click');
      dispatch(clearData());
      reset();
      navigate('/auth');
    }
  };
  //   const onBtnClick = () => {

  //   };

  const errorsPassword = usePasswordErrors(resetPasswordSchema, watch('password'));

  return (
    <>
      {code && !isResetSuccess && !error && (
        <RegAuthFormModal>
          <RegAuthTitle>Восстановление пароля</RegAuthTitle>
          <StyledRegAuthForm onSubmit={handleSubmit(onSubmit)} noValidate={true}>
            <FormsInput
              {...register('password')}
              error={errors.password}
              label='Новый пароль'
              watchName={watch('password')}
              type='password'
              errors={errorsPassword}
              clearErrors={clearErrors}
              name='password'
            />
            <FormsInput
              {...register('passwordConfirmation')}
              name='passwordConfirmation'
              error={errors.passwordConfirmation}
              label='Повторите пароль'
              watchName={watch('passwordConfirmation')}
              type='password'
              clearErrors={clearErrors}
            />

            <Button
              isPrimary={true}
              onClick={() => onSubmit}
              text='Сохранить изменения'
              height={52}
              type={BtnType.submit}
              isDisabled={!!errors.passwordConfirmation}
            />
          </StyledRegAuthForm>
          <StyledErrText>После сохранения войдите в библиотеку, используя новый пароль</StyledErrText>
        </RegAuthFormModal>
      )}

      {!code && !isForgotSuccess && !isResetSuccess && (
        <RegAuthFormModal>
          <TopRecoveryNavigate>
            <Link to='/auth'>
              <img src={backArrow} alt='backArrow' />
            </Link>
            Вход в личный кабинет
          </TopRecoveryNavigate>
          <RegAuthTitle className='recov'>Восстановление пароля</RegAuthTitle>
          <StyledRegAuthForm onSubmit={handleSubmit(onSubmit)} noValidate={true}>
            <FormsInput
              label='E-mail'
              {...register('email')}
              error={errors.email}
              watchName={watch('email')}
              type='email'
              clearErrors={clearErrors}
              name='email'
            />
            {error && <StyledHint className='fullColored'>{error}</StyledHint>}
            <StyledHint className='margined'>
              На это email будет отправлено письмо с инструкциями по восстановлению пароля
            </StyledHint>

            <Button isPrimary={true} onClick={() => onSubmit} text='Восстановить' height={52} type={BtnType.submit} />
          </StyledRegAuthForm>
          <HaveRecord>
            Нет учётной записи?
            <LinkToAuthRegistration to='/registration'>
              Регистрация <img src={backArrow} alt='backArrow' />
            </LinkToAuthRegistration>
          </HaveRecord>
        </RegAuthFormModal>
      )}

      {error && code && (
        <RegAuthFormModal>
          <RegAuthTitle className='centred'>Данные не сохранились</RegAuthTitle>
          <StyledErrText className='centred'>{error}</StyledErrText>
          <StyledRegAuthForm onSubmit={handleSubmit(onSubmit)} noValidate={true}>
            <Button isPrimary={true} onClick={() => onSubmit} text='Повторить' height={52} type={BtnType.submit} />
          </StyledRegAuthForm>
        </RegAuthFormModal>
      )}

      {isForgotSuccess && !code && (
        <RegAuthFormModal className='centred'>
          <RegAuthTitle className='centred'>Письмо выслано</RegAuthTitle>
          <StyledErrText className='centred'>
            Перейдите в вашу почту, чтобы воспользоваться подсказками по восстановлению пароля
          </StyledErrText>
        </RegAuthFormModal>
      )}
      {isResetSuccess && code && (
        <RegAuthFormModal className='centred'>
          <RegAuthTitle className='centred'>Новые данные сохранены</RegAuthTitle>
          <StyledErrText className='centred'>
            Зайдите в личный кабинет, используя свои логин и новый пароль
          </StyledErrText>
          <StyledRegAuthForm onSubmit={handleSubmit(onSubmit)} noValidate={true} className='centred'>
            <Button isPrimary={true} onClick={() => onSubmit} text='Вход' height={52} type={BtnType.submit} />
          </StyledRegAuthForm>
        </RegAuthFormModal>
      )}

      {isLoading && <Loader />}
    </>
  );
};
