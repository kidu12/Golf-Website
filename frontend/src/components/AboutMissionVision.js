import React from 'react';
import { FaEye, FaBullseye, FaHeart } from 'react-icons/fa';
import '../styles/About.css';

const AboutMissionVision = ({ language }) => {
  return (
    <section className="py-5 bg-white" id="mission-vision">
      <div className="container">
<h2 className="text-center fw-bold mb-5">
  {language === 'en' 
    ? 'Our Vision, Mission & Our Values' 
    : 'የእኛ ራዕይ፣ ተልእኮ እና መሠረታዊ እሴቶች'}
</h2>
        <div className="row text-center" data-aos="fade-up">

          <div className="col-md-4 mb-4">
            <FaEye size={40} className="icon-vision mb-3" />
            <h5 className="fw-bold">
      {language === 'en' ? 'Vision' : 'ራዕይ'}
    </h5>
    <p>
      {language === 'en' 
        ? 'To be a gold standard in the hospitality industry and the foremost community hub in Ethiopia, dedicated to serving military officers, their families, and the community, where health, connection, and excellence thrive through a diverse range of outstanding services.'
        : 'ራዕያችን በዘርፉ ከተሰማሩ ተመሳሳይ  አገልግሎት  ሰጭ ተቋማት መካከል በመኮንኖች፣ በቤተሰቦቻቸው እና በማህበረሰባችን ግንባር ቀደም ለላቀ አገልግሎት ተመራጭ እና  የመገናኛ ማዕከል መሆን ነው።'
      }
    </p>

          </div>

          <div className="col-md-4 mb-4">
            <FaBullseye size={40} className="icon-mission mb-3" />
           <h5 className="fw-bold">
      {language === 'en' ? 'Mission' : 'ተልእኮ'}
    </h5>
    <p>
      {language === 'en' 
        ? 'Our mission is to cultivate a dynamic and empowered community of military officers to enhance member satisfaction and contribute to strengthening our organizational identity,stability, and prosperity for our members, partners, and community.'
        : 'ተልዕኳችን ለአባሎቻችን፣ለአጋሮቻችን እና ለማህበረሰባችን የተሟላ አገልግሎት  በመስጠት ዘመኑን እንዲዋጁ እና ሃላፊነታቸውን በቀላሉ እንዲወጡ ማስቻል።በተጨማሪም አካላዊ እና አዕምሯዊ ማበልፀጊያ አገልግሎቶችን ማቅረብ ፣ የተረጋጋ ድርጅታዊ መለያና የስራ ባህል በመፍጠር አገራዊና ተቋማዊ ብልጽግናን ለማጠናከር አስተዋጽኦ ማድረግ ናቸው።'
      }
    </p>
    
          </div>

<div className="col-md-4 mb-4 text-center">
  <FaHeart size={40} className="icon-values mb-3" />
  <h5 className="fw-bold">
    {language === 'en' ? 'Core Values' : 'መሠረታዊ እሴቶች'}
  </h5>
  <div className="d-flex flex-column align-items-center mt-3">
    {(language === 'en'
      ? [
          'Integrity',
          'Excellence',
          'Strong corporate identity and reputation',
          'Customer satisfaction',
          'Employee empowerment and teamwork',
        ]
      : [
          'ታማኝነት',
          'የላቀ አገልግሎት',
          'ጠንካራ ድርጅታዊ ማንነትና ስም',
          'የደንበኛ እርካታር',
          'የቡድን ስራ እና የሰራተኞችን አቅም ማሳደግ ዋና ዋናዎቹ ናቸው።',
        ]
    ).map((item, index) => (
      <div key={index} className="d-flex align-items-start mb-2">
        <span className="me-2">👉</span>
        <span>{item}</span>
      </div>
    ))}
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default AboutMissionVision;

