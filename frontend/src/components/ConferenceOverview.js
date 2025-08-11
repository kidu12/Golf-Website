import React from 'react';

const ConferenceOverview = ({ language }) => (
  <section className="py-5 bg-light" data-aos="fade-up">
    <div className="container">
  <h2 className="fw-bold mb-4">
  {language === 'en' ? 'Overview' : 'አጠቃላይ እይታ'}
</h2>
<p>
  {language === 'en'
    ? 'Our VIP meeting room is ideal for high-level meetings, trainings, and private events. Equipped with modern furnishings, specialized equipment, and a comfortable atmosphere, the room can accommodate up to 30 guests. It is ideal for board meetings, special meetings, and special private events.'
    : 'ድርጅታችን የመከላከያ ሰራዊት ፋውንዴሽን አዲስ አበባ  ጎልፍ ክለብ ከ 30 እስከ 50 ተሳታፊዎች ማስተናገድ የሚችል  ምቹ እና ፅዱ  የመሰብሰቢያ አዳራሽ  ያቀርባል።'
  }
</p>

      <h4 class="fw-bold mt-5 mb-3">{language === 'en' ? 'Key Features' : 'ቁልፍ ገጽታዎች'}</h4>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <strong>{language === 'en' ? 'Capacity:' : 'የማስተናገድ አቅም:'}</strong> {language === 'en' ? 'Up to 30 guests' : 'እስከ 30 እንግዶች'}
        </li>
        <li class="list-group-item">
          <strong>{language === 'en' ? 'Ideal For:' : 'ተስማሚ ለ:'}</strong> {language === 'en' ? 'Board meetings, special meetings, and special private events.' : 'ለቦርድ አባላት ስብሰባዎች፣ ለልዩ ልዩ ስብሰባዎች፣ እና ለልዩ የግል ዝግጅቶች።።'}
        </li>
        <li class="list-group-item">      
          <strong>{language === 'en' ? 'Equipment:' : 'መሳሪያዎች:'}</strong> {language === 'en' ? 'Modern furnishings and specialized equipment.' : 'ዘመናዊ እና ልዩ መሣሪያዎች የተገጠሙለት።'}
        </li>
        <li class="list-group-item">
          <strong>{language === 'en' ? 'Atmosphere:' : 'ከባቢ አየር:'}</strong> {language === 'en' ? 'Comfortable and private.' : 'ምቹ እና የግል።'}
        </li>
      </ul>

    </div>
  </section>

  
);

export default ConferenceOverview;
