import React from 'react';
import CoffeeCeremonyHero from '../components/CoffeeCeremonyHero';
import CoffeeCeremonyOverview from '../components/CoffeeCeremonyOverview';
import CoffeeCeremonyGallery from '../components/CoffeeCeremonyGallery';
import OtherServices from '../components/OtherServices';
import ServiceVideoSection from '../components/ServiceVideoSection';

const CoffeeCeremony = ({ language }) => {
  return (
    <>
      <CoffeeCeremonyHero language={language} />
      <CoffeeCeremonyOverview language={language} />
      <ServiceVideoSection serviceTitle="Coffee Ceremony" language={language} />
      <CoffeeCeremonyGallery language={language} />
      <OtherServices language={language} />
    </>
  );
};

export default CoffeeCeremony;
