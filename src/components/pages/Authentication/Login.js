import React from 'react';

import InputWithLabel from '../../shared/InputWithLabel';
import ErrorMsg from '../../shared/ErrorMsg';

import { useFormManagment } from '../../../hooks/useFormManagment';

import loginValidations from '../../../utils/validations/login';

import { loginUser } from '../../../services/authentication';

import { addToLS } from '../../../utils/localStorageManagment';

const INITIAL_STATE = {
  email: 'admin@abv.bg',
  password: 'admina',
};

const Login = () => {
  const onSuccessSubmitted = async () => {
    const response = await loginUser(state.email, state.password);

    const {
      user: { uid },
    } = response;

    addToLS('token', uid);
  };

  const { state, errors, onChange, onSubmit } = useFormManagment(INITIAL_STATE, loginValidations, onSuccessSubmitted);

  return (
    <form onSubmit={onSubmit}>
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

      <InputWithLabel type='submit' />
    </form>
  );
};

export default Login;
