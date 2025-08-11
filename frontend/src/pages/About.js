import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutIntro from '../components/AboutIntro';
import AboutMissionVision from '../components/AboutMissionVision';
import AboutFacilities from '../components/AboutFacilities';
import OrgChartModal from '../components/OrgChartModal';
import OrgChartImage from '../assets/images/org-chart.webp'; // Use the actual path
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
     <div className="text-center my-5">
  <h3 className="mb-3">
    {language === 'en' 
      ? 'Want to know more about how we\'re structured?' 
      : 'ስለ ድርጅታችን አደረጃጀት/አወቃቀር/ ተጨማሪ ማወቅ ይፈልጋሉ?'}
  </h3>
  <button className="btn btn-primary px-4 py-2" onClick={() => setShowModal(true)}>
    {language === 'en' 
      ? 'View Organizational Structure' 
      : 'የድርጅታችንን መዋቅር ይመልከቱ'}
  </button>
</div>

      <OrgChartModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        imageSrc={OrgChartImage}
      language={language} />

    </>
  );
};

export default About;
