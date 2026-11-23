import React from 'react';
import GymHero from '../components/GymHero';
import GymOverview from '../components/GymOverview';
import GymGallery from '../components/GymGallery';
import OtherServices from '../components/OtherServices';
import ServiceVideoSection from '../components/ServiceVideoSection';

const GymCenter = ({ language }) => {
  return (
    <>
      <GymHero language={language} />
      <GymOverview language={language} />
      <ServiceVideoSection serviceTitle="Fitness & Gym" language={language} />
      <GymGallery language={language}/>
      <OtherServices language={language}/>
    </>
  );
};

export default GymCenter;
