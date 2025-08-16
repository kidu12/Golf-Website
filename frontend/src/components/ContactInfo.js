import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';
import '../styles/contactInfo.css';

const ContactInfo = ({ language }) => {
  const translations = {
    en: {
      address: 'Our Address',
      location: 'Tor Hailoch, Addis Ababa, Ethiopia',
      phone: 'Phone Number',
      openingHours: 'Opening Hours',
      hours: 'Daily: 6:00 AM - 10:00 PM',
    },
    am: {
      address: 'አድራሻችን',
      location: 'ጦር ሃይሎች, አዲስ አበባ, ኢትዮጵያ',
      phone: 'ስልክ ቁጥር',
      openingHours: 'የስራ ሰዓት',
      hours: 'ዘውትር: ከጠዋቱ 12:00 - ምሽት 4:00',
    },
  };

  const content = translations[language] || translations.en;

  return (
    <div className="contact-info-container" data-aos="fade-up">
      <div className="contact-row">
        {/* Address */}
        <div className="contact-card">
          <div className="contact-icon"><FaMapMarkerAlt /></div>
          <h5>{content.address}</h5>
          <p>{content.location}</p>
        </div>

        {/* Phone */}
        <div className="contact-card">
          <div className="contact-icon"><FaPhone /></div>
          <h5>{content.phone}</h5>
          <p>
            <a href="tel:+251913685564">+251 913 685564</a><br />
            <a href="tel:+251113201893">+251 113 201893</a>
          </p>
        </div>

        {/* Hours */}
        <div className="contact-card">
          <div className="contact-icon"><FaClock /></div>
          <h5>{content.openingHours}</h5>
          <p>{content.hours}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
