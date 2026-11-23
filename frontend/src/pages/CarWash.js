import React from 'react';
import CarWashHero from '../components/CarWashHero';
import CarWashOverview from '../components/CarWashOverview';
import CarWashGallery from '../components/CarWashGallery';
import OtherServices from '../components/OtherServices';
import ServiceVideoSection from '../components/ServiceVideoSection';

const CarWash = ({ language }) => {
  return (
    <>
      <CarWashHero language={language} />
      <CarWashOverview language={language} />
      <ServiceVideoSection serviceTitle="Car Wash" language={language} />
      <CarWashGallery language={language} />
      <OtherServices language={language} />
    </>
  );
};

export default CarWash;
