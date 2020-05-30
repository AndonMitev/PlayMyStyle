import { auth } from 'firebase';

export const getCurrentUser = () => {
  try {
    return new Promise((resolve, reject) => {
      auth().onAuthStateChanged(user => {
        resolve(user);
      });
    });
  } catch (error) {
    console.log('Error getting profile', error);
  }
};
