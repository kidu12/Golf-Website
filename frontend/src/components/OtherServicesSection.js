import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/OtherServicesSection.css';
import { FaCamera, FaCouch, FaHotTub, FaCut } from 'react-icons/fa';

const services = [
  {
    title: {
      en: 'Photo Studio',
      am: 'ፎቶ ስቱዲዮ'
    },
    description: {
      en: 'Professional photo studio services for all your needs.',
      am: 'ለሁሉም ፍላጎቶችዎ የባለሙያ ፎቶ ስቱዲዮ አገልግሎቶች።'
    },
    icon: <FaCamera />
  },
  {
    title: {
      en: 'Interior Decoration',
      am: 'የውስጥ ማስጌጥ'
    },
    description: {
      en: 'Creative and modern interior decoration services for homes and offices.',
      am: 'ለቤቶች እና ለቢሮዎች የፈጠራ እና ዘመናዊ የውስጥ ማስጌጥ አገልግሎቶች።'
    },
    icon: <FaCouch />
  },
  {
    title: {
      en: 'Sauna Bath and Massage',
      am: 'ሳውና እና ማሳጅ'
    },
    description: {
      en: 'Relax and rejuvenate with our professional sauna and massage services.',
      am: 'በሙያዊ የሳውና እና የማሳጅ አገልግሎቶቻችን ዘና ይበሉ እና ይታደሱ።'
    },
    icon: <FaHotTub />
  },
  {
    title: {
      en: 'Barber Shop',
      am: 'የፀጉር አስተካካይ ሱቅ'
    },
    description: {
      en: 'Expert grooming services in a clean and modern setting.',
      am: 'በንጹህ እና ዘመናዊ አቀማመጥ ውስጥ የባለሙያ የጌጣጌጥ አገልግሎቶች።'
    },
    icon: <FaCut />
  }
];

const OtherServices = ({ language }) => {
  return (
    <>
      <style>
        {`
          .other-service-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .other-service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
          }
          .other-service-icon {
            font-size: 1.75rem;
          }
          .btn-other-services {
            background-color: #004d00;
            color: #fff;
            border-radius: 50px;
            padding: 0.75rem 1.5rem;
            font-weight: bold;
            transition: background-color 0.3s ease, transform 0.3s ease;
          }
          .btn-other-services:hover {
            background-color: #003300;
            transform: translateY(-2px);
          }
        `}
      </style>
      <section className="container py-5 other-services-section">
        <h2 className="text-center mb-4 other-services-heading">
          {language === 'en' ? 'Partner Services by Rent' : 'በኪራይ የሚሰጡ የአጋር አገልግሎቶች'}
        </h2>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card h-100 other-service-card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="other-service-icon me-3 text-success">{service.icon}</div>
                    <h5 className="card-title fw-bold mb-0">{service.title[language]}</h5>
                  </div>
                  <p className="card-text small mt-2">{service.description[language]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to="/other-services" className="btn btn-other-services mt-4">
            {language === 'en' 
              ? 'Learn More About These Services' 
              : 'ስለእነዚህ አገልግሎቶች ተጨማሪ ይወቁ'}
          </Link>
        </div>
      </section>
    </>
  );
};

export default OtherServices;
