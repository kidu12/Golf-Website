import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutIntro from '../components/AboutIntro';
import AboutMissionVision from '../components/AboutMissionVision';
import AboutFacilities from '../components/AboutFacilities';
import RecognitionCertificates from '../components/RecognitionCertificates';


const About =  ({ language }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <AboutIntro language={language}  />
      <AboutMissionVision language={language}  />
       <RecognitionCertificates language={language} />
      <AboutFacilities language={language}  />
    </>
  );
};

export default About;
