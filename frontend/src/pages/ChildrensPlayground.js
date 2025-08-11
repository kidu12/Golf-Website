import React from 'react';
import PlaygroundHero from '../components/PlaygroundHero';
import PlaygroundOverview from '../components/PlaygroundOverview';
import PlaygroundGallery from '../components/PlaygroundGallery';
import OtherServices from '../components/OtherServices';

const ChildrensPlayground = ({ language }) => {
  return (
    <>
      <PlaygroundHero language={language} />
      <PlaygroundOverview language={language} />
      <PlaygroundGallery language={language} />
      <OtherServices language={language} />
    </>
  );
};

export default ChildrensPlayground;
