import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/OtherServicesSection.css';
import { FaUtensils, FaSpa, FaShoppingBag, FaBriefcase } from 'react-icons/fa';

const services = [
{
  title: {
    en: 'Event Catering',
    am: 'ለፕሮግራሞች የምግብ አገልግሎት'
  },
  description: {
    en: 'Food and beverage service for weddings, birthdays, and events.',
    am: 'ለጋብቻ፣ ለየልደት እና ለሌሎች ዝግጅቶች የምግብ እና የመጠጥ አገልግሎት።'
  },
  icon: <FaUtensils />
},
{
  title: {
    en: 'Moroccan Bath',
    am: 'ሞሮካን እና ባዝ'
  },
  description: {
    en: 'Steam-based cleansing and relaxation experience.',
    am: 'የሞሮኮና እና ባዝ አገልግሎታችን ጥራታቸውን በጠበቁ እቃዎች እና ባለሞያዎች።'
  },
  icon: <FaSpa />
},
{
  title: {
    en: 'On-site Shops',
    am: 'በቦታው ላይ ያሉ ሱቆች'
  },
  description: {
    en: "Includes sports jersey shop, salon, and photo studio services.",
    am: 'የስፖርት ዕቃዎች መደብር ፣ የፀጉር እና የፎቶ ስቱዲዮ አገልግሎቶችን ያጠቃልላል።'
  },
  icon: <FaShoppingBag />
},
{
  title: {
    en: 'VIP Conference Rooms',
    am: '(VIP) የስብሰባ ክፍሎች'
  },
  description: {
    en: 'Fully equipped and elegant meeting rooms.',
    am: '(VIP)ዘመናዊ የስብሰባ ክፍሎች።'
  },
  icon: <FaBriefcase />
}
];

const OtherServices = ({ language }) => {
  return (
    <section className="container py-5 other-services-section">
<h2 className="text-center mb-4 other-services-heading">
  {language === 'en' ? 'Other Services' : 'ሌሎች አገልግሎቶች'}
</h2>      <div className="row g-4">
        {services.map((service, index) => (
          <div key={index} className="col-md-6 col-lg-3">
            <div className="card h-100 other-service-card">
              <div className="card-body text-center">
                <div className="other-service-icon mb-3">{service.icon}</div>
                <h5 className="card-title fw-bold">{service.title[language]}</h5>
                <p className="card-text small">{service.description[language]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
     <Link to="/other-services" className="btn btn-other-services">
  {language === 'en' 
    ? 'Learn More About These Services' 
    : 'ስለእነዚህ አገልግሎቶች ተጨማሪ ይወቁ'}
</Link>
      </div>
    </section>
  );
};

export default OtherServices;
