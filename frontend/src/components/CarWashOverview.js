import React from 'react';

const CarWashOverview = ({ language }) => {
  return (
    <section className="container py-5">
      <h2 className="fw-bold mb-4">
        {language === 'en' ? 'Overview' : 'አጠቃላይ እይታ'}
      </h2>
      <p>
        {language === 'en'
          ? 'Keep your vehicle sparkling clean with our professional car wash service. We offer a range of cleaning packages, from a quick exterior wash to a full interior and exterior detailing.'
          : 'ፕሮፌሽናል በሆነው የመኪና እጥበት አገልግሎታችን መኪናዎን ንፁህ እና አንጸባራቂ ያድርጉት። ከፈጣን የውጪ እጥበት እስከ ሙሉ የውስጥ እና የውጪ ዝርዝር ክሊኒንግ ድረስ የተለያዩ የጽዳት ፓኬጆችን እናቀርባለን።'}
      </p>

      <h4 className="fw-bold mt-5 mb-3">{language === 'en' ? 'Key Features' : 'ቁልፍ ገጽታዎች'}</h4>
      <table className="table table-bordered mt-3">
        <thead className="table-light">
          <tr>
            <th>{language === 'am' ? 'አገልግሎት' : 'Service'}</th>
            <th>{language === 'am' ? 'መግለጫ' : 'Description'}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{language === 'am' ? 'የውጪ እጥበት' : 'Exterior Wash'}</td>
            <td>{language === 'am' ? 'ፈጣን እና ጥልቅ የውጪ የመኪና እጥበት' : 'Quick and thorough exterior car wash'}</td>
          </tr>
          <tr>
            <td>{language === 'am' ? 'የውስጥ ክሊኒንግ' : 'Interior Cleaning'}</td>
            <td>{language === 'am' ? 'የመኪናዎን የውስጥ ክፍል በዝርዝር ማፅዳት' : 'Detailed cleaning of your car\'s interior'}</td>
          </tr>
          <tr>
            <td>{language === 'am' ? 'ሙሉ ዝርዝር' : 'Full Detailing'}</td>
            <td>{language === 'am' ? 'የመኪናዎን ሙሉ የውስጥ እና የውጪ ክፍል ማፅዳት እና ማንፀባረቅ' : 'Complete interior and exterior cleaning and polishing'}</td>
          </tr>
          <tr>
            <td>{language === 'am' ? 'ሰም እና ፖሊሽ' : 'Wax and Polish'}</td>
            <td>{language === 'am' ? 'የመኪናዎን ቀለም ለመጠበቅ እና ለማንፀባረቅ' : 'Protect and shine your car\'s paint'}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default CarWashOverview;
