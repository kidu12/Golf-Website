import React from 'react';

const BarOverview = ({ language }) => {
  return (
    <section className="container py-5">
 <h2 className="fw-bold mb-4">
  {language === 'en' ? 'Overview' : 'አጠቃላይ እይታ'}
</h2>
      <p>
        {language === 'en'
          ? 'At Addis Ababa Golf Club, our restaurant boasts a pristine, modern kitchen operated by skilled chefs and a passionate team committed to culinary excellence. Guests can indulge in a carefully curated menu that blends authentic Ethiopian flavors with a rich variety of international dishes — perfect for every palate.'
          : 'ለአይን በሚስብና መንፈስን በሚያድስ አረንጓዴ አካባቢ ውስጥ በሰለጠኑ ሸፎቻችን ጥራት እና ጣዕም ያላቸው ባህለዊ እና የውጭ ምግቦችንና መጠጦችን በተመጣጣኝ ዋጋ ከማራኪ መስተንግዶ ጋር ስለምናቀርብ  መጥተው እየተዝናኑ ያጣጥሙ'}
      </p>

      <h4 class="fw-bold mt-5 mb-3">{language === 'en' ? 'Key Features' : 'ቁልፍ ገጽታዎች'}</h4>
      <table className="table table-bordered mt-3">
    <thead className="table-light">
      <tr>
        <th>{language === 'am' ? 'በባር እና በራሰቶራንት የሚገኙ' : 'Facility'}</th>
        <th>{language === 'am' ? 'መግለጫ' : 'Description'}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{language === 'am' ? 'ወጥ ቤታችን' : 'Kitchen'}</td>
        <td>{language === 'am' ? 'ንፁህ፣ ዘመናዊ እና በባለሙያ ሰራተኞች የተሟላ' : 'Clean, modern, fully equipped with professional staff'}</td>
      </tr>
      <tr>
        <td>{language === 'am' ? 'የምግብና አይነቶች' : 'Menu'}</td>
        <td>{language === 'am' ? 'ባህላዊ የኢትዮጵያ እና ዓለም አቀፍ ምግቦች' : 'Traditional Ethiopian & International cuisine'}</td>
      </tr>
      <tr>
        <td>{language === 'am' ? 'ባር' : 'Bar'}</td>
        <td>{language === 'am' ? 'የሀገር ውስጥ እና ከውጭ የሚገቡ መጠጦች፣ መክሰስ' : 'Local and imported beverages, snacks, canapés'}</td>
      </tr>
      <tr>
        <td>{language === 'am' ? 'መዝናኛ' : 'Entertainment'}</td>
        <td>{language === 'am' ? 'DSTV እና ዋይ- ፋይ  አገልግሎት፣ ዘና ያለ ድባብ' : 'DSTV service, relaxed atmosphere'}</td>
      </tr>
      <tr>
        <td>{language === 'am' ? 'መጠጥ' : 'Drinks'}</td>
        <td>{language === 'am' ? 'ከውጭ የሚገቡ መጠጦች ፣ ለስላሳ መጠጦች  እና ትኩስ' : 'Hot drinks, soft drinks, and refreshments'}</td>
      </tr>
    </tbody>
  </table>


    </section>
  );
};

export default BarOverview;
