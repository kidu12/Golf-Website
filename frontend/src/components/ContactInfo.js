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

    <p className="mb-1">
  <a href="tel:+251926555599" className="text-black text-decoration-none">+251 92 655 5599</a>
</p>
<p className="mb-1">
  <a href="tel:+251113717317" className="text-black text-decoration-none">+251 11 371 7317</a>
</p>
<p className="mb-3">
  <a href="tel:+251113717318" className="text-black text-decoration-none">+251 11 371 7318</a>
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
