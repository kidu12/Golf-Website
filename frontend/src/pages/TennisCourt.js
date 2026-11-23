import React from 'react';
import TennisHero from '../components/GolfHero';
import TennisOverview from '../components/GolfOverview';
import TennisBenefits from '../components/GolfBenefits';
import TennisGallery from '../components/GolfGallery';
import OtherServices from '../components/OtherServices';
import ServiceVideoSection from '../components/ServiceVideoSection';

const TennisCourt = ({ language }) => {
  return (
    <>
      <TennisHero language={language} />
      <TennisOverview language={language} />
      {/* Promotional video: EBS Television at Addis Ababa Golf Club */}
      <section aria-label="Addis Ababa Golf Club promotional video" style={{ width: '100%', maxWidth: '900px', margin: '2rem auto', padding: '0 1rem' }}>
        <div style={{ position: 'relative', paddingTop: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
          <iframe
            src="https://www.youtube.com/embed/8WM2UnsSmn8"
            title="EBS hosts play golf and promote Addis Ababa Golf Club"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          />
        </div>
      </section>
      <ServiceVideoSection serviceTitle="Golf Course" language={language} />
      <TennisBenefits language={language}/>
      <TennisGallery language={language} />
      <OtherServices language={language}/>
    </>
  );
};

export default TennisCourt;
