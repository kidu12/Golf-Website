import React from 'react';

const BarOverview = ({ language }) => {
  return (
    <section className="container py-5">
 <h2 className="fw-bold mb-4">
  {language === 'en' ? 'Overview' : 'አጠቃላይ እይታ'}
</h2>
      <p>
  {language === 'am'
    ? 'በሰለጠኑ ሾፎች በከፍተኛ ጥራት የተዘጋጁ የኢትዮጵያዊና ዓለም አቀፍ ምግቦችና መጠጦች በጥራት እና በተመጣጣኝ ዋጋ  በባር እና ሬስቶራቶቻችን እናቀርባለን።'
    : "Our Bar & Restaurant delivers a delightful culinary journey, featuring modern facilities and outstanding service. Whether you're enjoying casual dining or hosting formal VIP events, our talented chefs prepare a diverse array of dishes to satisfy every palate."}
</p>

<p>
  {language === 'am'
    ? 'በባር እና ሬስቶራንት የሚገኙ:- የተለያዩ መጠጦችን እና መክሰስ : የተሟላ ኩሽና ፡ ንፁህ  ዘመናዊ ሙሉ በሙሉ ሙያዊ ሰራተኞች ያሉት ።የምግብ ፡ ባህላዊ የኢትዮጵያ እና አለም አቀፍ ምግብ ፡ ባር፡ የሀገር ውስጥ እና ከውጭ የሚገቡ መጠጦች፣ መክሰስ መዝናኛ፡  DSTV እና ዋይ- ፋይ  አገልግሎት፣ ዘና ያለ ድባብ። መጠጦች፡ ከውጭ የሚገቡ መጠጦች ፣ ለስላሳ መጠጦች  እና ትኩስ ነገሮቸ።'
    : 'The bar offers a wide selection of beverages and snacks, including hot drinks and soft drinks, ensuring a welcoming atmosphere for relaxation or celebration.'}
</p>

      <h4 className="mt-4">
  {language === 'am' ? 'ዋና ነጥቦች' : 'Highlights'}
</h4>

<div className="table-responsive">
  <table className="table table-bordered mt-3">
    <thead className="table-light">
      <tr>
        <th>{language === 'am' ? 'በባር እና በራሰቶራንት የሚገኙ' : 'Facility'}</th>
        <th>{language === 'am' ? 'መግለጫ' : 'Description'}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{language === 'am' ? 'የተሟላ ወጥ ቤታችን' : 'Kitchen'}</td>
        <td>{language === 'am' ? 'ንፁህ፣ ዘመናዊ እና በባለሙያ ሰራተኞች የተሟላ' : 'Clean, modern, fully equipped with professional staff'}</td>
      </tr>
      <tr>
        <td>{language === 'am' ? 'የምግብ' : 'Menu'}</td>
        <td>{language === 'am' ? 'ባህላዊ የኢትዮጵያ እና ዓለም አቀፍ ምግቦች' : 'Traditional Ethiopian & International cuisine'}</td>
      </tr>
      <tr>
        <td>{language === 'am' ? 'ባር' : 'Bar'}</td>
        <td>{language === 'am' ? 'የሀገር ውስጥ እና ከውጭ የሚገቡ መጠጦች፣ መክሰስ' : 'Local and imported beverages, snacks, canapés'}</td>
      </tr>
      <tr>
        <td>{language === 'am' ? 'አዝናኝ' : 'Entertainment'}</td>
        <td>{language === 'am' ? 'DSTV እና ዋይ- ፋይ  አገልግሎት፣ ዘና ያለ ድባብ' : 'DSTV service, relaxed atmosphere'}</td>
      </tr>
      <tr>
        <td>{language === 'am' ? 'መጠጥ' : 'Drinks'}</td>
        <td>{language === 'am' ? 'ከውጭ የሚገቡ መጠጦች ፣ ለስላሳ መጠጦች  እና ትኩስ' : 'Hot drinks, soft drinks, and refreshments'}</td>
      </tr>
    </tbody>
  </table>
      </div>
    </section>
  );
};

export default BarOverview;
