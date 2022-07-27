import React, { useState, useContext } from 'react';
import {
  HiSun,
  HiMoon,
  HiChevronLeft,
  HiChevronRight,
  HiChevronDown,
  HiChevronUp,
} from 'react-icons/hi';
import ThemeContext from '../context/ThemeContext';

export const ToggleTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out bg-slate-600/80 lg:bg-transparent dark:lg:hover:bg-slate-600/80 lg:hover:bg-slate-800/80 rounded-md p-1 md:p-2 text-white lg:text-black hover:text-white dark:text-white cursor-pointer">
      {theme === 'dark' ? (
        <HiSun onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      ) : (
        <HiMoon onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      )}
    </div>
  );
};

export const ToggleDropDown = ({ state, _callback }) => {
  return (
    <>
      {state ? (
        <div className="my-auto fadeIn">
          <ul className="flex justify-center items-center space-x-4 text-sm md:text-base">
            <li>
              <a href="#Inicio">Inicio</a>
            </li>
            <li>
              <a href="#Proyecto">Proyectos</a>
            </li>
            <li>
              <a href="#Acerca">Acercas</a>
            </li>
            <li>
              <a href="#Contacto">Contacto</a>
            </li>
          </ul>
        </div>
      ) : null}
      <div
        onClick={_callback}
        className="transition duration-500 ease-in-out bg-slate-600/80 lg:bg-transparent dark:lg:hover:bg-slate-600/80 lg:hover:bg-slate-800/80 rounded-md p-1 md:p-2 text-white lg:text-black hover:text-white dark:text-white cursor-pointer"
      >
        {state ? <HiChevronRight /> : <HiChevronLeft />}
      </div>
    </>
  );
};
