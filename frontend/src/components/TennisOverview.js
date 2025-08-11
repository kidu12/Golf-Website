import React from 'react';

const TennisOverview = ({ language }) => {
  return (
<section className="container py-5">
  <h2 className="fw-bold mb-4">
    {language === 'en' ? 'Overview' : 'አጠቃላይ እይታ'}
  </h2>

  <p>
    {language === 'en'
      ? 'Our Tennis Court area includes four spacious, well-equipped courts suitable for both children and adults.'
      : 'የሜዳ ቴኒስ ቦታቸን ለልጆች እና ለአዋቂዎች ተስማሚ የሆኑ አራት ትላልቅ እና በደንብ የተዘጋጁ መጫዎችዎች አሉት።'
    }
  </p>

  <p>
    {language === 'en'
      ? 'Trained coaches and fitness instructors are on hand to provide lessons. Guests can take advantage of locker rooms with hot and cold water access, and the facility is also available for reservation for special events.'
      : 'በተሰለጠኑ አሰልጣኞች እና በአካል ብቃት መምህራን ትምህርቶችን ያገኛሉ። እንግዶች የሎከር ክፍሎች፣ ሙቅ እና ቀዝቃዛ ውሃ እንዲሁም ልዩ ዝግጅቶችን ለማካሄድ መጠቀም ይችላሉ።'
    }
  </p>

  <h4 className="mt-4">
    {language === 'en' ? 'Facilities & Services' : 'መሳሪያዎች እና አገልግሎቶች'}
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
          <td>{language === 'en' ? 'Court Type' : 'ቴኒስ መጫዎቻ አይነት'}</td>
          <td>{language === 'en' ? 'Multi-purpose tennis courts (4 available)' : 'አይንት ያላቸው ቴኒስ መገለጫዎች (4 ይገኛሉ)'}</td>
        </tr>
        <tr>
          <td>{language === 'en' ? 'Users' : 'ተጠቃሚዎች'}</td>
          <td>{language === 'en' ? 'Children and adults' : 'ልጆች እና አዋቂዎች'}</td>
        </tr>
        <tr>
          <td>{language === 'en' ? 'Coaching' : 'አሰልጣኝ'}</td>
          <td>{language === 'en' ? 'Available professional tennis coaches' : 'ብቃት ያላቸው የቴኒስ ባለሙያ አሰልጣኞች '}</td>
        </tr>
        <tr>
          <td>{language === 'en' ? 'Water Access' : 'የውሃ አቅርቦት'}</td>
          <td>{language === 'en' ? 'Hot and cold shower service' : 'ሙቅ እና ቀዝቃዛ የሻወር አገልግሎት'}</td>
        </tr>
        <tr>
          <td>{language === 'en' ? 'Locker Room' : 'የሎከር ክፍል'}</td>
          <td>{language === 'en' ? 'Secure locker service' : 'ደህንነቱ የተጠበቀ የሎከር አገልግሎት'}</td>
        </tr>
        <tr>
          <td>{language === 'en' ? 'Special Events' : 'ልዩ ዝግጅቶች'}</td>
          <td>{language === 'en' ? 'Available for sports competitions, school events, and gatherings' : 'ለስፖርታዊ ውድድሮች፣ የትምህርት ቤት ዝግጅቶች ከፍት ነው'}</td>
        </tr>
      </tbody>
      </table>
      </div>
    </section>
  );
}

export default TennisOverview;
