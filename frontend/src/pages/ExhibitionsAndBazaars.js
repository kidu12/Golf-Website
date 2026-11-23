import React from 'react';
import ExhibitionsAndBazaarsHero from '../components/ExhibitionsAndBazaarsHero';
import ExhibitionsAndBazaarsOverview from '../components/ExhibitionsAndBazaarsOverview';
import ExhibitionsAndBazaarsGallery from '../components/ExhibitionsAndBazaarsGallery';
import ServiceVideoSection from '../components/ServiceVideoSection';

const ExhibitionsAndBazaars = ({ language }) => {
  return (
    <div>
      <ExhibitionsAndBazaarsHero language={language} />
      <ExhibitionsAndBazaarsOverview language={language} />
      <ServiceVideoSection serviceTitle="Exhibitions & Bazaars" language={language} />
      <ExhibitionsAndBazaarsGallery language={language} />
    </div>
  );
};

export default ExhibitionsAndBazaars;
