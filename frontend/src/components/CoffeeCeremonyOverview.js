import React from 'react';

const CoffeeCeremonyOverview = ({ language }) => {
  return (
    <section className="container py-5">
      <h2 className="fw-bold mb-4">
        {language === 'en' ? 'Overview' : 'አጠቃላይ እይታ'}
      </h2>
      <p>
        {language === 'en'
          ? 'Experience the rich cultural heritage of Ethiopia with our traditional coffee ceremony. A unique and authentic experience for our guests, showcasing the intricate process of roasting, grinding, and brewing coffee in the traditional Ethiopian way.'
          : 'የኢትዮጵያን የበለጸገ የባህል ቅርስ በባህላዊ የቡና አፈላል ስነ ስርዓታችን ይለማመዱ። ለእንግዶቻችን ልዩ እና እውነተኛ የሆነ ተሞክሮ ሲሆን፥ ባህላዊ በሆነው የኢትዮጵያ መንገድ ቡናን የመቁላት፣ የመፍጨት እና የማፍላት ውስብስብ ሂደትን ያሳያል።'}
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
            <td>{language === 'am' ? 'ትክክለኛ ልምድ' : 'Authentic Experience'}</td>
            <td>{language === 'am' ? 'ባህላዊ የቡና አፈላል ስነ ስርዓትን ሙሉ በሙሉ ይለማመዱ' : 'Full immersion in the traditional coffee ceremony'}</td>
          </tr>
          <tr>
            <td>{language === 'am' ? 'ትኩስ የተጠበሰ ቡና' : 'Freshly Roasted Coffee'}</td>
            <td>{language === 'am' ? 'በቦታው ላይ የሚጠበስ እና የሚዘጋጅ ትኩስ ቡና' : 'Coffee beans roasted and prepared on the spot'}</td>
          </tr>
          <tr>
            <td>{language === 'am' ? 'የባህል ግንዛቤ' : 'Cultural Insight'}</td>
            <td>{language === 'am' ? 'ስለ ኢትዮጵያ የቡና ባህል ታሪክ እና አስፈላጊነት ይወቁ' : 'Learn about the history and significance of coffee in Ethiopian culture'}</td>
          </tr>
          <tr>
            <td>{language === 'am' ? 'ባህላዊ መክሰስ' : 'Traditional Snacks'}</td>
            <td>{language === 'am' ? 'ከቡናው ጋር የሚቀርቡ ባህላዊ መክሰሶች' : 'Served with traditional snacks that accompany the coffee'}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default CoffeeCeremonyOverview;
