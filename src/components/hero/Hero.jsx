import React from 'react';

export default function Hero() {

  return (
    <div className="hero min-h-screen mt-10">
      <div className="hero-content flex flex-col-reverse md:flex-row-reverse">
        <img
          src="https://placeimg.com/260/400/arch"
          className="max-w-sm lg:max-w-md lg:w-1/2 rounded-lg shadow-2xl"
        />
        
        <div className="md:flex md:flex-col md:justify-center">
          <p className="capitalize">Soy</p>
          <h1 className="text-5xl font-[800] uppercase inline-block">
            sebastian
          </h1>
          <span className="text-5xl uppercase">silva agurto</span>
          <p className="py-6 text-justify md:w-3/4 lg:w-1/2">
            Entusiasta desarrollador web front-end de Lima, Perú actualmente
            trabaja en cosas nuevas y emocionantes. Siempre espero comenzar algo
            nuevo y espero poder ofrecer soluciones auténticas que inspiren a
            otros.
          </p>
          <button className="mb-6 w-fit py-2 px-4 border dark:border-white/20 border-black/20 rounded-md">Bienvenido 👋</button>
        </div>
      </div>
    </div>
  );
}
