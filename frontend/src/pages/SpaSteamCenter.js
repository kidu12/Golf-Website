import React from 'react';
import SpaHero from '../components/SpaHero';
import SpaOverview from '../components/SpaOverview';
import SpaGallery from '../components/SpaGallery';
import OtherServices from '../components/OtherServices';

const SpaSteamCenter = ({ language }) => {
  return (
    <>
      <SpaHero language={language} />
      <SpaOverview language={language} />
      <SpaGallery language={language} />
      <OtherServices language={language}/>
    </>
  );
};

export default SpaSteamCenter;
