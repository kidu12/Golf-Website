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
        ? '“To be Ethiopia’s leading golf and hospitality destination—renowned for excellence, unity, and service—while honoring our Defence Force roots.”'
        : '“የመከላከያ ሰራዊታችንን መሰረት እያከበርን በልህቀት፣ በአንድነት እና በአገልግሎት የምንታወቅ የኢትዮጵያ መሪ የጎልፍ እና የእንግዳ ተቀባይነት መዳረሻ መሆን።”'
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
        ? 'Deliver top-tier golf, hospitality, and events that spark sportsmanship, kick back some relaxation, and bring people together—always backing the Defence Force community and beyond.'
        : 'የስፖርታዊ ጨዋነትን መንፈስ የሚያነቃቁ፣ መዝናናትን የሚያመጡ እና ሰዎችን የሚያሰባስቡ ከፍተኛ ደረጃ ያላቸው የጎልፍ ስፓርት እና  ሌሎች ተጨማሪ የዝግጅት አገልግሎቶችን በከፍተኛ እንግዳ ተቀባይነት ስሜት መስጠት ሁልጊዜም የመከላከያ ሰራዊት አባላትን፣ቤተሰቦቻቸውን እና ማህበረሰቡን  መደገፍ።'
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
          'Service Commitment',
          'Customer Focus',
          'Teamwork and Empowerment',
        ]
      : [
          'ታማኝነት',
          'ልህቀት',
          'ለአገልግሎት ቁርጠኝነት',
          'የደንበኛ ትኩረት',
          'የቡድን ስራ እና ማብቃት',
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

