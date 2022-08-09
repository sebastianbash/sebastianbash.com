import React from 'react';
import Brand1 from '../../assets/img/goog-brand.svg';
import Brand2 from '../../assets/img/uber-brand.svg';
import Brand3 from '../../assets/img/evel-brand.svg';
import Brand4 from '../../assets/img/stack-brand.svg';

export default function Clients() {
  return (
    <div className="lg:h-[28rem] w-full md:flex md:flex-col md:justify-center md:items-center">
        <div className="container lg:h-[11rem] md:flex md:flex-col md:justify-between md:items-center">
            <div className="cli-title">
                <h3 className="text-[2rem] leading-[2rem] tracking-[-.96px] text-center font-[600]">Clientes</h3>
            </div>
            <div className="cli-brands flex flex-row justify-center items-center space-x-16">
                <div className="logo-card px-8 py-6 opacity-50 hover:opacity-100 bg-white hover:shadow-xl transition-all">
                    <img src={Brand1} alt="Client" className="" />
                </div>
                <div className="logo-card px-8 py-6 opacity-50 hover:opacity-100 bg-white hover:shadow-xl transition-all">
                    <img src={Brand2} alt="Client" className="" />
                </div>
                <div className="logo-card px-8 py-6 opacity-50 hover:opacity-100 bg-white hover:shadow-xl transition-all">
                    <img src={Brand3} alt="Client" className="" />
                </div>
                <div className="logo-card px-8 py-6 opacity-50 hover:opacity-100 bg-white hover:shadow-xl transition-all">
                    <img src={Brand4} alt="Client" className="" />
                </div>
            </div>
        </div>
    </div>
  )
}
