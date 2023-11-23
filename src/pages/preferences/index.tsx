import React from 'react';
import {Button} from "../../components/Button";
import { useTheme } from '../../hooks/useTheme';
import cl from './styles.module.scss';

const Preferences = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className={cl.preferences}>
      <Button onClick={toggleTheme}>Change Theme</Button>
    </div>
  );
};

export default Preferences;