import React, { useEffect, useState } from 'react';
import { HiArrowUp } from 'react-icons/hi';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () =>
    window.pageYOffset > 600 ? setIsVisible(true) : setIsVisible(false);

  const scrollTo = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top fixed right-8 bottom-10 flex flex-col justify-center items-center">
      <buton
        type="button"
        onClick={scrollTo}
        className={
          isVisible
            ? 'btn bg-white dark:bg-black p-4 border border-black dark:border-white text-black dark:text-white rounded-full shadow-xl text-2xl cursor-pointer active:bg-slate-100 dark:active:bg-gray-900 fadeIn opacity-100'
            : 'btn bg-white dark:bg-black p-4 border border-black dark:border-white text-black dark:text-white rounded-full shadow-xl text-2xl cursor-pointer active:bg-slate-100 dark:active:bg-gray-900 fadeOut opacity-0'
        }
      >
        <HiArrowUp className="w-6 h-6" area-hidden="true" />
      </buton>
    </div>
  );
}
