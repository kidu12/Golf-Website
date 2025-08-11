import React from 'react';
import ExhibitionsAndBazaarsHero from '../components/ExhibitionsAndBazaarsHero';
import ExhibitionsAndBazaarsOverview from '../components/ExhibitionsAndBazaarsOverview';
import ExhibitionsAndBazaarsGallery from '../components/ExhibitionsAndBazaarsGallery';
import OtherServices from '../components/OtherServices';

const ExhibitionsAndBazaars = ({ language }) => {
  return (
    <>
      <ExhibitionsAndBazaarsHero language={language} />
      <ExhibitionsAndBazaarsOverview language={language} />
      <ExhibitionsAndBazaarsGallery language={language} />
      <OtherServices language={language} />
    </>
  );
};

export default ExhibitionsAndBazaars;
