import React from 'react';

const SpaOverview = ({ language }) => {
  // Bilingual data for room amenities
  const amenities = {
    general: [
      { en: "Safe deposit box", am: "ደህንነቱ የተጠበቀ የቁሳቁስ ካዝና" },
      { en: "Slippers", am: "ንፁህ ነጠላ ጫማ" },
      { en: "Work desk", am: "ምቹ የስራ ቦታ" },
    ],
    bathroom: [
      { en: "Bath or shower", am: "መታጠቢያ ክፍል" },
      { en: "Towels", am: "ንፁህ ፎጣ" },
      { en: "Free toiletries", am: "ነፃ ተጨማሪ አስፈላጊ ቁሳቁሶች" }
    ],
    dining: [
      { en: "Electric kettle", am: "የኤሌክትሪክ በራድ (ሻይ ማፍያ)" },
      { en: "Dining area", am: "መመገቢያ ቦታ" }
    ],
    media: [
      { en: "Flat-screen TV", am: "ደረጃውን የጠበቀ ቴሌቪዥን ከተሟላ ቻናል ጋር" },
    ]
  };

  return (
    <section className="py-5 bg-light" data-aos="fade-up">
      <div className="container">
        <h1 className="display-4 fw-bold text-black text-center">
          {language === 'am' ? 'የመኝታ አገልግሎት' : 'Room Service'}
        </h1>
        <p className="lead mt-2 text-center">
          {language === 'am' 
            ? 'ፅዱ እና ምቹ የመኝታ አገልግሎት በተመጣጣኝ ዋጋ ፤ ከተሟላ ፋሲሊቲ ጋር እናቀርባለን።' 
            : 'Experience comfort and relaxation in our luxurious rooms.'}
        </p>
      </div>
      <div className="container py-5">
      {/* Deluxe Room Section */}
      <div className="room-details mb-5">
        <h2 className="fw-bold mb-3">{language === 'en' ? 'Deluxe Room' : 'ዴሉክስ ክፍል'}</h2>
        <p className="lead">{language === 'en' ? '2 GUESTS, 1 KING-SIZE BED' : '2 እንግዶች፣ 1 ኪንግ-ሳይዝ መኝታ'}</p>
        
        <div className="row mt-4">
          <div className="col-md-6">
            <h4 className="fw-bold">{language === 'en' ? 'General' : 'ተጨማሪ አገልግሎቶች'}</h4>
            <ul>
              {amenities.general.map((item, index) => (
                <li key={index}>{language === 'en' ? item.en : item.am}</li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <h4 className="fw-bold">{language === 'en' ? 'Bathroom' : 'መታጠቢያ ቦታ'}</h4>
            <ul>
              {amenities.bathroom.map((item, index) => (
                <li key={index}>{language === 'en' ? item.en : item.am}</li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <h4 className="fw-bold">{language === 'en' ? 'Dining' : 'ምግብ ቤት'}</h4>
            <ul>
              {amenities.dining.map((item, index) => (
                <li key={index}>{language === 'en' ? item.en : item.am}</li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <h4 className="fw-bold">{language === 'en' ? 'Media' : 'መዝናኛ አገልግሎት'}</h4>
            <ul>
              {amenities.media.map((item, index) => (
                <li key={index}>{language === 'en' ? item.en : item.am}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Twin Room Section */}
      <div className="room-details">
        <h2 className="fw-bold mb-3">{language === 'en' ? 'Twin Room' : 'መንትያ ክፍል'}</h2>
        <p className="lead">{language === 'en' ? '2 GUESTS, 2 SINGLE BEDS' : '2 እንግዶች፣ 2 ነጠላ አልጋዎች'}</p>

        <div className="row mt-4">
          <div className="col-md-6">
            <h4 className="fw-bold">{language === 'en' ? 'General' : 'አጠቃላይ'}</h4>
            <ul>
              {amenities.general.map((item, index) => (
                <li key={index}>{language === 'en' ? item.en : item.am}</li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <h4 className="fw-bold">{language === 'en' ? 'Bathroom' : 'ማጠቢያ ቤት'}</h4>
            <ul>
              {amenities.bathroom.map((item, index) => (
                <li key={index}>{language === 'en' ? item.en : item.am}</li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <h4 className="fw-bold">{language === 'en' ? 'Dining' : 'ምግብ ቤት'}</h4>
            <ul>
              {amenities.dining.map((item, index) => (
                <li key={index}>{language === 'en' ? item.en : item.am}</li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <h4 className="fw-bold">{language === 'en' ? 'Media' : 'ሚዲያ'}</h4>
            <ul>
              {amenities.media.map((item, index) => (
                <li key={index}>{language === 'en' ? item.en : item.am}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default SpaOverview;