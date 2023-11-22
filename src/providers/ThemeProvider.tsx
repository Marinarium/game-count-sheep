import React, {type FC, ReactNode, useMemo, useState} from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../context/ThemeContext';

const currentTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.DARK;

interface IThemeProvider {
  children: ReactNode;
}


const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(currentTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
      </ThemeContext.Provider>
  );
};

export default ThemeProvider;
