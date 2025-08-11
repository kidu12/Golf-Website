import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactInfo from './ContactInfo';

const ContactSection = ({ language }) => {
  return (
    <div className="container mb-5">
      <div className="row g-4">
        <div className="col-md-8">
          <ContactForm language={language}  />
        </div>
        <div className="col-md-4">
          <ContactInfo language={language} />
        </div>
      </div>
    </div>
  );
};
export default ContactSection;
