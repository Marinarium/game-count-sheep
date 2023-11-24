import React from 'react';
import {Button} from "../Button";
import cl from './styles.module.scss';
import {Link} from "react-router-dom";

const Welcome = () => {
  return (
    <section className={cl.section}>
      <h1 className={cl.title}>Welcome to Count Sheep!</h1>
      <p className={cl.lead}>Don't put limits on your mind.</p>
      <p className={cl.rule}>Sheep appear on the game field for a short period of time. You need to quickly count the number of sheep and
        select the correct answer. The speed and quantity of sheep gradually increase, making the game more challenging
        with each step.</p>
      <Link to='/game'><Button>Play</Button></Link>
    </section>
  );
};

export default Welcome;