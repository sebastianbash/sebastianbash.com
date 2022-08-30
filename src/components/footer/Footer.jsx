import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter, FaDribbble, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import SendEmail from './SendEmail';

export default function Footer() {
  return (
    <div className="footer-section w-full h-full">
        <div className="footer-container h-48 flex flex-col md:flex-row mb-1">
            <div className="footer-navigation-left w-full h-full flex justify-center items-center md:justify-start">
                <ul className="flex justify-center md:justify-start items-center space-x-10">
                    <li className="p-4 border rounded-full bg-white hover:bg-gray-100 cursor-pointer transition-all"><FaDribbble /></li>
                    <li className="p-4 border rounded-full bg-white hover:bg-gray-100 cursor-pointer transition-all"><FaTwitter /></li>
                    <li className="p-4 border rounded-full bg-white hover:bg-gray-100 cursor-pointer transition-all"><FaGithub /></li>
                    <li className="p-4 border rounded-full bg-white hover:bg-gray-100 cursor-pointer transition-all"><FaLinkedinIn /></li>
                </ul>
            </div>
            <div className="footer-navigation-right w-full h-full flex justify-center items-center md:justify-end transition-all">
                <SendEmail icon={<FaArrowUp className="rotate-45" />} iconSwap={<FaEnvelope />} />
            </div>
        </div>
    </div>
  )
}
