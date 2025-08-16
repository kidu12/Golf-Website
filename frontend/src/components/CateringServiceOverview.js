import React from 'react';

const CateringServiceOverview = ({ language }) => {
  return (
    <section className="py-5 bg-light" data-aos="fade-up">
      <div className="container">
        <h1 className="display-4 fw-bold text-black text-center">
          {language === 'am' ? 'የቤት ውስጥ እና የውጪ የምግብ አቅርቦት አገልግሎት' : 'Indoor and Outdoor Catering Service'}
        </h1>
        <p className="lead mt-2 text-center">
          {language === 'am' 
            ? 'እንከን የለሽ እና ከፍተኛ ጥራት ያለው የመመገቢያ ተሞክሮ'
            : 'A Seamless and High-Quality Dining Experience'}
        </p>
      </div>
      <div className="container py-5">
      <h2 className="fw-bold mb-4">
        {language === 'en' ? 'Overview' : 'አጠቃላይ እይታ'}
      </h2>
      <p>
        {language === 'en'
          ? 'Our catering services extend to both indoor and outdoor events, providing a seamless and high-quality dining experience. Whether it is a corporate event, a wedding, or a private party, our team is dedicated to making your event memorable.'
          : 'የምግብ አቅርቦት አገልግሎታችን ለቤት ውስጥ እና ለውጪ ዝግጅቶች የሚዘልቅ ሲሆን እንከን የለሽ እና ከፍተኛ ጥራት ያለው የመመገቢያ ተሞክሮን ይሰጣል። የኮርፖሬት ዝግጅት፣ ሰርግ፣ ወይም የግል ፓርቲ ይሁን፣ ቡድናችን ዝግጅትዎን የማይረሳ ለማድረግ ቁርጠኛ ነው።'}
      </p>

      <h4 className="fw-bold mt-5 mb-3">{language === 'en' ? 'Key Features' : 'ቁልፍ ገጽታዎች'}</h4>
      <table className="table table-bordered mt-3">
        <thead className="table-light">
          <tr>
            <th>{language === 'am' ? 'ባህሪ' : 'Feature'}</th>
            <th>{language === 'am' ? 'መግለጫ' : 'Description'}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{language === 'am' ? 'የተለያዩ ምናሌዎች' : 'Diverse Menus'}</td>
            <td>{language === 'am' ? 'ለማንኛውም ዝግጅት የሚስማሙ የተለያዩ የምግብ አማራጮች' : 'A wide variety of menu options to suit any event'}</td>
          </tr>
          <tr>
            <td>{language === 'am' ? 'ፕሮፌሽናል ሰራተኞች' : 'Professional Staff'}</td>
            <td>{language === 'am' ? 'ልምድ ያለው እና በትኩረት የሚከታተል የዝግጅት ቡድን' : 'Experienced and attentive event staff'}</td>
          </tr>
          <tr>
            <td>{language === 'am' ? 'የቤት ውስጥ እና የውጪ ዝግጅቶች' : 'Indoor & Outdoor Events'}</td>
            <td>{language === 'am' ? 'ለቤት ውስጥ እና ለውጪ ዝግጅቶች ሙሉ የምግብ አቅርቦት አገልግሎት' : 'Full catering service for both indoor and outdoor venues'}</td>
          </tr>
          <tr>
            <td>{language === 'am' ? 'ብጁ ፓኬጆች' : 'Custom Packages'}</td>
            <td>{language === 'am' ? 'የእርስዎን ፍላጎቶች እና በጀት ለማሟላት የተዘጋጁ ፓኬጆች' : 'Tailored packages to meet your specific needs and budget'}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </section>
  );
};

export default CateringServiceOverview;
