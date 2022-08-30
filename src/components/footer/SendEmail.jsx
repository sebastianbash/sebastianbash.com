import React, { useState } from 'react';

export default function SendEmail({ icon, iconSwap }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="flex justify-end items-center cursor-pointer"
      >
        <span className="px-8 hidden lg:block">
          {isHover ? icon : iconSwap}
        </span>
        {isHover ? (
          <span className="text-[#0D0E10] text-lg font-[600] tracking-[-.6px]">
            hi@sebastianbash.com
          </span>
        ) : (
          <span className="text-[#0D0E10] text-lg font-[600] tracking-[-.6px]">
            &copy; {new Date().getFullYear()} SebastianBash
          </span>
        )}
      </div>
    </div>
  );
}
