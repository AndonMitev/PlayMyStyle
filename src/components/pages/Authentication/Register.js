import React from 'react';

import ErrorMsg from '../../shared/ErrorMsg';
import InputWithLabel from '../../shared/InputWithLabel';

import { useFormManagment } from '../../../hooks/useFormManagment';

import registerValidations from '../../../utils/validations/register';

import { registerUser } from '../../../services/authentication';

const INITIAL_STATE = {
  username: 'admin',
  password: 'admin',
  confirmPassword: 'admin',
  email: 'admin@abv.bg',
};

const Register = () => {
  const onSuccessSubmitted = async () => {
    await registerUser(state.email, state.password);
  };

  const { state, errors, onChange, onSubmit } = useFormManagment(
    INITIAL_STATE,
    registerValidations,
    onSuccessSubmitted,
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <InputWithLabel
            name='username'
            value={state.username}
            onChange={onChange}
            shouldUseLabel={true}
            labelContent='Username'
          />
          {errors?.username ? <ErrorMsg className='error-msg' content={errors.username} /> : null}
        </div>

        <div>
          <InputWithLabel
            type='password'
            name='password'
            value={state.password}
            onChange={onChange}
            shouldUseLabel={true}
            labelContent='Password'
          />
          {errors?.password ? <ErrorMsg className='error-msg' content={errors.password} /> : null}
        </div>

        <div>
          <InputWithLabel
            type='password'
            name='confirmPassword'
            value={state.confirmPassword}
            onChange={onChange}
            shouldUseLabel={true}
            labelContent='Confirm password'
          />
          {errors?.confirmPassword ? <ErrorMsg className='error-msg' content={errors.confirmPassword} /> : null}
        </div>

        <div>
          <InputWithLabel
            name='email'
            value={state.email}
            onChange={onChange}
            shouldUseLabel={true}
            labelContent='Email'
          />
          {errors?.email ? <ErrorMsg className='error-msg' content={errors.email} /> : null}
        </div>

        <InputWithLabel type='submit' />
      </form>
    </div>
  );
};

export default Register;
