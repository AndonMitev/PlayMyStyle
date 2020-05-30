import React, { useEffect } from 'react';
import { getCurrentUser } from '../../../services/profile';

const Profile = () => {
  useEffect(() => {
    const _getCurrentUser = async () => {
      const currentUser = await getCurrentUser();

      console.log(currentUser);
    };

    _getCurrentUser();
  }, []);

  return <></>;
};

export default Profile;
