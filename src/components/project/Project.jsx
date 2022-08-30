import React, { useRef } from 'react';
import Project01Img from '../../assets/img/project-01.png';

export default function Project() {
  const projectImg = useRef();
  return (
    <div
      id="projects"
      className="projects-section w-full h-full flex flex-col justify-center"
    >
      <div className="projects-wrapper space-y-20 my-[80px] lg:my-[100px]">
        <div className="projects-title">
          <h2 className="text-[#0D0E10] text-5xl font-[700] tracking-[-1.44px]">
            The work I do,
            <br />
            and business I help.
          </h2>
        </div>
        <div className="projects-container w-full h-full grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="item w-full h-full md:flex col-span-1 md:col-span-2">
            <div
              className="item-img relative w-full md:w-7/12 h-72 md:h-96"
              onMouseEnter={() =>
                projectImg.current.classList.replace('md:left-20', 'md:left-0')
              }
              onMouseLeave={() =>
                projectImg.current.classList.replace('md:left-0', 'md:left-20')
              }
            >
              <img
                ref={projectImg}
                src="https://images.unsplash.com/photo-1660996312940-4f660e25d33f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="imagen portfolio - name : name"
                className="w-full h-full transition-all duration-500 absolute top-0 md:left-20 -z-10"
              />
            </div>
            <div className="item-content w-full md:w-5/12 h-64 md:h-96 p-4 bg-white shadow-2xl">
              <div className="h-full w-full flex flex-col justify-between">
                <h2 className="text-3xl md:text-4xl font-[700] tracking-[-1.44px]">
                  Restaurganic
                </h2>
                <p className="text-lg md:text-2xl font-light">
                  An Organic Store site equipped all eCommmerce functionality
                  and ready to use.
                </p>
                {/* <ul className=""></ul> */}
                <button
                  type="button"
                  className="bg-black dark:bg-white w-fit px-4 py-2 rounded text-white dark:text-black"
                >
                  Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="project-item-btn col-span-1 grid content-center justify-items-center h-[10rem] md:hidden">
                        <a href="https://github.com/sebastianbash" target="_blank" className="uppercase bg-black rounded-full py-6 px-14 text-white dark:text-black text-sm flex justify-center items-center w-fit lg:hover:shadow-xl lg:active:bg-black/90 transition-all"><span className="font-[600] mr-1">@sebastianbash</span> on github</a>
                    </div> */
}
