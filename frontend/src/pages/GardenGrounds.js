import React from 'react';
import GardenHero from '../components/GardenHero';
import GardenOverview from '../components/GardenOverview';
import GardenGallery from '../components/GardenGallery';
import OtherServices from '../components/OtherServices';
import ServiceVideoSection from '../components/ServiceVideoSection';

const GardenGrounds = ({ language }) => {
  return (
    <>
      <GardenHero language={language} />
      <GardenOverview language={language} />
      <ServiceVideoSection serviceTitle="Garden & Grounds" language={language} />
      <GardenGallery language={language} />
      <OtherServices language={language}/>
    </>
  );
};

export default GardenGrounds;
