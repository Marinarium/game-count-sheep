import React from 'react';
import cl from './styles.module.scss';
import SVGSprite from "../SVGSprite";

const GameProcess = () => {
  return (
    <div className={cl.wrap}>
      <p className={cl.param}>Game time: 0:00</p>
      <p className={cl.param}>Score: 0</p>
      <div className={cl.live}>
        <SVGSprite className={cl.heart} width={30} height={30} path="/assets/img/sprite" name="heart"/>
        <SVGSprite className={cl.heart} width={30} height={30} path="/assets/img/sprite" name="heart"/>
        <SVGSprite className={cl.heart} width={30} height={30} path="/assets/img/sprite" name="heart"/>
      </div>
    </div>
  );
};

export default GameProcess;