import React, { useState, useContext } from 'react';
import { HiSun, HiMoon, HiChevronLeft, HiChevronDown } from 'react-icons/hi';
import ThemeContext from '../context/ThemeContext';

export const ToggleTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out bg-black/80 rounded-full p-1 md:p-2 text-white dark:text-white cursor-pointer">
      {theme === 'dark' ? (
        <HiSun onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      ) : (
        <HiMoon onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      )}
    </div>
  );
};
