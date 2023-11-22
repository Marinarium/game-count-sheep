import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../Header";
import cl from './styles.module.scss';

const Layout = () => {
  return (
    <>
      <Header/>
      <main className={cl.main}>
        <Outlet/>
      </main>
    </>
  );
};

export default Layout;