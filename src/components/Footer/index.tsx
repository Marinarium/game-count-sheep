import React from 'react';
import cl from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={cl.footer}>
      <span>&lt; &gt;</span> by <a className={cl.link} href="https://github.com/Marinarium">Schwabauer Marina</a> 2023
    </footer>
  );
};

export default Footer;