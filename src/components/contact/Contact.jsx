import React from 'react';
import { HiArrowUp } from 'react-icons/hi';

export default function Contact() {
  return (
    <div id="contact" className="contact-section w-full h-full flex flex-col justify-center">
        <div className="contact-container md:w-2/4 mx-auto flex flex-col justify-center items-center space-y-14 my-[80px] lg:my-[100px]">
            <div className="contact-title w-full">
                <h3 className="text-[#0D0E10] text-5xl font-[600] leading-[3.5rem] tracking-[-2px] md:tracking-[-1.8px]">Let me know if you want to talk about a potential collaboration. I’m available for freelance work.</h3>
            </div>
            <div className="contact-cta-link w-full">
                <a href="#" className="cta-link underline flex text-[#F3CEB1] hover:text-green-200 text-5xl leading-[3.5rem] font-[600] transition-all">
                    <span className="">Let's design your app</span>
                    <span className=""><HiArrowUp className="rotate-45" /></span>
                </a>
            </div>
        </div>
    </div>
  )
}
