import React from 'react';
import CateringServiceHero from '../components/CateringServiceHero';
import CateringServiceOverview from '../components/CateringServiceOverview';
import CateringServiceGallery from '../components/CateringServiceGallery';
import OtherServices from '../components/OtherServices';
import ServiceVideoSection from '../components/ServiceVideoSection';

const CateringService = ({ language }) => {
  return (
    <>
      <CateringServiceHero language={language} />
      <CateringServiceOverview language={language} />
      <ServiceVideoSection serviceTitle="Catering Service" language={language} />
      <CateringServiceGallery language={language} />
      <OtherServices language={language} />
    </>
  );
};

export default CateringService;
