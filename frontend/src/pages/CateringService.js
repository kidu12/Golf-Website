import React from 'react';
import CateringServiceHero from '../components/CateringServiceHero';
import CateringServiceOverview from '../components/CateringServiceOverview';
import CateringServiceGallery from '../components/CateringServiceGallery';
import OtherServices from '../components/OtherServices';

const CateringService = ({ language }) => {
  return (
    <>
      <CateringServiceHero language={language} />
      <CateringServiceOverview language={language} />
      <CateringServiceGallery language={language} />
      <OtherServices language={language} />
    </>
  );
};

export default CateringService;
