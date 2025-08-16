import React from 'react';
import '../styles/serviceOverview.css';

const ExhibitionsAndBazaarsOverview = ({ language }) => {
  const features = {
    en: [
      { icon: 'fas fa-ruler-combined', title: 'Versatile Spaces', description: 'Flexible indoor and outdoor layouts to suit any event size.' },
      { icon: 'fas fa-parking', title: 'Ample Parking', description: 'Convenient and spacious parking for all your guests.' },
      { icon: 'fas fa-headset', title: 'Dedicated Support', description: 'A professional team to assist with planning and execution.' },
      { icon: 'fas fa-utensils', title: 'Catering Services', description: 'Optional catering with a diverse menu to delight your attendees.' },
    ],
    am: [
      { icon: 'fas fa-ruler-combined', title: 'ሁለገብ ቦታዎች', description: 'ለማንኛውም የዝግጅት መጠን ተስማሚ የሆኑ ተለዋዋጭ የቤት ውስጥ እና የውጭ አቀማመጦች።' },
      { icon: 'fas fa-parking', title: 'በቂ የመኪና ማቆሚያ', description: 'ለሁሉም እንግዶችዎ ምቹ እና ሰፊ የመኪና ማቆሚያ።' },
      { icon: 'fas fa-headset', title: 'ቁርጠኛ ድጋፍ', description: 'በእቅድ እና በአፈፃፀም የሚረዳ የባለሙያ ቡድን።' },
      { icon: 'fas fa-utensils', title: 'የምግብ አቅርቦት አገልግሎቶች', description: 'ተሰብሳቢዎችዎን የሚያስደስት የተለያዩ ምናሌዎች ያሉት አማራጭ የምግብ አቅርቦት።' },
    ],
  };

  const featuresContent = language === 'am' ? features.am : features.en;
  const keyFeaturesTitle = language === 'am' ? 'የእኛ ቁልፍ ባህሪዎች' : 'Our Key Features';

  return (
    <section className="py-5 bg-light" data-aos="fade-up">
      <div className="container">
        <h1 className="display-4 fw-bold text-black text-center">
          {language === 'am' ? 'ኤግዚቢሽኖች እና ባዛሮች' : 'Exhibitions & Bazaars'}
        </h1>
        <p className="lead mt-2 text-center">
          {language === 'am' 
            ? 'ለማንኛውም ዝግጅት ተስማሚ'
            : 'Perfect for Any Event'}
        </p>
      </div>
      <div className="container py-5">
        <h2 className="fw-bold mb-4">
          {language === 'en' ? 'Overview' : 'አጠቃላይ እይታ'}
        </h2>
        <p>
          {language === 'en'
            ? 'Our club offers versatile and elegant spaces perfect for hosting a wide range of events, from professional exhibitions to vibrant community bazaars. With state-of-the-art facilities and a dedicated support team, we ensure your event is a memorable success. Our flexible layouts can be customized to meet your specific needs, making your exhibition or bazaar a standout occasion.'
            : 'የእኛ ክለብ ከሙያዊ ኤግዚቢሽኖች እስከ ህያው የማህበረሰብ ባዛሮች ድረስ ሰፊ ዝግጅቶችን ለማስተናገድ ፍጹም የሆኑ ሁለገብ እና የሚያምሩ ቦታዎችን ያቀርባል። ዘመናዊ ተቋማት እና ቁርጠኛ የድጋፍ ቡድን ዝግጅትዎ የማይረሳ ስኬት እንዲሆን እናረጋግጣለን። የእኛ ተለዋዋጭ አቀማመጦች የእርስዎን ልዩ ፍላጎቶች ለማሟላት ሊበጁ ይችላሉ፣ ይህም የእርስዎን ኤግዚቢሽን ወይም ባዛር የላቀ ዝግጅት ያደርገዋል።'}
        </p>
      </div>

      <div className="container">
        <h2 className="overview-title text-center fw-bold">{keyFeaturesTitle}</h2>
        <div className="row mt-4">
          {featuresContent.map((feature, index) => (
            <div className="col-md-6 col-lg-3 d-flex" key={index}>
              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExhibitionsAndBazaarsOverview;
