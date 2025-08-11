import React from 'react';

const GardenOverview = ({ language }) => {
  return (
    <section className="container py-5">
    
<h2 className="fw-bold mb-4">
  {language === 'en' ? 'Overview' : 'አጠቃላይ እይታ'}
</h2>

<p>
  {language === 'en'
    ? 'Our Garden Area & Grounds is a spacious, evergreen venue that remains lush year-round. Capable of hosting, 6,000 to 10,000 guests, it offers well-organized zones, ample parking, and robust security, ensuring a safe and successful event for all attendees.'
    : 'የመኮንኖችች ክበብ አመቱን ሙሉ ምቹ፣ ለአይን ማራኪና አረንጓዴ ሁኖ የሚገኝ  ቦታ ሲሆን በዚህም ቦታ ከዝቅተኛ ቁጥር እስከ ከፍተኛ ቁጥር ማለትም ከ6000-10000 እንግዶችን ማስተናገድ የሚያስችል  ነው።በዚህም ቦታ ለጋብቻዎች፣ ለኮንሰርቶች እና ለፌስቲቫሎች ተስማሚ ነው።'
  }
</p>

<h4 className="mt-4">
  {language === 'en' ? 'Facilities & Features' : 'መሳሪያዎች እና ባህሪያት'}
</h4>
<div className="table-responsive">
  <table className="table table-bordered mt-3">
    <thead className="table-light">
      <tr>
        <th>{language === 'en' ? 'Feature' : 'አይነት'}</th>
        <th>{language === 'en' ? 'Description' : 'መግለጫ'}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{language === 'en' ? 'Year-round greenery' : 'በዓመቱ ሁል አረንጓዴነት'}</td>
        <td>
          {language === 'en'
            ? 'Maintained to remain green 356 days a year with special care'
            : 'በተለየ እንክብካቤ በዓመቱ 356 ቀናት አረንጓዴ ሆኖ ለመቆየት የሚያስችል ውበት'
          }
        </td>
      </tr>
      <tr>
        <td>{language === 'en' ? 'Capacity' : 'መጠን'}</td>
        <td>
          {language === 'en'
            ? 'Can host up to 6000-10000 guests comfortably'
            : 'ከ 6000-10000 እንግዶች ያአለምንም ችግር ማስተናገድ የሚችል'
          }
        </td>
      </tr>
      <tr>
        <td>{language === 'en' ? 'Event Types' : 'የዝግጅት አይነቶች'}</td>
        <td>
          {language === 'en'
            ? 'Weddings, bazaars, concerts, birthdays, exhibitions, and more'
            : 'ጋብቻ፣ ገበያ፣ ኮንሰርቶች፣ የልደት ዝግጅቶች፣ እና ሌሎችም'
          }
        </td>
      </tr>
      <tr>
        <td>{language === 'en' ? 'Security' : 'ደህንነት'}</td>
        <td>
          {language === 'en'
            ? 'Ample personnel and CCTV protection'
            : 'በቂ የደህንነት ሰራተኞች እና የካማራ መከላከያ'
          }
        </td>
      </tr>
      <tr>
        <td>{language === 'en' ? 'Parking' : 'መኪና ማቆሚያ'}</td>
        <td>
          {language === 'en'
            ? 'Large and secure vehicle parking space available'
            : 'ሰፊ እና ደህንነቱ የተጠበቀ የመኪና ማቆሚያ ቦታ አለ'
          }
        </td>
      </tr>
    </tbody>
  </table>
      </div>
    </section>
  );
};

export default GardenOverview;
