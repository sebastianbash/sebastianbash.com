import React, { useState, useContext } from 'react';
import {
  HiSun,
  HiMoon,
  HiOutlineMenu,
  HiOutlineX
} from 'react-icons/hi';
import ThemeContext from '../../context/ThemeContext';

export const ToggleTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out bg-transparent p-1 md:p-2 text-black dark:text-white text-2xl cursor-pointer">
      {theme === 'dark' ? (
        <HiSun onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      ) : (
        <HiMoon onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      )}
    </div>
  );
};

export const ToggleNavigation = ({ state, _callback }) => {
  return (
    <>
      {state ? (
        <div className="my-auto fadeIn">
          <ul className="flex justify-center items-center space-x-4 text-sm md:text-sm font-[500]">
            <li>
              <a href="#Proyectos" className="hover:underline">Proyectos</a>
            </li>
            <li>
              <a href="#Acerca" className="hover:underline">Acerca</a>
            </li>
            <li>
              <a href="#Servicios" className="hover:underline">Servicios</a>
            </li>
            <li>
              <a href="#Contacto" className="hover:underline">Contacto</a>
            </li>
          </ul>
        </div>
      ) : null}
      <div
        onClick={_callback}
        className="transition duration-500 ease-in bg-transparent border rounded-full p-1 md:p-2 text-black dark:text-white text-2xl cursor-pointer"
      >
        {state ? <HiOutlineX /> : <HiOutlineMenu />}
      </div>
    </>
  );
};
