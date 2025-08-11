import React from 'react';

const SpaOverview = ({ language }) => {
  return (
    <section className="container py-5">
     <h2 className="fw-bold mb-4">
  {language === 'am' ? 'አጠቃላይ እይታ' : 'Overview'}
</h2>

<p>
  {language === 'am'
    ? 'ድርጅታችን ዘመናዊ የስቲም እና ስፓ አገልግሎቶች በከፍተኛ ጥራትና ምቾት  ያግኙ።'
    : 'Our Spa & Steam Center is dedicated to providing complete relaxation and rejuvenation. Indulge in a comprehensive range of wellness treatments, from steam and sauna sessions to expert massage therapy, all administered by trained professionals.'}
</p>

<p>
  {language === 'am'
    ? 'የስቲም እና ስፓ ማዕከላችን በሚያምር ሁኔታ ያጌጡ እና እንግዶች  በለስላሳ ብርሃን ለአእምሮ ሰላም ተስማሚ የሆነ የተረጋጋ አካባቢ ማግኘት ይቸላሉ።'
    : 'The facilities are elegantly decorated and meticulously sanitized, offering guests secure magnetic lockers, soothing lighting, and a tranquil environment perfect for peace of mind.'}
</p>

<p>
  {language === 'am'
    ? 'የስቲም እና ስፓ ማዕከላችን:- በማዕከሉ ከሰኞ እስከ ቅዳሜ ከጠዋቱ 2፡00 ሰዓት እስ 11 ስአት አገልግሎት የሚሰጥና  የተዋበ ፣ የግል ደህንነቱ የተጠበቀ ሎከር ያለው እና የመብራት ዝርጋታውም የሚስብ ነው።'
    : 'Open daily from Monday to Sunday, 8:00 AM to 10:00 PM, our center serves as a sanctuary for those who prioritize hygiene and exceptional hospitality.'}
</p>

<h4 className="mt-4">
  {language === 'am' ? 'መሳሪያዎች' : 'Facilities'}
</h4>

<div className="table-responsive">
  <table className="table table-bordered mt-3">
    <thead className="table-light">
      <tr>
        <th>{language === 'am' ? 'ዋና መለያዎች' : 'Feature'}</th>
        <th>{language === 'am' ? 'መግለጫ' : 'Description'}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{language === 'am' ? 'ማሳጅ' : 'Massage'}</td>
        <td>{language === 'am' ? 'በባለሙያ የሰውነት ሙሉ ጤና ማሳጅ' : 'Professional full-body and relaxation massage therapy'}</td>
      </tr>
      <tr>
        <td>{language === 'am' ? 'ስቲም እና ሳውና' : 'Steam & Sauna'}</td>
        <td>{language === 'am' ? 'ዘመናዊ ሳውና እና የውሃ ስቲም ስርዓት ጋር' : 'Modern sauna with integrated water steam system'}</td>
      </tr>
      <tr>
        <td>{language === 'am' ? 'ንፅህና' : 'Hygiene'}</td>
        <td>{language === 'am' ? 'ለንፅህና  አስተማማኝነት ከፍተኛ ደረጃ' : 'High standards for cleanliness and comfort'}</td>
      </tr>
      <tr>
        <td>{language === 'am' ? 'ሎከር' : 'Locker'}</td>
        <td>{language === 'am' ? 'ለእንግዶች ግላዊነት የማግኔቲክ ቁልፍ ያለው ደህንነቱ የተጠበቀ ሎከር' : 'Magnetic-lock secure lockers for guest privacy'}</td>
      </tr>
      <tr>
        <td>{language === 'am' ? 'ሰራተኞች' : 'Staff'}</td>
        <td>{language === 'am' ? 'ብቁ የስፓ ባለሙያዎች' : 'Trained and certified spa professionals'}</td>
      </tr>
      <tr>
        <td>{language === 'am' ? 'ስራ ሰዓት' : 'Hours'}</td>
        <td>{language === 'am' ? 'ከጠዋት 8:00 እስከ ምሽት 10:00 ድረስ ክፍት ነው' : 'Open daily from 8:00 AM to 10:00 PM'}</td>
      </tr>
    </tbody>
  </table>
      </div>
    </section>
  );
};

export default SpaOverview;
