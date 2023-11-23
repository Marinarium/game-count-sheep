import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../Header";
import cl from './styles.module.scss';
import Footer from "../Footer";

const Layout = () => {
  return (
    <div className={cl.layout}>
      <Header/>
      <main className={cl.main}>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;