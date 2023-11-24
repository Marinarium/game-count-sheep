import React from 'react';
import cl from "./styles.module.scss";
import {Button, SizeButton, ThemeButton} from "../../Button";

const GameOptions = () => {
  return (
    <div className={cl.options}>
      <Button size={SizeButton.BIG} theme={ThemeButton.SECONDARY}>12</Button>
      <Button size={SizeButton.BIG} theme={ThemeButton.TOMATO}>10</Button>
      <Button size={SizeButton.BIG} theme={ThemeButton.YELLOW}>15</Button>
      <Button size={SizeButton.BIG} theme={ThemeButton.ORANGE}>13</Button>
    </div>
  );
};

export default GameOptions;