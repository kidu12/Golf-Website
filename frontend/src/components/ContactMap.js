import React from 'react';
import '../styles/contact.css';

const ContactMap = () => {
  return (
    <div className="map-container mb-5">
      <iframe
        title="Ethiopian Defense Force Officers Club"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.340391281511!2d38.989318499999996!3d8.754008299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b0d2a852f9f8d%3A0x4846f4c5bdc620fa!2sEthiopian%20Air%20Force%20Officers&#39;%20Club!5e0!3m2!1sen!2set!4v1748763945012!5m2!1sen!2set"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};


export default ContactMap;
