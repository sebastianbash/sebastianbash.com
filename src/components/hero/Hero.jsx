import React from 'react';
import AvatarImg from '../../assets/img/avatar.webp';

export default function Hero() {

  return (
    <div className="hero min-h-screen mt-10">
      <div className="hero-content flex flex-col justify-center items-center w-2/3 mx-auto">
        <div className="hero-avatar mb-10">
          <img
            src={AvatarImg}
            alt="Sebastian Silva Image"
            className="max-w-sm lg:max-w-xs md:w-1/2 mx-auto rounded-full shadow-2xl border-2 border-black"
          />
        </div>
        <div className="hero-title mb-10">
          <h3 className="hello text-3xl p-0 m-0 font-[600] tracking-[-.96px] text-[#333333]">Hola, Soy Sebastian 🤟</h3>
        </div>
        <div className="hero-desc mb-10">
          <h1 className="text-center p-0 m-0 font-bold text-[5rem] leading-[5.5rem] tracking-[-2.4px]">
            Creativo y Entusiasta Desarrollador Web Frontend 
          </h1>
        </div>
        <div className="hero-skills mb-10">
          <p className="text-2xl text-center tracking-[.24px] mx-12">a <span className="font-bold">Product Designer</span> and <span className="font-bold">Visual Developer</span> in SF. I specialize in UI/UX Design, Responsive Web Design, and Visual Development.</p>
        </div>
        <div className="hero-btn-contact mb-10">
          <button className="bg-black rounded-full px-14 py-6 text-sm uppercase font-[600] text-white dark:text-black tracking-[.42px] hover:shadow-2xl active:bg-black/90 transition-all">contacta conmigo</button>
        </div>
      </div>
    </div>
  );
}
