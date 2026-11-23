import React from 'react';
import BarHero from '../components/BarHero';
import BarOverview from '../components/BarOverview';
import GallerySection from '../components/GallerySection';
import OtherServices from '../components/OtherServices';
import ServiceVideoSection from '../components/ServiceVideoSection';

const BarRestaurant =  ({ language }) => {
  return (
    <>
      <BarHero  language={language} />
      <BarOverview language={language} />
      <ServiceVideoSection serviceTitle="Bar & Restaurant" language={language} />
      <GallerySection language={language}/>
      <OtherServices language={language}/>
    </>
  );
};

export default BarRestaurant;
