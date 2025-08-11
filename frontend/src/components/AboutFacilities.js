import React from 'react';
import '../styles/About.css';
import { FaDumbbell, FaSpa, FaGlassCheers, FaTableTennis , FaUtensils, FaBuilding } from 'react-icons/fa';

const services = [
  { 
    icon: <FaSpa />, 
    title: { 
      en: 'Spa & Massage', 
      am: 'የስፓ እና ማሳጅ አገልግሎት' 
    },
    desc: { 
      en: 'Premium relaxation services and luxurious steam rooms.', 
      am: 'ክበባችን ዘመናዊ የስቲም፣ስፓ እና ማሳጅ አገልግሎቶች በከፍተኛ ጥራት ምቾት መጥተው ያግኙ።' 
    }
  },
  { 
    icon: <FaDumbbell />, 
    title: { 
      en: 'Gymnasium', 
      am: 'ጂምናዚየም' 
    },
    desc: { 
      en: 'State-of-the-art gym facilities guided by experienced trainers.', 
      am: 'ደረጃውን የጠበቀ የጅም አገልግሎት ፤ ከፍተኛ እውቀት እና ለምድ ካላቸወ አሰልጣኞች ጋር በድርጅታችን ያገኛሉበድርጅታችን ደረጃውን የጠበቀ የጅም አገልግሎት ከፍተኛ እውቀት እና ልምድ ባላቸወ አሰልጣኞች ያገኛሉ።' 
    }
  },
  { 
    icon: <FaTableTennis />, 
    title: { 
      en: 'Ground Tennis', 
      am: 'የሜዳ ቴኒስ' 
    },
    desc: { 
      en: 'A well-appointed and comfortable tennis court ideal for casual play, practice, and competitive matches.', 
      am: 'ለልምምድ፣ለዘወትር መጫዎቻ እና ለውድድር ማከናዎኛ የሚሆን የተሟላ የሜዳ ቴንሰ አለን።' 
    }
  },
  { 
    icon: <FaUtensils />, 
    title: { 
      en: 'Bar & Restaurant', 
      am: 'ባር እና ሬስቶራንት' 
    },
    desc: { 
      en: 'Hotel and bar services offering a diverse selection of high-quality food and beverages, meticulously prepared to uphold our standards.', 
      am: 'ዓለም አቀፍ ምግቦችና መጠጦች በጥራት እና በተመጣጣኝ ዋጋ  በባር እና ሬስቶራቶቻችን ማጣጣም ይችላሉ።' 
    }
  },
  { 
    icon: <FaGlassCheers />, 
    title: { 
      en: 'Event Hosting', 
      am: 'የዝግጅት ፐሮግራም' 
    },
    desc: { 
      en: 'Comprehensive catering services for weddings, birthdays, graduations, and other events, all at competitive prices.', 
      am: ' በግቢያችንና ባሉበት ቦታ የተሟላ ምግብ ዝግጅት   በጥራት እና በተመጣጣኝ ዋጋ ከተሟላ መስተንግዶ ጋር እናቀርባለን።' 
    }
  },
  { 
    icon: <FaBuilding />, 
    title: { 
      en: 'Large Event Hall', 
      am: 'የዝግጅት አዳራሽ' 
    },
    desc: { 
      en: 'Elegantly decorated and furnished spaces for both small and large gatherings, offering catering and non-catering options.', 
      am: 'በግቢያችን ባሉን ምቹ ፣ፅዱ እና በተሟሉ አዳራሾችና በመስክ ላይ እና ባሉበት ቦታ  በጥራት እና በተመጣጣኝ ዋጋ የተሟላ ምግብ ዝግጅት ከመስተንግዶ ጋር እናቀርባለን።' 
    }
  }
];

const AboutFacilities = ({ language }) => {
  return (
    <section className="py-5 facilities-section" id="facilities">
      <div className="container">
<h2 className="text-center fw-bold mb-5">
  {language === 'en' ? 'Facilities & Services' : 'የምንሰጣቸው የአገልግሎቶች አይነቶች'}
</h2>       
 <div className="row" data-aos="fade-up">
          {services.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="facility-card p-4 h-100">
<div className="facility-icon mb-3">
  {item.icon}
</div>
                <h5 className="fw-bold">{item.title[language]}</h5>
                <p className="text-muted">{item.desc[language]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFacilities;
