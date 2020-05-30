import { auth } from 'firebase';

export const registerUser = async (email, password) => {
  try {
    const result = await auth().createUserWithEmailAndPassword(email, password);

    console.log(result);
  } catch (error) {
    console.log('error creating user', error);
  }
};
