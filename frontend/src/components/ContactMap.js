import React from 'react';
import '../styles/contact.css';

const ContactMap = () => {
  return (
    <div className="map-container mb-5">
      <iframe
        title="Addis Ababa Golf Club"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1191.5659256214026!2d38.719245885002664!3d9.003054678036552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b870033704aab%3A0x2fc2f76cb96dbd71!2zR29sZiBjbHViIGdhdGUgfCDhjJDhiI3hjY0g4Yqt4YiI4YmlIOGImOGMjeGJouGLqyDhiaDhiK0!5e1!3m2!1sen!2set!4v1751472525780!5m2!1sen!2set"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};


export default ContactMap;
