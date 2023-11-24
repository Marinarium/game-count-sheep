import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from "./Layout";
import Home from "../pages/home";
import About from "../pages/about";
import classNames from 'classnames';
import {useTheme} from "../hooks/useTheme";
import Preferences from "../pages/preferences";
import NotFound from "../pages/not-found";
import Game from "../pages/game";

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/preferences" element={<Preferences/>}/>
          <Route path="/game" element={<Game/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
