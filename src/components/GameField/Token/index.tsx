import React from 'react';
import cl from './styles.module.scss';

const Token = () => {
  return (
    <div className={cl.token}>
      <img className={cl.img} width="43" height="43" alt="sheep" src="/assets/img/sheep-for-token.png"/>
    </div>
  );
};

export default Token;