import React from 'react';
import cl from './styles.module.scss';
import Welcome from "../../components/Welcome";

const Home = () => {
  return (
    <div className={cl.home}>
      <Welcome />
    </div>
  );
};

export default Home;