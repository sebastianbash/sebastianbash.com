import React from 'react';
import AvatarImg from '../../assets/img/avatar.webp';

export default function Hero() {

  return (
    <div className="hero min-h-screen mt-24 md:mt-22 lg:mt-11">
      <div className="hero-content flex flex-col justify-center items-center lg:w-2/3 mx-auto">
        <div className="hero-avatar mb-8 md:mb-10">
          <img
            src={AvatarImg}
            alt="Sebastian Silva Image"
            className="lg:max-w-xs lg:w-1/2 md:w-1/3 w-2/5 mx-auto rounded-full shadow-2xl border-2 border-black"
          />
        </div>
        <div className="hero-title mb-8 md:mb-10">
          <h3 className="hello text-[2rem] p-0 m-0 font-[600] leading-[2rem] tracking-[-.96px] text-[#333333]">Hola, Soy Sebastian 🤘</h3>
        </div>
        <div className="hero-desc mb-10">
          <h1 className="text-center md:text-normal p-0 m-0 font-bold text-[3rem] md:text-[5rem] leading-[50.4px] md:leading-[5.5rem] tracking-[-2.4px]">
            Creativo Entusiasta Desarrollador Web Frontend.
          </h1>
        </div>
        <div className="hero-skills mb-16">
          <p className="text-2xl text-center tracking-[.24px] md:mx-20 lg:mx-12">a <span className="font-bold">Product Designer</span> and <span className="font-bold">Visual Developer</span> in SF. I specialize in UI/UX Design, Responsive Web Design, and Visual Development.</p>
        </div>
        <div className="hero-btn-contact mb-8 md:mb-10">
          <a href="#contact" className="bg-black rounded-full px-14 py-6 text-sm uppercase font-[600] text-white dark:text-black tracking-[.42px] hover:shadow-2xl active:bg-black/90 transition-all">contacta conmigo</a>
        </div>
      </div>
    </div>
  );
}
