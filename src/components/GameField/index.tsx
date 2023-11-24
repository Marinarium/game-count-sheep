import React from 'react';
import cl from './styles.module.scss';
import {Button} from "../Button";
import SheepFold from "./SheepFold";
import GameOptions from "./GameOptions";

const GameField = () => {
  return (
    <div className={cl.wrap}>
      <div className={cl.field}>
        <SheepFold />
        {/*<GameOptions />*/}
      </div>
      <Button>Finish</Button>
    </div>
  );
};

export default GameField;