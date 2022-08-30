import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToggleTheme, ToggleNavigation } from '../toggle/Toggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-[45px] lg:h-32 mt-[40px] md:mt-[45px] lg:mt-0 relative">
      <nav className="w-full h-full nav-style">
        {isOpen ? (
          <div className="navigation-left w-fit my-auto">
            <Link to="/">
              <span className="font-bold text-lg lg:text-xl uppercase hidden md:inline-block">
                Sebastian
              </span>
              <span className="font-light text-lg lg:text-xl uppercase hidden md:inline-block">
                Silva
              </span>
            </Link>
          </div>
        ) : (
          <div className="navigation-left w-fit my-auto">
            <Link to="/">
              <span className="font-bold text-lg lg:text-xl uppercase">
                Sebastian
              </span>
              <span className="font-light text-lg lg:text-xl uppercase">
                Silva
              </span>
            </Link>
          </div>
        )}
        <div className="navigation-right flex my-auto space-x-2 md:space-x-4 transition-all">
          <ToggleNavigation
            state={isOpen}
            _callback={() => setIsOpen(!isOpen)}
          />
          {/* <ToggleTheme /> */}
        </div>
      </nav>
    </div>
  );
}
