import React from 'react';
import SpaHero from '../components/RoomHero';
import SpaOverview from '../components/RoomOverview';
import SpaGallery from '../components/RoomGallery';
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
