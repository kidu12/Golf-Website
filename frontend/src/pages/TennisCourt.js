import React from 'react';
import TennisHero from '../components/GolfHero';
import TennisOverview from '../components/GolfOverview';
import TennisBenefits from '../components/TennisBenefits';
import TennisGallery from '../components/TennisGallery';
import OtherServices from '../components/OtherServices';

const TennisCourt = ({ language }) => {
  return (
    <>
      <TennisHero language={language} />
      <TennisOverview language={language} />
      <TennisBenefits language={language}/>
      <TennisGallery language={language} />
      <OtherServices language={language}/>
    </>
  );
};

export default TennisCourt;
