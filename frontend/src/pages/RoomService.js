import React from 'react';
import SpaHero from '../components/RoomHero';
import SpaOverview from '../components/RoomOverview';
import SpaGallery from '../components/RoomGallery';
import OtherServices from '../components/OtherServices';
import ServiceVideoSection from '../components/ServiceVideoSection';

const SpaSteamCenter = ({ language }) => {
  return (
    <>
      <SpaHero language={language} />
      <SpaOverview language={language} />
      <ServiceVideoSection serviceTitle="Room Service" language={language} />
      <SpaGallery language={language} />
      <OtherServices language={language}/>
    </>
  );
};

export default SpaSteamCenter;
