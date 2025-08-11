import React from 'react';
import ContactMap from '../components/ContactMap';
import ContactSection from '../components/ContactSection';


const ContactPage = ({ language }) => {
  return (
    <>
      <ContactMap/>
      <ContactSection language={language}/>
    </>
  );
};

export default ContactPage;
