import React from 'react';

const ConferenceTable = ({ language }) => (
  <section className="py-5" data-aos="fade-up">
    <div className="container">
      <h2 className="mb-4">Capacity</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
             <tr>
      <td>{language === 'en' ? 'Types of halls ' : 'የአዳራሽ አይነት'}</td>
      <td>{language === 'en' ? 'Capacity' : 'በማስተናገድ አቅም'}</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{language === 'en' ? 'Grand Hall' : 'ግራንድ አዳራሽ'}</td>
      <td>{language === 'en' ? '1000 Spectators' : '1000 ታዳሚዎች'}</td>
    </tr>
    <tr>
      <td>{language === 'en' ? 'Medium Hall' : 'መካከለኛ አዳራሽ'}</td>
      <td>{language === 'en' ? '500  Spectators' : '500  ታዳሚዎች'}</td>
    </tr>
    <tr>
      <td>{language === 'en' ? 'Mini Hall' : 'ሚኒ አዳራሽ'}</td>
      <td>{language === 'en' ? '80  Spectators' : '80  ታዳሚዎች'}</td>
    </tr>
    <tr>
      <td>{language === 'en' ? 'VIP Meeting Room' : 'የቪአይፒ የስብሰባ ክፍል'}</td>
      <td>{language === 'en' ? '60 Spectators' : '60 ታዳሚዎች'}</td>
    </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default ConferenceTable;
