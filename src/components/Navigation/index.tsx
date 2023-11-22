import React from 'react';
import NavItem from './NavItem';
import cl from './styles.module.scss';
import {menu} from "../../constants/menu";

const Navigation = () => {
  return (
    <nav className={cl.navigation}>
      <ul className={cl.list}>
        {menu.map(item => <NavItem key={item.path} path={item.path}>{item.content}</NavItem>)}
      </ul>
    </nav>
  );
};

export default Navigation;