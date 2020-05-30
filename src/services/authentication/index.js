import { auth } from 'firebase';

export const registerUser = async (email, password) => {
  try {
    const result = await auth().createUserWithEmailAndPassword(email, password);

    console.log(result);
  } catch (error) {
    console.log('error creating user', error);
  }
};

export const loginUser = async (email, password) => {
  try {
    return await auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.log(`error login with user: ${email}`, error);
  }
};
