import React from 'react';

const JuiceBarOverview = ({ language }) => {
  return (
    <section className="py-5 bg-light" data-aos="fade-up">
      <div className="container">
        <h1 className="display-4 fw-bold text-black text-center">
          {language === 'am' ? 'የፍራፍሬ ጭማቂ ባር' : 'Juice Bar'}
        </h1>
        <p className="lead mt-2 text-center">
          {language === 'am' 
            ? 'ጤናማ እና ትኩስ'
            : 'Healthy and Refreshing'}
        </p>
      </div>
      <div className="container py-5">
      <h2 className="fw-bold mb-4">
        {language === 'en' ? 'Overview' : 'አጠቃላይ እይታ'}
      </h2>
      <p>
        {language === 'en'
          ? 'Our Juice Bar offers a vibrant selection of freshly squeezed juices and healthy blends, perfect for a refreshing break. Choose from seasonal fruits, energizing smoothies, and custom wellness drinks—all prepared on the spot.'
          : 'የፍራፍሬ ጭማቂ ባራችን ከተፈጥሮ ፍራፍሬዎች የተዘጋጀ በጤና ላይ የተመሰረተ የተለያዩ የጭማቂ እና የስሙዚ አይነቶችን እንደምርጫዎ ያቀርባል። ከጨዋታ ወይም ከእንቅስቃሴ በኋላ ሲጠቀሙት የተለየ እርካታን ቀዝቀዝ በሚያደርግ ስሜት ይወስዱታል፡፡ ይሞክሩት በእርግጠኝነት ይዎዱታል።'}
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
            <td>{language === 'am' ? 'ትኩስ ጭማቂዎች' : 'Fresh Juices'}</td>
            <td>{language === 'am' ? 'በየቀኑ የሚዘጋጁ የተለያዩ የፍራፍሬ ጭማቂዎች' : 'A variety of freshly squeezed fruit juices made daily'}</td>
          </tr>
          <tr>
            <td>{language === 'am' ? 'ስሙዚዎች' : 'Smoothies'}</td>
            <td>{language === 'am' ? 'ጤናማ እና ሃይል ሰጪ የስሙዚ አማራጮች' : 'Healthy and energizing smoothie options'}</td>
          </tr>
          <tr>
            <td>{language === 'am' ? 'ጤናማ መጠጦች' : 'Wellness Drinks'}</td>
            <td>{language === 'am' ? 'ልዩ የጤና መጠጦች እና የሰውነት ማፅጃዎች' : 'Special wellness drinks and detox cleanses'}</td>
          </tr>
          <tr>
            <td>{language === 'am' ? 'ወቅታዊ ፍራፍሬዎች' : 'Seasonal Fruits'}</td>
            <td>{language === 'am' ? 'በየወቅቱ የሚገኙ ምርጥ የፍራፍሬ ምርጫዎች' : 'Best selection of fruits available each season'}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </section>
  );
};

export default JuiceBarOverview;
