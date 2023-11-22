import React from 'react';
import Navigation from "../Navigation";
import {Logo} from "../Logo";
import cl from './styles.module.scss';

const Header = () => {
  return (
    <header className={cl.header}>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;