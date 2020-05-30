export default formState => {
  let errors = {};

  const { email, password } = formState;

  if (!email) {
    errors.email = 'Email is required';
  } else {
    const { email, ...rest } = errors;
    errors = rest;
  }

  if (!password) {
    errors.password = 'Password is required';
  } else {
    const { password, ...rest } = errors;
    errors = rest;
  }

  return errors;
};
