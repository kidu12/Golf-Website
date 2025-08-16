import React from 'react';

const PlaygroundOverview = ({ language }) => {
  return (
    <section className="py-5 bg-light" data-aos="fade-up">
      <div className="container">
        <h1 className="display-4 fw-bold text-black text-center">
          {language === 'am' ? 'የልጆች መጫወቻ ሜዳ' : 'Children\'s Playground'}
        </h1>
        <p className="lead mt-2 text-center">
          {language === 'am' 
            ? 'ደህንነቱ የተጠበቀ እና አስደሳች'
            : 'Safe and Fun for Kids'}
        </p>
      </div>
      <div className="container py-5">
      <h2 className="fw-bold mb-4">
        {language === 'en' ? 'Overview' : 'አጠቃላይ እይታ'}
      </h2>
      <p>
        {language === 'en'
          ? 'A safe and fun playground for children to enjoy while you relax. The playground is equipped with modern and secure play structures.'
          : 'እርስዎ በሚያርፉበት ጊዜ ልጆችዎ በደስታ እንዲጫወቱበት የተዘጋጀ አስተማማኝ እና አስደሳች የመጫወቻ ስፍራ። የመጫወቻ ስፍራው የተሟላ ፣  ዘመናዊ እና አስተማማኝ የመጫወቻ መዋቅሮች የተዋቀረ፣ ለደህንነታቸው ክፍተኛ ትኩረት የተሰጠው የመጨዋቻ ቦታ ነው ። '}
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
            <td>{language === 'am' ? 'ደህንነቱ የተጠበቀ መዋቅሮች' : 'Safe Structures'}</td>
            <td>{language === 'am' ? 'ሁሉም መጫዎቻዎች የልጆችን ደህንነት ትኩረት ያደረጉ ናቸው' : 'All play structures are designed for child safety'}</td>
          </tr>
          <tr>
            <td>{language === 'am' ? 'ዘመናዊ መሣሪያዎች' : 'Modern Equipment'}</td>
            <td>{language === 'am' ? 'አዳዲስ እና አዝናኝ የመጫወቻ መሳሪያዎች' : 'New and fun play equipment'}</td>
          </tr>
          <tr>
            <td>{language === 'am' ? 'የተሟላ የመጫወቻ ስፍራ' : 'Safe Structures'}</td>
            <td>{language === 'am' ? 'ልጆች እያማረጡ የሚጫወቱበት የመጫወቻ አይነቶች ያሉት' : 'All play structures are designed for child safety'}</td>
          </tr>
          <tr>
            <td>{language === 'am' ? 'ለስላሳ መሬት' : 'Soft Ground'}</td>
            <td>{language === 'am' ? 'በመጫወቻ ስፍራው ውስጥ ለስላሳ እና አስተማማኝ መሬት' : 'Soft and safe flooring throughout the play area'}</td>
          </tr>
          <tr>
            <td>{language === 'am' ? 'የወላጆች መቀመጫ' : 'Parent Seating'}</td>
            <td>{language === 'am' ? 'ልጆቻቸውን ለሚጠብቁ ወላጆች ምቹ የመቀመጫ ቦታ ያለው' : 'Comfortable seating area for parents to supervise their children'}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </section>
  );
};

export default PlaygroundOverview;
