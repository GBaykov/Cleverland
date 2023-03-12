import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { passwordSchema, registrationSchemas, usernameSchema } from '../../../constants/schemas';
import { usePasswordErrors, useUsernameErrors } from '../../../hooks/errors';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { signUp } from '../../../store/reducers/auth-reducer';
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
    mode: 'onChange',
    reValidateMode: 'onBlur',

    shouldFocusError: false,
    resolver: yupResolver(registrationSchemas[step - 1]),
    criteriaMode: 'all',
  });

  const { isLoading, isSuccess, isError, error } = useAppSelector((state) => state.AuthReducer);
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
      navigate('/auth');
    }
    if (error) {
      reset();
      setStep(1);
    }
  };

  const errorsPassword = usePasswordErrors(passwordSchema, watch('password'));

  const errorsUsername = useUsernameErrors(usernameSchema, watch('username'));

  return (
    <>
      {!error && !isSuccess && (
        <RegAuthFormModal>
          <RegAuthTitle>Регистрация</RegAuthTitle>
          <RegistrationSteps>{step} шаг из 3</RegistrationSteps>
          <StyledRegAuthForm onSubmit={handleSubmit(onSubmit)} noValidate={true}>
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
                  isFullError={!!errors.username}
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
                  isFullError={!!errors.password}
                />
              </>
            )}
            {step === 2 && (
              <>
                <FormsInput
                  label='Имя'
                  register={register('firstName')}
                  // error={errors.firstName}
                  watchName={watch('firstName')}
                  type='text'
                  name='firstName'
                  clearErrors={clearErrors}
                />
                <FormsInput
                  label='Фамилия'
                  register={register('lastName')}
                  // error={errors.lastName}
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
                  error={errors.phone}
                  watchName={watch('phone')}
                  type='text'
                  mask='+375 (99) 999-99-99'
                  clearErrors={clearErrors}
                  name='phone'
                />
                <FormsInput
                  label='E-mail'
                  register={register('email')}
                  error={errors.email}
                  watchName={watch('email')}
                  type='email'
                  clearErrors={clearErrors}
                  name='email'
                />
              </>
            )}

            {error && (
              <RegAuthFormModal>
                <RegAuthTitle>Данные не сохранились</RegAuthTitle>
                <StyledRegAuthForm onSubmit={handleSubmit(onSubmit)}>
                  <StyledErrText>
                    {error === ErrorMessages.registrationFail
                      ? ErrorMessages.registrationFail
                      : ErrorMessages.notUnique}
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
              <RegAuthFormModal>
                <RegAuthTitle>Регистрация успешна</RegAuthTitle>
                <StyledRegAuthForm onSubmit={handleSubmit(onSubmit)}>
                  <StyledErrText>
                    Регистрация прошла успешно. Зайдите в личный кабинет, используя свои логин и пароль
                  </StyledErrText>
                  <Button onClick={() => onSubmit} isPrimary={true} text='Вход' height={52} type={BtnType.submit} />
                </StyledRegAuthForm>
              </RegAuthFormModal>
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
            <LinkToAuthRegistration to='/registration'>
              Войти <img src={backArrow} alt='backArrow' />
            </LinkToAuthRegistration>
          </HaveRecord>
        </RegAuthFormModal>
      )}
      {isLoading && <Loader />}
    </>
  );
};
