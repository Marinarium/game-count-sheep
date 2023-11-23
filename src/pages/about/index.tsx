import React from 'react';
import cl from './styles.module.scss';
import Benefits from "../../components/Benifits";

const About = () => {
  return (
    <div className={cl.about}>
      <Benefits />
    </div>
  );
};

export default About;