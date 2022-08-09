import React from 'react';
import Icon1 from '../../assets/img/icon1.webp';
import Icon2 from '../../assets/img/icon2.webp';
import Icon3 from '../../assets/img/icon3.webp';

export default function Services() {
  return (
    <div className="services-section">
      <div className="services-wrapper w-full h-[90rem] lg:h-[40rem] relative flex flex-col justify-evenly items-center">
        <div className="service-title">
          <h2 className="text-[2.5rem] leading-[2.75rem] tracking-[-1.2px] text-center text-[##0D0E10] font-[600]">
            Servicios
          </h2>
        </div>
        <div className="services-cards w-full h-5/6 md:h-4/5 flex flex-col justify-around items-center lg:flex-row md:justify-evenly lg:justify-between md:items-center">
          <div className="service-card hover:shadow-xl transition-all w-4/5 md:w-3/5 lg:w-[20.8rem] h-[20rem] md:h-[22rem] lg:h-[22rem] bg-white py-12 px-8 flex flex-col justify-around space-y-8">
            <img src={Icon3} alt="Service 1" className="w-16 h-16" />
            <h4 className="text-2xl tracking-[-.6px] font-[600] text-[#0D0E10]">Design UI/UX</h4>
            <p>
              Defining the problem, identifying the scope and finally,
              organising the design roadmap to bring out 100% of every project.
            </p>
          </div>
          <div className="service-card hover:shadow-xl transition-all w-4/5 md:w-3/5 lg:w-[20.8rem] h-[20rem] md:h-[22rem] lg:h-[22rem] bg-white py-12 px-8 flex flex-col justify-around space-y-8">
            <img src={Icon2} alt="Service 1" className="w-16 h-16" />
            <h4 className="text-2xl tracking-[-.6px] font-[600] text-[#0D0E10]">Design UI/UX</h4>
            <p>
              Defining the problem, identifying the scope and finally,
              organising the design roadmap to bring out 100% of every project.
            </p>
          </div>
          <div className="service-card hover:shadow-xl transition-all w-4/5 md:w-3/5 lg:w-[20.8rem] h-[20rem] md:h-[22rem] lg:h-[22rem] bg-white py-12 px-8 flex flex-col justify-around space-y-8">
            <img src={Icon1} alt="Service 1" className="w-16 h-16" />
            <h4 className="text-2xl tracking-[-.6px] font-[600] text-[#0D0E10]">Mobile App</h4>
            <p>
              Defining the problem, identifying the scope and finally,
              organising the design roadmap to bring out 100% of every project.
            </p>
          </div>
        </div>
        <div className="services-bg absolute -z-10 w-full lg:w-3/4 h-full"></div>
      </div>
    </div>
  );
}
