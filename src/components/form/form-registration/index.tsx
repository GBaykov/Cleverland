import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RegistrationFormValues } from '../../../types/forms';
import { Button } from '../../button';
import { BtnType } from '../../button/styled';
import { FormsInput } from '../../input/form-input';
import { RegAuthFormModal, RegAuthTitle, StyledRegAuthForm } from '../styled';

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    clearErrors,
    formState: { errors },
  } = useForm<RegistrationFormValues>({
    mode: 'all',
    // resolver: yupResolver(),
    criteriaMode: 'all',
  });
  const onSubmit: SubmitHandler<RegistrationFormValues> = (data) => {
    console.log(data);
  };

  return (
    <RegAuthFormModal>
      <RegAuthTitle>Регистрация</RegAuthTitle>
      <StyledRegAuthForm onSubmit={handleSubmit(onSubmit)} noValidate={true}>
        {/* <FormsInput
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
        /> */}

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
