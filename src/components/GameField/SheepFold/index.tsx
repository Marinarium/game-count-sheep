import React from 'react';
import cl from "./styles.module.scss";
import Token from "../Token";

const SheepFold = () => {
  const sheepArr = new Array(30).fill('');

  return (
    <div className={cl.sheepfold}>
      {sheepArr.map((_) => <Token />)}
    </div>
  );
};

export default SheepFold;