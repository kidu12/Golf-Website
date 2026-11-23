import React from 'react';
import PlaygroundHero from '../components/PlaygroundHero';
import PlaygroundOverview from '../components/PlaygroundOverview';
import PlaygroundGallery from '../components/PlaygroundGallery';
import OtherServices from '../components/OtherServices';
import ServiceVideoSection from '../components/ServiceVideoSection';

const ChildrensPlayground = ({ language }) => {
  return (
    <>
      <PlaygroundHero language={language} />
      <PlaygroundOverview language={language} />
      <ServiceVideoSection serviceTitle="Childrens Playground" language={language} />
      <PlaygroundGallery language={language} />
      <OtherServices language={language} />
    </>
  );
};

export default ChildrensPlayground;
