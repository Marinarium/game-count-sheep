import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import cl from './styles.module.scss';
import classNames from 'classnames';

interface ILogo {
  className?: string,
}

export const Logo: FC<ILogo> = ({className = ''}) => {
  return (
    <Link className={classNames(cl.logo, className)} to='/'>
      <img src={'/assets/img/logo.svg'} alt="Logo of Count Sheep"/>
    </Link>
  );
};