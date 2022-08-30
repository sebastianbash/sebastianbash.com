import React from 'react';
import Client from '../client/Client';
import Hero from '../hero/Hero';
import Services from '../service/Services';
import Resume from '../resume/Resume';
import Project from '../project/Project';
import Testimonial from '../testimonial/Testimonial';
import FreqQuestions from '../qa/FreqQuestions';
import Contact from '../contact/Contact';
import ScrollToTop from '../scrollTo/ScrollToTop';

export default function Landing() {
  return (
    <>
        {/* Hero section */}
        <Hero />
        {/* Clients Section */}
        <Client />
        {/* Services section */}
        <Services />
        {/* About section */}
        <Resume />
        {/* Projects section */}
        <Project />
        {/* Testimonials Section */}
        <Testimonial />
        {/* Frequently questions */}  
        <FreqQuestions />
        {/* Contact section */}
        <Contact />
        {/* Get back to top button */}
        <ScrollToTop />
    </>
  )
}
