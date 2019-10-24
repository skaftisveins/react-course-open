import { createContext } from 'react';

export const themes = {
  light: {
    background: '#f8f8f2',
    foreground: '#000000',
    fontColor: '#556644'
  },
  dark: {
    background: '#999999',
    foreground: '#f8f8f2',
    fontColor: '#f8f'
  }
};

export const themeContext = createContext({
  theme: themes.dark,
  toggleTheme: () => {}
});
