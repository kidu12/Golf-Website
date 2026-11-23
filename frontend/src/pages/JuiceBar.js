import React from 'react';
import JuiceBarHero from '../components/JuiceBarHero';
import JuiceBarOverview from '../components/JuiceBarOverview';
import JuiceBarGallery from '../components/JuiceBarGallery';
import OtherServices from '../components/OtherServices';
import ServiceVideoSection from '../components/ServiceVideoSection';

const JuiceBar = ({ language }) => {
  return (
    <>
      <JuiceBarHero language={language} />
      <JuiceBarOverview language={language} />
      <ServiceVideoSection serviceTitle="Juice Bar" language={language} />
      <JuiceBarGallery language={language} />
      <OtherServices language={language} />
    </>
  );
};

export default JuiceBar;
