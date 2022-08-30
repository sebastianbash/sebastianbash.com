import React, { useState, useRef } from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';

export default function FreqQuestions() {
    const [isOpen, setIsOpen] = useState(false);

    // TODO: remove this variables when the backend is already!
    let Answer1 = useRef();
    let Answer2 = useRef();
    let Answer3 = useRef();
    let Answer4 = useRef();
    
    let Arrow1 = useRef();
    let Arrow2 = useRef();
    let Arrow3 = useRef();
    let Arrow4 = useRef();

    const displayAnswer = (answer) => {
        const paragraph = answer.current;
        
        setIsOpen(!isOpen);
        isOpen ? paragraph.classList.remove('hidden') : paragraph.classList.add('hidden');
    }

    const rotateArrow = (arrow) => {
        const btn = arrow.current;
        
        isOpen ? btn.classList.add('rotate-180') : btn.classList.remove('rotate-180');
    }

  return (
    <div className="faq-section w-full h-full flex flex-col justify-center">
        <div className="faq-wrapper w-full h-full my-[80px] lg:my-[100px]">
            <div className="faq-container md:w-4/5 mx-auto space-y-16">
                <div className="faq-title">
                    <h2 className="text-[#0D0E10] text-5xl leading-[3.5rem] font-[600] tracking-[-2.4px] text-center">A few things 🙄<br/>clients normally ask me:</h2>
                </div>
                <div className="faq-wrapper w-full h-full">
                    <ul className="md:w-2/3 mx-auto space-y-14 flex flex-col justify-center">
                        <li onClick={() => { displayAnswer(Answer1); rotateArrow(Arrow1); } }  className="faq-question-bar flex flex-col justify-between items-center text-[#0D0E10] text-[2rem] tracking-[-.96px] leading-[2.5rem] font-[500] cursor-pointer transition-all">
                            <div className="w-full h-full flex justify-between items-center mb-10 cursor-pointer">
                                <p className="question-title">What is your work dicipline?</p>
                                <span ref={Arrow1}><HiOutlineChevronDown /></span>
                            </div>
                            <p ref={Answer1} className="faq-paragraph hidden text-[#3F4451] text-sm font-light tracking-[.16px]">Occaecat anim sunt veniam Lorem voluptate. Occaecat excepteur ullamco enim aute. Labore eu magna est dolor consectetur quis aliquip esse labore aliquip in ullamco. Elit commodo tempor sunt ad culpa laboris ipsum ipsum. Exercitation ipsum labore tempor veniam tempor laboris fugiat consequat occaecat. Id pariatur duis sit adipisicing aliqua consectetur deserunt sit ex cupidatat incididunt dolore officia. Occaecat ut et laboris ullamco officia sunt ut.</p>
                        </li>
                        <li onClick={() => { displayAnswer(Answer2); rotateArrow(Arrow2)}} className="faq-question-bar flex flex-col justify-between items-center text-[#0D0E10] text-[2rem] tracking-[-.96px] leading-[2.5rem] font-[500] cursor-pointer ">
                            <div className="w-full h-full flex justify-between items-center mb-10 cursor-pointer">
                                <p className="question-title">What is your location & timezone?</p>
                                <span ref={Arrow2}><HiOutlineChevronDown /></span>
                            </div>
                            <p ref={Answer2} className="faq-paragraph hidden text-[#3F4451] text-sm font-light tracking-[.16px]">Occaecat anim sunt veniam Lorem voluptate. Occaecat excepteur ullamco enim aute. Labore eu magna est dolor consectetur quis aliquip esse labore aliquip in ullamco. Elit commodo tempor sunt ad culpa laboris ipsum ipsum. Exercitation ipsum labore tempor veniam tempor laboris fugiat consequat occaecat. Id pariatur duis sit adipisicing aliqua consectetur deserunt sit ex cupidatat incididunt dolore officia. Occaecat ut et laboris ullamco officia sunt ut.</p>
                        </li>
                        <li onClick={() => { displayAnswer(Answer3); rotateArrow(Arrow3)}} className="faq-question-bar flex flex-col justify-between items-center text-[#0D0E10] text-[2rem] tracking-[-.96px] leading-[2.5rem] font-[500] cursor-pointer ">
                            <div className="w-full h-full flex justify-between items-center mb-10 cursor-pointer">
                                <p className="question-title">How often we can communicate?</p>
                                <span ref={Arrow3}><HiOutlineChevronDown /></span>
                            </div>
                            <p ref={Answer3} className="faq-paragraph hidden text-[#3F4451] text-sm font-light tracking-[.16px]">Occaecat anim sunt veniam Lorem voluptate. Occaecat excepteur ullamco enim aute. Labore eu magna est dolor consectetur quis aliquip esse labore aliquip in ullamco. Elit commodo tempor sunt ad culpa laboris ipsum ipsum. Exercitation ipsum labore tempor veniam tempor laboris fugiat consequat occaecat. Id pariatur duis sit adipisicing aliqua consectetur deserunt sit ex cupidatat incididunt dolore officia. Occaecat ut et laboris ullamco officia sunt ut.</p>
                        </li>
                        <li onClick={() => { displayAnswer(Answer4); rotateArrow(Arrow4)}} className="faq-question-bar flex flex-col justify-between items-center text-[#0D0E10] text-[2rem] tracking-[-.96px] leading-[2.5rem] font-[500] cursor-pointer ">
                            <div className="w-full h-full flex justify-between items-center mb-10 cursor-pointer">
                                <p className="question-title">What is your hourly rate?</p>
                                <span ref={Arrow4}><HiOutlineChevronDown /></span>
                            </div>
                            <p ref={Answer4} className="faq-paragraph hidden text-[#3F4451] text-sm font-light tracking-[.16px]">Occaecat anim sunt veniam Lorem voluptate. Occaecat excepteur ullamco enim aute. Labore eu magna est dolor consectetur quis aliquip esse labore aliquip in ullamco. Elit commodo tempor sunt ad culpa laboris ipsum ipsum. Exercitation ipsum labore tempor veniam tempor laboris fugiat consequat occaecat. Id pariatur duis sit adipisicing aliqua consectetur deserunt sit ex cupidatat incididunt dolore officia. Occaecat ut et laboris ullamco officia sunt ut.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
