import { useState } from 'react';

export const useFormManagment = (initialState, validaitonsOnSubmit, formSuccessfullySubmitted) => {
  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState();

  const onChange = event => {
    event.persist();

    const {
      target: { name, value },
    } = event;

    setState({
      ...state,
      [name]: value,
    });
  };

  const onSubmit = event => {
    event.preventDefault();

    if (validaitonsOnSubmit) {
      console.log(state);

      const errors = validaitonsOnSubmit(state);

      console.log(errors);

      if (Object.keys(errors).length) {
        setErrors(errors);
        return;
      }
    }

    formSuccessfullySubmitted();
  };

  return { state, errors, onChange, onSubmit };
};
