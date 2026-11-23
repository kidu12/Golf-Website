import React from 'react';
import ConferenceHero from '../components/ConferenceHero';
import ConferenceOverview from '../components/ConferenceOverview';
import HallGallery from '../components/HallGallery';
import OtherServices from '../components/OtherServices';
import ServiceVideoSection from '../components/ServiceVideoSection';

const ConferenceHall = ({ language }) => {
  return (
    <>
      <ConferenceHero language={language} />
      <ConferenceOverview language={language} />
      <ServiceVideoSection serviceTitle="VIP Conference Room" language={language} />
      <HallGallery language={language} />
      <OtherServices language={language}/>
    </>
  );
};

export default ConferenceHall;
