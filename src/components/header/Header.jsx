import React, { useState } from 'react';
import {ToggleTheme} from '../Toggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full h-[45px] lg:h-[70px] mt-[20px]">
      <nav className="w-full h-full nav-style">
        <div className="w-fit my-auto">
          <span className="font-bold lg:text-xl">Sebastian</span>
          <span className="font-light lg:text-xl">Silva</span>
        </div>
        <div className="flex my-auto space-x-2 md:space-x-4">
          <ToggleTheme />
        </div>
      </nav>
    </div>
  );
}
