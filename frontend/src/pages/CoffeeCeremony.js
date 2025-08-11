import React from 'react';
import CoffeeCeremonyHero from '../components/CoffeeCeremonyHero';
import CoffeeCeremonyOverview from '../components/CoffeeCeremonyOverview';
import CoffeeCeremonyGallery from '../components/CoffeeCeremonyGallery';
import OtherServices from '../components/OtherServices';

const CoffeeCeremony = ({ language }) => {
  return (
    <>
      <CoffeeCeremonyHero language={language} />
      <CoffeeCeremonyOverview language={language} />
      <CoffeeCeremonyGallery language={language} />
      <OtherServices language={language} />
    </>
  );
};

export default CoffeeCeremony;
