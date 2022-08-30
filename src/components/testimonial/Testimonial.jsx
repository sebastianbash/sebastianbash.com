import React from 'react';
import Carousel from './Carousel';

export default function Testimonial() {
  return (
    <div className="testimonials-section w-full h-full flex flex-col justify-center">
        <div className="testimonials-wrapper w-full space-y-20 my-[80px] lg:my-[100px]">
            <div className="testimonials-title w-full">
                <h2 className="text-[#0D0E10] text-5xl text-center md:text-normal font-[700] tracking-[-1.44px]">Trusted by brands all over the world</h2>
            </div>
            <div className="testimonials-container w-full">
                <Carousel />
            </div>
        </div>
    </div>
  )
}
