import React from 'react';

const GardenOverview = ({ language }) => {
  return (
    <section className="container py-5">
    
<h2 className="fw-bold mb-4">
  {language === 'en' ? 'Overview' : 'አጠቃላይ እይታ'}
</h2>

      <p>
        {language === 'en'
          ? 'The beautifully landscaped garden at Addis Ababa Golf Club stays green and vibrant throughout the year, offering a stunning outdoor venue for a wide range of events. With the capacity to host 10,000 to 15,000 guests, it’s an ideal setting for unforgettable weddings, lively concerts, cultural festivals, and more.'
          : 'የመከላከያ ሰራዊት ፋውንዴሽን አዲስ አበባ  ጎልፍ ክለብ ዓመቱን ሙሉ  በሚያምር ሁኔታ  አረንጓዴ ለምለም ሆኖ የሚቆይ ከ650,000 ካሬ ሜትር ስፋት ያለው ሰፊ ቦታ ነው። በተጨማሪም ከ10,000-15,000 እንግዶችን ማስተናገድ የሚችለው ይህ ቦታ ለሰርግ ፕሮግራሞች፣ ለኮንሰርቶች እና ለፌስቲቫሎች ተስማሚ ነው።'}
      </p>

      <h4 class="fw-bold mt-5 mb-3">{language === 'en' ? 'Key Features' : 'ቁልፍ ገጽታዎች'}</h4>
      <table className="table table-bordered mt-3">
    <thead className="table-light"> 
      <tr>
        <th>{language === 'en' ? 'Feature' : 'አይነት'}</th>
        <th>{language === 'en' ? 'Description' : 'መግለጫ'}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{language === 'en' ? 'Year-round greenery' : 'ከአመት አመት አረንጓደነት'}</td>
        <td>
          {language === 'en'
            ? 'Maintained to remain green 356 days a year with special care'
            : 'በተለየ እንክብካቤ በዓመቱ 356 ቀናት አረንጓዴ ሆኖ ለመቆየት የሚያስችል ውበት'
          }
        </td>
      </tr>
      <tr>
        <td>{language === 'en' ? 'Capacity' : 'በቂ ስፍራ'}</td>
        <td>
          {language === 'en'
            ? 'Hosts 10,000 to 15,000 guests.' : 'ከ10,000 እስከ 15,000 እንግዶችን ያስተናግዳል'
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
     

    </section>
  );
};

export default GardenOverview;
