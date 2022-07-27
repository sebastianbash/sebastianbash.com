import React, { useState } from 'react';
import {ToggleTheme, ToggleDropDown} from '../Toggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-[45px] lg:h-[70px] mt-[20px] relative">
      <nav className="w-full h-full nav-style">
        {
          isOpen ? (
            <div className="w-fit my-auto hidden md:block">
              <span className="font-bold lg:text-xl">Sebastian</span>
              <span className="font-light lg:text-xl">Silva</span>
            </div>
          ) : (
            <div className="w-fit my-auto">
              <span className="font-bold lg:text-xl">Sebastian</span>
              <span className="font-light lg:text-xl">Silva</span>
            </div>
          )
        }
        <div className="flex my-auto space-x-2 md:space-x-4 transition-all">
          <ToggleDropDown state={isOpen} _callback={() => setIsOpen(!isOpen)}/>
          <ToggleTheme />
        </div>
      </nav>
    </div>
  );
}
