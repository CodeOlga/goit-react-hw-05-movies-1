import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { useTheme, ThemeProvider };

//ШАГИ ПО СОЗДАНИЮ ТЕМНОЙ/СВЕТЛОЙ ТЕМЫ
//1. создаем этот компонент
//2. в index.js:
//import { ThemeProvider } from './ThemeContext';
//оборачиваем App в    <ThemeProvider></ThemeProvider>
//3. пишем в документах Layout.jsx код, в Layout.styled.js стили
