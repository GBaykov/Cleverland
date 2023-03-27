import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { passwordSchema, registrationSchemas, usernameSchema } from '../../../constants/schemas';
import { useErrors } from '../../../hooks/errors';
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
import { RegistrationSteps } from './styled';
import backArrow from '../../../assets/icons/backArrow.svg';
import { Loader } from '../../loader';
import { ErrorMessages } from '../../../types/messages';
import { DataTestId } from '../../../constants/data-test-ids';

export const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<RegistrationFormValues>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    criteriaMode: 'all',
    shouldFocusError: false,

    resolver: yupResolver(registrationSchemas[step - 1]),
  });

  const { isLoading, isSuccess, isError, error, errorResponse } = useAppSelector((state) => state.AuthReducer);
  const { clearData } = authSlice.actions;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  console.log(errors);

  const onSubmit: SubmitHandler<RegistrationFormValues> = (data) => {
    console.log(data);
    if (step < 3) {
      setStep((prevStep) => prevStep + 1);
    }
    if (step === 3 && !error && !isSuccess) {
      dispatch(signUp(data));
    }
    if (isSuccess) {
      dispatch(clearData());
      navigate('/auth');
    }
    if (error) {
      dispatch(clearData());
      reset();
      setStep(1);
    }
  };

  // const errorsPassword = usePasswordErrors(passwordSchema, watch('password'));

  // const errorsUsername = useUsernameErrors(usernameSchema, watch('username'));
  const { errorsArr: errorsPassword } = useErrors(passwordSchema, watch('password'), 'password');

  const { errorsArr: errorsUsername } = useErrors(usernameSchema, watch('username'), 'username');

  return (
    <>
      {error && (
        <RegAuthFormModal className='centred' data-test-id={DataTestId.StatusBlock}>
          <RegAuthTitle className='centred'>Данные не сохранились</RegAuthTitle>
          <StyledRegAuthForm onSubmit={handleSubmit(onSubmit)} className='centred'>
            <StyledErrText className='centred'>
              {error === ErrorMessages.registrationFail ? ErrorMessages.registrationFail : ErrorMessages.notUnique}
            </StyledErrText>
            <Button
              isPrimary={true}
              onClick={() => onSubmit}
              text={error === ErrorMessages.registrationFail ? 'Повторить' : 'Назад к регистрации'}
              height={52}
              type={BtnType.submit}
            />
          </StyledRegAuthForm>
        </RegAuthFormModal>
      )}
      {isSuccess && (
        <RegAuthFormModal className='centred' data-test-id={DataTestId.StatusBlock}>
          <RegAuthTitle className='centred'>Регистрация успешна</RegAuthTitle>
          <StyledRegAuthForm onSubmit={handleSubmit(onSubmit)} className='centred'>
            <StyledErrText className='centred'>
              Регистрация прошла успешно. Зайдите в личный кабинет, используя свои логин и пароль
            </StyledErrText>
            <Button onClick={() => onSubmit} isPrimary={true} text='Вход' height={52} type={BtnType.submit} />
          </StyledRegAuthForm>
        </RegAuthFormModal>
      )}
      {!error && !isSuccess && (
        <RegAuthFormModal>
          <RegAuthTitle>Регистрация</RegAuthTitle>
          <RegistrationSteps>{step} шаг из 3</RegistrationSteps>
          <StyledRegAuthForm onSubmit={handleSubmit(onSubmit)} noValidate={true} data-test-id={DataTestId.RegisterForm}>
            {step === 1 && (
              <>
                <FormsInput
                  label='Придумайте логин для входа'
                  {...register('username')}
                  error={errors.username}
                  watchName={watch('username')}
                  type='text'
                  errors={errorsUsername}
                  name='username'
                  clearErrors={clearErrors}
                  shouldFullColorError={!!errors.username}
                />
                <FormsInput
                  label='Пароль'
                  {...register('password')}
                  error={errors.password}
                  watchName={watch('password')}
                  type='password'
                  errors={errorsPassword}
                  clearErrors={clearErrors}
                  name='password'
                  shouldFullColorError={!!errors.password}
                />
              </>
            )}
            {step === 2 && (
              <>
                <FormsInput
                  label='Имя'
                  {...register('firstName')}
                  error={errors.firstName}
                  watchName={watch('firstName')}
                  type='text'
                  name='firstName'
                  clearErrors={clearErrors}
                />
                <FormsInput
                  label='Фамилия'
                  {...register('lastName')}
                  error={errors.lastName}
                  watchName={watch('lastName')}
                  type='text'
                  name='lastName'
                  clearErrors={clearErrors}
                />
              </>
            )}
            {step === 3 && (
              <>
                <FormsInput
                  label='Номер телефона'
                  register={register('phone')}
                  {...register('phone')}
                  error={errors.phone}
                  watchName={watch('phone')}
                  type='text'
                  mask='+375 (99) 999-99-99'
                  clearErrors={clearErrors}
                  name='phone'
                />
                <FormsInput
                  label='E-mail'
                  {...register('email')}
                  error={errors.email}
                  watchName={watch('email')}
                  type='email'
                  clearErrors={clearErrors}
                  name='email'
                />
              </>
            )}

            <Button
              text={registrationBtns[step - 1]}
              onClick={() => onSubmit}
              type={BtnType.submit}
              isPrimary={true}
              height={52}
              isDisabled={
                !!errors.firstName ||
                !!errors.lastName ||
                !!errors.username ||
                !!errors.password ||
                !!errors.phone ||
                !!errors.email
              }
            />
          </StyledRegAuthForm>
          <HaveRecord>
            Есть учетная запись?
            <LinkToAuthRegistration to='/auth'>
              Войти <img src={backArrow} alt='backArrow' />
            </LinkToAuthRegistration>
          </HaveRecord>
        </RegAuthFormModal>
      )}

      {isLoading && <Loader />}
    </>
  );
};
