import React from 'react';
import cateringImg from '../assets/images/catring_2.webp';
import bathImg from '../assets/images/Spa-7.webp';
import shopsImg from '../assets/images/Shoping.webp';
import conferenceImg from '../assets/images/hall_9.webp';
import football from '../assets/images/Garden-1.webp';
import parkingImg from '../assets/images/parking.webp';


const services = [
  {
    title: {
      en: ' Event Catering',
      am: ' የዝግጅት ምግብ አቅራቢ'
    },
    image: cateringImg,
    description: {
      en: `We provide full-service catering for weddings, birthdays, graduations, and corporate events. Our talented chefs create a range of dishes, from traditional Ethiopian cuisine to international favorites, all tailored to your preferences and budget

Our services include coffee ceremonies, buffet setups, attentive server staff, and personalized menu planning, ensuring a delightful dining experience for every occasion.`,
      am: `ለዝግጅት ምግብ አዘጋጅቶ የማቅረብ አገልግሎት
ለጋብቻ፣ልደት፣ምረቃ እና ሌሎችም ዝግጅቶች በጥራትና በተመጣጣኝ ዋጋ ባህላዊና ዘመናዊ ምግብና መጠጦች ዝርዝር እንደ ምርጫዎ ከተሟላ መስንግዶ ጋር በተንጣለለ አዳራሻችን ፣በግቢያችን አረንጓዴ ቦታ ላይ እና ባሉበት ቦታ እናቀርባለን።`
    }
  },
  {
    title: {
      en: ' Moroccan Bath',
      am: ' የሞሮኮ ባዝ'
    },
    image: bathImg,
    description: {
      en: `Our Moroccan bath experience merges steam, scrubbing, and massage with natural oils and clays. This revitalizing treatment detoxifies the skin, enhances circulation, and leaves you feeling completely refreshed.

Facilities feature private rooms, professional attendants, and premium hygiene standards, ensuring a relaxing and luxurious atmosphere.`,
      am: `የእኛ ሞሮኮና ባዝ ዘመኑን የዋጁ ፅዱ እና ጥራት ያላቸው እቃዎችንና  የሰለጠኑ ባለሞያዎችን በመያዝ የተደራጀ ነው።

               የሞሮኮ አገልግሎታችን :-
👉 ምቹ እና ፅዱ የግል ክፍል
👉 የሰለጠነ ባለሞያ
👉 የዘመናዊ የተሟላ እቃ አለው።`
    }
  },
  {
  title: {
    en: ' Secure Parking',
    am: ' ደህንነቱ የተጠበቀ ፓርኪንግ'
  },
  image: parkingImg, // make sure you import this image at the top
  description: {
    en: `Our secure parking area accommodates over 200–250 vehicles with 24/7 surveillance and gated access. Guests can enjoy peace of mind knowing their vehicles are safe.

The spacious layout and organized slots ensure smooth entry, exit, and convenience for all visitors.`,
    
    am: `ደህንነቱ የተጠበቀ የመኪና ማቆሚያ ቦታ ከ 200-250 በላይ ተሽከርካሪዎችን 24 ሰአት በክትትል ይይዛል። እንግዶች ተሽከርካሪዎቻቸው ደህንነታቸው የተጠበቀ መሆኑን በማወቅ የአእምሮ ሰላም የሰጣቸዋል።

ሰፊው አቀማመጥ እና የተደራጁ ቦታዎች ለሁሉም ጎብኝዎች ምቾት ይሆናሉ።`
  }
},

  {
    title: {
      en: ' On-site Shops',
      am: ' ተያያዥ አገልግሎቶች'
    },
    image: shopsImg,
    description: {
      en: `Our shopping wing features:

👉 Sports Jersey Shop: Offering authentic local and international kits.
👉 Beauty Salon: Providing haircuts, facials, and grooming services.
👉 Photo Studio: Specializing in instant portraits and event coverage.

All shops are conveniently located within the club compound for easy access
`,
      am: `በግቢ ውስጥ ከስራችን ጋር ተያያዠነት ያለው አገልግሎት የሚሰጡ ያከራየናቸው ሱቆችም በክለባችን ግቢ ውስጥ አሉ።እነሱም:-
👉 ፎቶ ቤት
👉 የስፓርት ትጥቅ መሸጫ
👉 የውበት ሳሎን ዋና ዋናዎቹ ናቸው።`
    }
  },
  {
    title: {
      en: ' VIP Conference Rooms',
      am: ' (VIP)የስብሰባ ክፍሎች'
    },
    image: conferenceImg,
    description: {
      en: `Designed for high-end meetings, our VIP conference rooms offer:
👉 Modern Furnishings: Ensuring comfort and privacy.
👉 Advanced Technology: Equipped with a projector, Wi-Fi, whiteboard, and microphone system.
👉 Capacity: Accommodates up to 60 people.

These rooms are perfect for business summits, team workshops, and executive sessions.`,
      am: `ለከፍተኛ ስብሰባዎች የተነደፉ (VIP)የስብሰባ ክፍሎች የሚከተሉትን ያቀርባሉ:

👉 ዘመናዊ ዕቃዎች እና ግላዊ ይዞታ
👉 ፕሮጀክተር፣ ዋይፋይ፣ ነጭ ሰሌዳ እና የማይክራፎን ስርዓት
👉 እስከ 60 ሰዎች የሚያስተናግድ

ለንግድ ጉባኤዎች፣ የቡድን ስልጠናዎች እና የአስፈጻሚ ስብሰባዎች ተስማሚ።`
    }
  },
  {
  title: {
    en: ' Football Field Rent',
    am: ' የሜዳ ኪራይ'
  },
  image: football,
  description: {
    en: `Our football field is available for rent, making it ideal for:

👉 Team Practices and local tournaments
👉 Friendly Matches and sports events
👉 School or Corporate Leagues
👉 Special Sports Day Events

The facility features ample space, well-maintained turf, locker rooms, and optional lighting for evening games.`,
    am: `የእግር ኳስ ሜዳችን ለኪራይ ክፍት ሲሆን የሚከተሉትን ዝግጅቶቸ በበቂ ሁንታ ያስተናግዳል:

👉 የቡድን ልምምዶች እና አስፖርታዊ ውድድሮች
👉 የወዳጅነት ጨዋታዎች እና የስፖርት ዝግጅቶች
👉 የትምህርት ቤት ወይም የኩባንያ ዝግጅቶች
👉 የተለያዩ የንግድ እና ሌሎች በአረንጓዴ ሜዳ ላይ የሚከናወኑ ዝግጅቶችን ለማስተናገድ የሚያስችል ሰፊ እና ምቹ  የኪራይ ሜዳ አለን

የሎከር ክፍሎች እና ለምሽት ጨዋታዎች አማራጭ መብራት እናቀርባል።`
  }
}
];

const OtherServicesDetail = ({ language }) => {
  return (
    <>
      <section className="container py-5">
        <h1 className="fw-bold text-center mb-5">
          {language === 'am' ? 'ሌሎች አገልግሎቶች በዝርዝር' : 'Other Services in Detail'}
        </h1>

        {services.map((service, index) => (
          <div key={index} className="row align-items-center mb-5">
            {/* IMAGE COLUMN */}
            <div className="col-md-5 mb-3 mb-md-0">
              <img
                src={service.image}
                alt={language === 'am' ? service.title.am : service.title.en}
                className="img-fluid rounded shadow-sm"
                style={{ height: '260px', objectFit: 'cover', width: '100%' }}
              />
            </div>

            {/* TEXT COLUMN */}
            <div className="col-md-7">
              <h2 className="fw-bold mb-3">
                {language === 'am' ? service.title.am : service.title.en}
              </h2>
              <p className="text-muted" style={{ whiteSpace: 'pre-line' }}>
                {language === 'am' ? service.description.am : service.description.en}
              </p>
            </div>
          </div>
        ))}

      </section>
    </>
  );
};

export default OtherServicesDetail;
