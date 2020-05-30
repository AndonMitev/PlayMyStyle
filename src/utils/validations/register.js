export default formState => {
  let errors = {};

  const { username, email, password, confirmPassword } = formState;

  if (!username) {
    errors.username = 'Username is required';
  } else {
    const { username, ...rest } = errors;
    errors = rest;
  }

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

  if (!confirmPassword) {
    errors.confirmPassword = 'Confirm password is required';
  } else {
    const { confirmPassword, ...rest } = errors;
    errors = rest;
  }

  return errors;
};

/*
*else if (username.length < 6) {
    errors.username = 'Username should be 6 symbols long';
  } 

else if (email.length < 5) {
    errors.email = 'Invalid email';
  } 


  else if (password.length < 6) {
    errors.password = 'Password needs to be longer';
  } 


  else if (confirmPassword.length < 6) {
    errors.confirmPassword = 'Confirm password needs to be longer';
  } 
*/
