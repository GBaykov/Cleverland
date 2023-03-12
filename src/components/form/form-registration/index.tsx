import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup';
import {
  loginLetterRegex,
  loginNumberRegex,
  minEightSymbolRegex,
  passwordMinOneNumRegex,
  passwordUpperLetterRegex,
} from '../../../constants/regexp';
import { passwordSchema, registrationSchemas, usernameSchema } from '../../../constants/schemas';
import { usePasswordErrors, useUsernameErrors } from '../../../hooks/errors';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { signUp } from '../../../store/reducers/auth-reducer';
import { RegistrationFormValues } from '../../../types/forms';
import { ErrorMessages } from '../../../types/messages';
import { Button } from '../../button';
import { BtnType } from '../../button/styled';
import { FormsInput } from '../../input/form-input';
import { RegAuthFormModal, RegAuthTitle, StyledRegAuthForm } from '../styled';
import { RegistrationSteps } from './styled';

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
    mode: 'all',
    resolver: yupResolver(registrationSchemas[step - 1]),
    criteriaMode: 'all',
  });

  const { isLoading, isSuccess, isError, error } = useAppSelector((state) => state.AuthReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  console.log('render registration');

  const onSubmit: SubmitHandler<RegistrationFormValues> = (data) => {
    console.log(data);
    // if (step < 3) {
    //   setStep((prevStep) => prevStep + 1);
    // }
    // if (step === 3 && !error && !isSuccess) {
    //   dispatch(signUp(data));
    // }
    // if (isSuccess) {
    //   navigate('/auth');
    // }
    // if (error) {
    //   reset();
    //   setStep(1);
    // }
  };

  const errorsPassword = usePasswordErrors(passwordSchema, watch('password'));

  const errorsUsername = useUsernameErrors(usernameSchema, watch('username'));

  return (
    <RegAuthFormModal>
      <RegAuthTitle>Регистрация</RegAuthTitle>
      <RegistrationSteps>{step} шаг из 3</RegistrationSteps>
      <StyledRegAuthForm onSubmit={handleSubmit(onSubmit)} noValidate={true}>
        {step === 1 && (
          <>
            <FormsInput
              label='Придумайте логин для входа'
              {...register('username')}
              // error={errors.username}
              watchName={watch('username')}
              type='text'
              // errors={errorsUsername}
              name='username'
              clearErrors={clearErrors}
            />
            <FormsInput
              label='Пароль'
              {...register('password')}
              // error={errors.password}
              watchName={watch('password')}
              type='password'
              // errors={errorsPassword}
              clearErrors={clearErrors}
              name='password'
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
              messageHelper='В формате +375 (xx) xxx-xx-xx'
              error={errors.phone}
              watchName={watch('phone')}
              type='text'
              mask='+375 (99) 999-99-99'
              maskPlaceholder='x'
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

        {/* <FormErrorMessage>Неверный логин или пароль!</FormErrorMessage>
        <LinkToForgot className='short' to='/forgot-pass'>
          Восстановить?
        </LinkToForgot> */}
        <Button onClick={() => onSubmit} type={BtnType.submit} isPrimary={true} height={52} text='СЛЕДУЮЩИЙ ШАГ' />
      </StyledRegAuthForm>
      {/* <HaveNoRecord>
        Нет учётной записи?
        <LinkToRegistration to='/registration'>
          Регистрация <img src={backArrow} alt='backArrow' />
        </LinkToRegistration>
      </HaveNoRecord> */}
    </RegAuthFormModal>
  );
};
