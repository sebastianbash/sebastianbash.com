import React, { useState } from 'react';
import {
  HiOutlineArrowSmLeft,
  HiOutlineArrowNarrowRight,
} from 'react-icons/hi';
import testImg1 from '../../assets/img/testimonials-1.png';
import testImg2 from '../../assets/img/testimonials-2.png';

export default function Carousel(props) {
  const images = [testImg1, testImg2];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const selectNewImage = (index, images, next = true) => {
    const condition = next
      ? selectedIndex < images.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
  };

  return (
    <>
      <div className="testimonial w-full h-full flex flex-col md:flex-row justify-between items-center md:space-x-5 lg:space-x-0">
        <div className="testimonials-images md:w-1/2 mb-10 md:mb-0">
          <img
            src={selectedImage}
            alt="Testimonials"
            className="lg:w-[29.5rem] lg:h-[31rem]"
          />
        </div>
        <div className="testimonial-body md:w-1/2 space-y-10 flex flex-col justify-center">
          <div className="testimonial-title">
            <h3 className="text-[#0D0E10] text-2xl font-[600] tracking-[-.6px] text-left">
              We've worked with John across all our projects and it's our
              competitive advantage.
            </h3>
          </div>
          <div className="testimonial-paragraph">
            <p className="text-[#3F4451] tracking-[.32px] text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              semper, sapien sit amet scelerisque laoreet, eros justo congue
              neque, in maximus tellus velit vitae lacus. Nam dapibus augue
              ante, molestie malesuada est ullamcorper vel. Fusce purus ipsum,
              gravida ut tempus id, aliquam a orci.
            </p>
          </div>
          <div className="testimonial-professional space-x-4">
            <span className="text-[#333333] text-sm">Christina Klein</span>
            <span className="text-[#333333] text-sm">CEO @APPLE</span>
          </div>
        </div>
      </div>
      <div className="btn-control flex justify-end items-center">
        <button
          onClick={previous}
          className="text-3xl text-slate-400 hover:text-black transition-all"
        >
          <HiOutlineArrowSmLeft />
        </button>
        <button
          onClick={next}
          className="text-4xl text-slate-500 hover:text-black transition-all"
        >
          <HiOutlineArrowNarrowRight />
        </button>
      </div>
    </>
  );
}
