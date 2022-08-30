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

  const scrollTo = (element) => window.scrollTo({ top: document.getElementById(element).offsetTop , behavior: 'smooth' });

  return (
    <>
      {state ? (
        <div className="my-auto fadeIn">
          <ul className="flex justify-center items-center space-x-4 text-sm md:text-sm font-[500]">
            <li>
              <p onClick={() => scrollTo('projects')} className="hover:underline">Proyectos</p>
            </li>
            <li>
              <p onClick={() => scrollTo('about')} className="hover:underline">Acerca</p>
            </li>
            <li>
              <p onClick={() => scrollTo('services')} className="hover:underline">Servicios</p>
            </li>
            <li>
              <p onClick={() => scrollTo('contact')} className="hover:underline">Contacto</p>
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
