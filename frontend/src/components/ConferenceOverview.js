import React from 'react';

const ConferenceOverview = ({ language }) => (
  <section className="py-5 bg-light" data-aos="fade-up">
    <div className="container">
  <h2 className="fw-bold mb-4">
  {language === 'en' ? 'Overview' : 'አጠቃላይ እይታ'}
</h2>
<p>
  {language === 'en'
    ? 'Our conference halls are perfect for a wide range of events, from grand celebrations to intimate official gatherings. Each hall is equipped with advanced sound systems, wireless microphones, LCD projectors, and air conditioning to ensure a comfortable experience.'
    : 'የስብሰባ አዳራሾቻችን ከትላልቅ ክብረ በዓላት እስከ ትናንሽ ኦፊሴላዊ ዝግጅቶች ድረስ ሁሉንም ነገር ለማስተናገድ ተስማሚ ናቸው::. ሁሉም አዳራሾች የድምፅ ሲስተሞች፣ ሽቦ አልባ ማይክሮፎኖች፣ ኤልሲዲ ፕሮጀክተሮች እና አየር ማቀዝቀዣዎች የተገጠመላቸው ናቸው።'
  }
</p>
      <ul className="list-group mt-3">
  <li className="list-group-item">
    {language === 'en'
      ? 'Halls that can accommodate up to 1000 people'
      : 'እስከ 1000 ሰው ማስተናገድ የሚችሉ የስብሰባ አዳራሾች:'
    }
  </li>
  <li className="list-group-item">
    {language === 'en'
      ? 'Modern sound system & wireless microphones'
      : 'ዘመናዊ የድምፅ ስርዓት እና ሽቦ አልባ ማይክሮፎኖች'
    }
  </li>
  <li className="list-group-item">
    {language === 'en'
      ? 'LCD projector for presentations'
      : 'ለዝግጅት ለአቀራረቦች LCD ፕሮጀክተር'
    }
  </li>
  <li className="list-group-item">
    {language === 'en'
      ? 'Ideal for weddings, birthdays, corporate events'
      : 'ለጋብቻ፣ ለየልደት እና ለድርጅታዊ ዝግጅቶች ተስማሚ'
    }
  </li>
   <li className="list-group-item">
    {language === 'en'
      ? 'VIP Meeting Hall up to 60 pepople'
      : 'ቪአይፒ ስብሰባ አዳራሽ ለ 60 ሰዎቸ ይሚበቃ'
    }
  </li>
</ul>


    </div>
  </section>

  
);

export default ConferenceOverview;
