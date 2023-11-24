import React from 'react';
import cl from './styles.module.scss';
import GameProcess from "../../components/GameProcess";
import GameField from "../../components/GameField";

const Game = () => {
  return (
    <div>
      <GameProcess/>
      <GameField/>
    </div>
  );
};

export default Game;