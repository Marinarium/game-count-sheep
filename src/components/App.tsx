import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from "./Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import classNames from 'classnames';
import {useTheme} from "../hooks/useTheme";
import Profile from '../pages/Profile';

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
