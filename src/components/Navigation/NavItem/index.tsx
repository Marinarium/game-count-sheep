import classNames from 'classnames';
import React, {FC, ReactNode} from 'react';
import {Link, useLocation} from 'react-router-dom';
import cl from './styles.module.scss';

interface INavItem {
  path: string;
  children: ReactNode;
}

const NavItem: FC<INavItem> = ({path, children}) => {
  const appearances = {
    [cl["link--active"]]: useLocation().pathname === path,
  };

  return (
    <li>
      <Link to={path} className={classNames(cl.link, appearances)}>{children}</Link>
    </li>
  );
};

export default NavItem;