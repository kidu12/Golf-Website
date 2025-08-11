// ServiceCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ image, title, description, link, language }) => {
  // Translation dictionary
  const translations = {
    en: {
      hours: 'Hours & More',
      learnMore: 'LEARN MORE',
      website: 'WEBSITE'
    },
    am: {
      hours: 'ሰዓታት እና ተጨማሪ',
      learnMore: 'ተጨማሪ ይወቁ',
      website: 'ዌብሳይት'
    }
  };

  // Get current language translations
  const t = translations[language] || translations.en;

  return (
    <div className="card service-card h-100">
      <img 
        src={image} 
        className="card-img-top" 
        alt={title} 
        style={{ height: '250px', objectFit: 'cover' }} 
      />
      
      <div className="card-body d-flex flex-column">
        <h5 className="card-title service-card-title fw-bold">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        <hr />
        
        <span className="service-card-hours mb-2">
          {t.hours} <i className="bi bi-chevron-down"></i>
        </span>

        {/* Learn More button */}
        <Link to={typeof link === 'object' ? link[language] : link} 
              className="service-card-button w-100 mb-2">
          {t.learnMore}
        </Link>

        {/* Website link icon */}
        <Link to={typeof link === 'object' ? link[language] : link} 
              className="text-decoration-none service-card-website-link small text-center">
          {t.website} <i className="bi bi-box-arrow-up-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;