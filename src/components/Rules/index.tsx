import React from 'react';
import {Button} from "../UI/Button";
import cl from './styles.module.scss';

const Rules = () => {
  return (
    <section className={cl.rules}>
      <h2 className={cl.title}>Rules</h2>
      <p className={cl.text}>Sheep appear on the game field for a short period of time. You need to quickly count the number of sheep and
        select the correct answer. The speed and quantity of sheep gradually increase, making the game more challenging
        with each step.</p>
      <Button>Play</Button>
    </section>
  );
};

export default Rules;