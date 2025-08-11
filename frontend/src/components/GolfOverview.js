import React from 'react';

const GolfOverview = ({ language }) => {
  return (
<section className="container py-5">
  <h2 className="fw-bold mb-4">
    {language === 'en' ? 'Overview' : 'አጠቃላይ እይታ'}
  </h2>
    <p>
    {language === 'en'
      ? 'Nestled within the serene landscape of Addis Ababa Golf Club, our 18-hole private/resort course offers a fulfilling experience for players of all skill levels. With a par of 70 and a total length of 5,529 meters, the course is designed to provide both challenge and enjoyment.'
      : 'በኢትዮጵያ የመጀመሪያና ብቸኛ አለም አቀፍ ደረጃን የጠበቀ፤ 18 ጉድጓዶች ያሉት፣ አሰልጣኞችን ከተሟሉ የጎልፍ መጫዎቻ እቃዎች ጋር ያሟላ የጎልፍ ሜዳ ስለሆነ መጥተው ይጎብኙን። በሁለገብ አገልግሎቶቻችን ይረካሉ፡፡ በተጨማሪም ከፍተኛ ልምድና እውቀት ያላቸው አሰልጣኞቹን በመጠቀም የጎልፍ ጫዎታን ለጀማሪዎች በማሰልጠን ለከፍተኛ ውድድር  እንዲበቁ  እናደርጋለን።'}
  </p>

  <h4 className="fw-bold mt-5 mb-3">{language === 'en' ? 'Key Features' : 'ቁልፍ ገጽታዎች'}</h4>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">
      <strong>{language === 'en' ? '18-Hole Course:' : '18-ቀዳዳ ኮርስ:'}</strong> {language === 'en' ? 'A challenging and enjoyable course for all players.' : 'ለሁሉም ተጫዋቾች ፈታኝ እና አስደሳች ኮርስ።'}
    </li>
    <li className="list-group-item">
      <strong>{language === 'en' ? 'Par 70:' : 'ፓር 70:'}</strong> {language === 'en' ? 'A standard par for a fulfilling round of golf.' : 'አንድ ዙር ጎልፍን ለማጠናቀቅ መደበኛ ፓር።'}
    </li>
    <li className="list-group-item">
      <strong>{language === 'en' ? '5,529 Meters:' : '5,529 ሜትር:'}</strong> {language === 'en' ? 'A long and challenging course layout.' : 'ረጅም እና ፈታኝ የኮርስ አቀማመጥ።'}
    </li>
    <li className="list-group-item">
      <strong>{language === 'en' ? 'Private/Resort Course:' : 'የግል/ሪዞርት ኮርስ:'}</strong> {language === 'en' ? 'An exclusive and serene golfing experience.' : 'ልዩ እና የተረጋጋ የጎልፍ ተሞክሮ።'}
    </li>
  </ul>
    </section>
  );
}

export default GolfOverview;
