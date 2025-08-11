import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonial from '../components/Testimonial';
import AboutSection from '../components/AboutSection';
import OtherServicesSection from '../components/OtherServicesSection';


const Home =  ({ language }) => {
  return (
    <>
      <Hero language={language}  />
      <AboutSection language={language}/>
      <Services language={language}/> {/* <-- Add Services section */}
      <OtherServicesSection language={language}/>
      <Testimonial language={language} />
    </>
  );
};

export default Home;