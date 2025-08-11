import React from 'react';

const ContactInfo = ({ language }) => {
  return (
   <div className="contact-info bg-light shadow-sm p-4 rounded">
    <h5 className="fw-bold mb-3">
      {language === 'en' ? 'Our Address' : 'አድራሻችን'}
    </h5>
     <p className="mb-1">
      {language === 'en' ? 'Torhailoch. Addis Ababa, Ethiopia' : 'ጦር ሃይሎቸ. አዲስ አበባ፣ ኢትዮጵያ'}
    </p>

    <h6 className="mt-4 fw-bold">
      {language === 'en' ? 'Call Us' : 'ይደውሉልን'}
    </h6>
        <p className="mb-1">{language === 'am' ? 'ጦር ሃይሎች, አዲስ አበባ' : 'Tor Hailoch, Addis Ababa'}</p>
             <p className="contact-item">
              <span>{language === 'am' ? 'ጎልፍ:' : 'For Golf Course:'}</span>
              <a href="tel:+251913685564" className="footer-link">+251 913 685564</a>
            </p>
             <p className="contact-item">
              <span>{language === 'am' ? 'ሆቴል:' : 'For Hotel,Bedroom & Other Service:'}</span>
              <a href="tel:+251113201893" className="footer-link">+251 113 201893</a>
            </p>
            <p className="contact-item">
              <span>{language === 'am' ? 'ዝግጅቶች:' : 'For Events:'}</span>
              <a href="tel:+251911612059" className="footer-link">+251 911 612059</a>
            </p>
            <p className="contact-item">
              <span>{language === 'am' ? 'ማርኬቲንግ:' : 'For Marketing MGT:'}</span>
              <a href="tel:+251932143333" className="footer-link">+251 932 143333</a>
            </p>
    <h6 className="fw-bold">
      {language === 'en' ? 'Opening Hours' : 'የስራ ሰዓት'}
    </h6>
    <p className="mb-0">
      {language === 'en' ? 'Monday – Sunday' : 'ሰኞ – እሁድ'}
    </p>
  </div>
  );
};

export default ContactInfo;
