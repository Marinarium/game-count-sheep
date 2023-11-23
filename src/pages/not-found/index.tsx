import React from 'react';
import cl from './styles.module.scss';

const NotFound = () => {
  return (
    <section className={cl.notFound}>
      <h1 className={cl.title}>404</h1>
      <p className={cl.text}>Page not found</p>
    </section>
  );
};

export default NotFound;