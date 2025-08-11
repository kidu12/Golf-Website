import React from 'react';

const TennisOverview = ({ language }) => {
  return (
<section className="container py-5">
  <h2 className="fw-bold mb-4">
    {language === 'en' ? 'Overview' : 'አጠቃላይ እይታ'}
  </h2>

    <p>
    {language === 'en'
      ? 'The Addis Ababa Golf Club features four spacious and well-maintained tennis courts suitable for players of all ages and skill levels. Our professional coaches are available to provide expert instruction, and our facilities include locker rooms with hot and cold water. The courts can also be reserved for special events and competitions.'
      : 'የአዲስ አበባ ጎልፍ ክለብ ለሁሉም ዕድሜ እና የክህሎት ደረጃ ላሉ ተጫዋቾች ተስማሚ የሆኑ አራት ሰፊ እና በሚገባ የተያዙ የቴኒስ ሜዳዎችን ያቀርባል።'}
  </p>

  <h4 class="fw-bold mt-5 mb-3">{language === 'en' ? 'Key Features' : 'ቁልፍ ገጽታዎች'}</h4>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
      <strong>{language === 'en' ? 'Four Courts:' : 'አራት ሜዳዎች:'}</strong> {language === 'en' ? 'Spacious and well-maintained courts for all players.' : 'ለሁሉም ተጫዋቾች የተዘጋጁ ሰፊ እና በሚገባ የተያዙ ሜዳዎች።'}
    </li>
    <li class="list-group-item">
      <strong>{language === 'en' ? 'Professional Coaching:' : 'የባለሙያ ስልጠና:'}</strong> {language === 'en' ? 'Expert instruction available for all skill levels.' : 'ለሁሉም የክህሎት ደረጃዎች የባለሙያ ስልጠና ይገኛል።'}
    </li>
    <li class="list-group-item">
      <strong>{language === 'en' ? 'Amenities:' : 'ምቹ ሁኔታዎች:'}</strong> {language === 'en' ? 'Locker rooms with hot and cold water.' : 'ሙቅ እና ቀዝቃዛ ውሃ ያላቸው የሎከር ክፍሎች።'}
    </li>
    <li class="list-group-item">
      <strong>{language === 'en' ? 'Event Hosting:' : 'የዝግጅት ማስተናገጃ:'}</strong> {language === 'en' ? 'Available for special events and competitions.' : 'ለልዩ ዝግጅቶች እና ውድድሮች የተዘጋጀ።'}
    </li>
  </ul>
    </section>
  );
}

export default TennisOverview;
