import React from 'react';
import {Button} from "../components/UI/Button";
import { useTheme } from '../hooks/useTheme';

const Profile = () => {
  const { toggleTheme } = useTheme();

  return (
    <>
      <Button onClick={toggleTheme}>Change Theme</Button>
    </>
  );
};

export default Profile;