import React from 'react';
import { HiOutlineArrowUp, HiOutlineHashtag, HiOutlineCode} from 'react-icons/hi';
import ContactAvatar from '../../assets/img/contact-avatar.png';

export default function Resume() {
  return (
    <div id="about" className="resume-section w-full h-full flex flex-col justify-center">
      <div className="container space-y-20 my-[80px] lg:my-[100px]">
        <div className="title">
          <h2 className="text-5xl font-bold tracking-[-1.44px] text-[#0D0E10]">
            Resume
          </h2>
        </div>
        <div className="resume-grid grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="resume-grid-item h-[27rem] col-span-1 flex flex-col">
            <div className="resume-title">
              <h3 className="text-[2rem] leading-[2rem] tracking-[-.96px] text-[#333333} font-[600]">
                Work Experience
              </h3>
            </div>
            <div className="resume-works w-full my-auto">
              <div className="resume-work w-full space-y-8 md:space-y-10">
                <div className="item space-y-2 md:space-y-4 transition-all md:hover:ml-4 cursor-pointer">
                  <div className="heading w-full flex items-center">
                    <h4 className="text-2xl font-[600] text-[#0D0E10] tracking-[-.6px]">
                      Uber
                    </h4>
                    <HiOutlineArrowUp className="text-2xl font-[600] text-[#0D0E10] tracking-[-.6px] ml-4 rotate-45" />
                  </div>
                  <p className="text-md font-[500] text-[#0D0E10] tracking-[-.6px]">
                    Product Designer
                  </p>
                  <p className="text-md font-[500] text-[#3F4451] tracking-[-.6px]">
                    August 2018 - December 2019
                  </p>
                </div>
                <div className="item space-y-2 md:space-y-4 transition-all md:hover:ml-4 cursor-pointer">
                  <div className="heading w-full flex items-center">
                    <h4 className="text-2xl font-[600] text-[#0D0E10] tracking-[-.6px]">
                      Apple
                    </h4>
                    <HiOutlineArrowUp className="text-2xl font-[600] text-[#0D0E10] tracking-[-.6px] ml-4 rotate-45" />
                  </div>
                  <p className="text-md font-[500] text-[#0D0E10] tracking-[-.6px]">
                    Product Designer
                  </p>
                  <p className="text-md font-[500] text-[#3F4451] tracking-[-.6px]">
                    August 2019 - Current
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-grid-item h-[27rem] col-span-1 flex flex-col">
            <div className="resume-title">
              <h3 className="text-[2rem] leading-[2rem] tracking-[-.96px] text-[#333333} font-[600]">
                Education
              </h3>
            </div>
            <div className="resume-works w-full my-auto">
              <div className="resume-work w-full space-y-8 md:space-y-10">
                <div className="item space-y-2 md:space-y-4 transition-all md:hover:ml-4 cursor-pointer">
                  <div className="heading w-full flex items-center">
                    <h4 className="text-2xl font-[600] text-[#0D0E10] tracking-[-.6px]">
                      QUT Polytechnic Institute
                    </h4>
                    <HiOutlineArrowUp className="text-2xl font-[600] text-[#0D0E10] tracking-[-.6px] ml-4 rotate-45" />
                  </div>
                  <p className="text-md font-[500] text-[#0D0E10] tracking-[-.6px]">
                    MS • Information Design & Technology
                  </p>
                  <p className="text-md font-[500] text-[#3F4451] tracking-[-.6px]">
                    2016 - 2017
                  </p>
                </div>
                <div className="item space-y-2 md:space-y-4 transition-all md:hover:ml-4 cursor-pointer">
                  <div className="heading w-full flex items-center">
                    <h4 className="text-2xl font-[600] text-[#0D0E10] tracking-[-.6px]">
                      Florida Gulf Coast University
                    </h4>
                    <HiOutlineArrowUp className="text-2xl font-[600] text-[#0D0E10] tracking-[-.6px] ml-4 rotate-45" />
                  </div>
                  <p className="text-md font-[500] text-[#0D0E10] tracking-[-.6px]">
                    BA • Psychology
                  </p>
                  <p className="text-md font-[500] text-[#3F4451] tracking-[-.6px]">
                    2014 - 2015
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-grid-item h-[27rem] col-span-1 flex flex-col">
            <div className="resume-title">
              <h3 className="text-[2rem] leading-[2rem] tracking-[-.96px] text-[#333333} font-[600]">
                Skills
              </h3>
            </div>
            <div className="resume-works w-full my-auto">
              <div className="resume-work w-full space-y-8 md:space-y-10">
                <div className="flex justify-between items-center">
                    <div className="item space-y-8 md:space-y-10 transition-all">
                        <div className="heading w-full flex items-center">
                            <h4 className="text-2xl font-[700] text-[#0D0E10] tracking-[-.6px]">
                                Design
                            </h4>
                            <HiOutlineHashtag className="text-2xl font-[600] text-[#0D0E10] tracking-[-.6px] ml-4" />
                        </div>
                        <div className="">
                            <ul>
                                <li className="space-y-4 md:space-y-6 text-[#3F4451]">
                                    <p>Product Design</p>
                                    <p>UI/UX Design</p>
                                    <p>Visual Design</p>
                                    <p>Wireframing</p>
                                    <p>Prototyping</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="item space-y-8 md:space-y-10 md:mr-24 transition-all">
                        <div className="heading w-full flex items-center">
                            <h4 className="text-2xl font-[700] text-[#0D0E10] tracking-[-.6px]">
                                Development
                            </h4>
                            <HiOutlineCode className="text-2xl font-[600] text-[#0D0E10] tracking-[-.6px] ml-4" />
                        </div>
                        <div className="">
                            <ul>
                                <li className="space-y-4 md:space-y-6 text-[#3F4451]">
                                    <p>Visual Development</p>
                                    <p>Webflow Development</p>
                                    <p>Front-End Development</p>
                                    <p>HTML5/CSS3</p>
                                    <p>No-Code Solutions</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-grid-item h-[27rem] col-span-1 flex flex-col">
            <div className="resume-title">
              <h3 className="text-[2rem] leading-[2rem] tracking-[-.96px] text-[#333333} font-[600]">
                Online Courses
              </h3>
            </div>
            <div className="resume-works w-full my-auto">
              <div className="resume-work w-full space-y-8 md:space-y-10">
                <div className="item space-y-2 md:space-y-4 transition-all md:hover:ml-4 cursor-pointer">
                  <div className="heading w-full flex items-center">
                    <h4 className="text-2xl font-[600] text-[#0D0E10] tracking-[-.6px]">
                      Webflow
                    </h4>
                    <HiOutlineArrowUp className="text-2xl font-[600] text-[#0D0E10] tracking-[-.6px] ml-4 rotate-45" />
                  </div>
                  <p className="text-md font-[500] text-[#0D0E10] tracking-[-.6px]">
                    The Freelancer's Journey
                  </p>
                  <p className="text-md font-[500] text-[#3F4451] tracking-[-.6px]">
                    July 2019 - August 2019
                  </p>
                </div>
                <div className="item space-y-2 md:space-y-4 transition-all md:hover:ml-4 cursor-pointer">
                  <div className="heading w-full flex items-center">
                    <h4 className="text-2xl font-[600] text-[#0D0E10] tracking-[-.6px]">
                        SuperHi  
                    </h4>
                    <HiOutlineArrowUp className="text-2xl font-[600] text-[#0D0E10] tracking-[-.6px] ml-4 rotate-45" />
                  </div>
                  <p className="text-md font-[500] text-[#0D0E10] tracking-[-.6px]">
                    Intro to User Experience Design
                  </p>
                  <p className="text-md font-[500] text-[#3F4451] tracking-[-.6px]">
                    August 2019 - December 2019
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-grid-item h-[27rem] col-span-1 flex flex-col">
            <div className="resume-title">
              <h3 className="text-[2rem] leading-[2rem] tracking-[-.96px] text-[#333333} font-[600]">
                Tools
              </h3>
            </div>
            <div className="resume-works w-full my-auto">
              <div className="resume-work w-full space-y-8 md:space-y-10">
                <div className="flex justify-between items-center">
                    <div className="item space-y-8 md:space-y-10 transition-all">
                        <div className="heading w-full flex items-center">
                            <h4 className="text-2xl font-[700] text-[#0D0E10] tracking-[-.6px]">
                                Design
                            </h4>
                            <HiOutlineHashtag className="text-2xl font-[600] text-[#0D0E10] tracking-[-.6px] ml-4" />
                        </div>
                        <div className="">
                            <ul>
                                <li className="space-y-4 md:space-y-6 text-[#3F4451]">
                                    <p>Figma</p>
                                    <p>Webflow</p>
                                    <p>Notion</p>
                                    <p>Bravo Studio</p>
                                    <p>Sketch</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="item space-y-8 md:space-y-10 md:mr-24 transition-all">
                        <div className="heading w-full flex items-center">
                            <h4 className="text-2xl font-[700] text-[#0D0E10] tracking-[-.6px]">
                                Development
                            </h4>
                            <HiOutlineCode className="text-2xl font-[600] text-[#0D0E10] tracking-[-.6px] ml-4" />
                        </div>
                        <div className="">
                            <ul>
                                <li className="space-y-4 md:space-y-6 text-[#3F4451]">
                                    <p>Whimsical</p>
                                    <p>Adobe XD</p>
                                    <p>After Effects</p>
                                    <p>Photoshop</p>
                                    <p>Visual Studio Code</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-grid-item bg-teal-200/10 rounded h-[27rem] col-span-1 flex flex-col justify-center items-start md:justify-center md:items-center">
            <div className="cta flex flex-col md:flex-row">
                <div className="img">
                    <img src={ContactAvatar} alt="Sebastian Silva - Avatar" className="w-44" />
                </div>
                <div className="flex flex-col space-y-6">
                    <div className="">
                        <p className="font-reenie-beanie text-5xl text-[#99C9CD] tracking-[-4.8px]">Catcha!</p>
                    </div>
                    <div className="">
                        <a href="#Contact" className="text-5xl text-[#0D0E10] font-bold tracking-[-1.44px]">Got a project?<br />Let's Talk!</a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
