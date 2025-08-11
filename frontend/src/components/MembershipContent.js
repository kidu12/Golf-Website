import React from 'react';
import { Link } from 'react-router-dom';

import barImage from '../assets/images/Bar-1.webp';
import gymImage from '../assets/images/Gym-2.webp';
import spaImage from '../assets/images/Spa-1.webp';
import tennisImage from '../assets/images/Court_1.webp';
import conferenceImage from '../assets/images/Conf-1.webp';
import gardenImage from '../assets/images/Garden-1.webp';

const MembershipContent = ({ language }) => {
  const content = {
    en: {
      title: 'Membership for Defence Personnel',
      subtitle: 'Exclusive benefits for officers and military personnel in recognition of your service.',
      benefitsTitle: 'Membership Privileges & Discounts',
      benefits: [
        {
          image: barImage,
          name: 'Bar & Restaurant',
          discount: '10-20% Discount',
          description: 'Enjoy a 10-20% discount on our entire menu, from traditional Ethiopian cuisine to international dishes and a wide selection of beverages.',
        },
        {
          image: gymImage,
          name: 'Gym & Fitness Center',
          discount: '40-50% Discount',
          description: 'Maintain peak physical fitness with a 40-50% discount on access to our state-of-the-art gym.',
        },
        {
          image: spaImage,
          name: 'Spa & Steam Center',
          discount: '40-50% Discount',
          description: 'Relax and rejuvenate with a 40-50% discount on all our wellness services, including massages, sauna, and steam sessions.',
        },
        {
          image: tennisImage,
          name: 'Tennis Court',
          discount: '40-50% Discount',
          description: 'Receive a 40-50% discount on all tennis court bookings for both recreational and competitive play.',
        },
        {
          image: conferenceImage,
          name: 'Conference Hall',
          discount: '40-50% Discount',
          description: 'Get a 40-50% discount on booking our versatile conference hall for meetings, seminars, and events.',
        },
        {
          image: gardenImage,
          name: 'Garden & Grounds',
          discount: '40-50% Discount',
          description: 'A 40-50% discount on venue fees for hosting private events in our beautiful gardens and grounds.',
        },
      ],
      howToJoin: 'How to Become a Member',
      joinInfo: 'Membership is exclusively available to Defence Force personnel and authorized civilian staff. To apply, please visit the administration office with a valid military or staff identification card for verification.',
      contactTitle: 'Inquire About Membership',
      contactText: 'For more details on membership eligibility, please reach out to our administration team. We are honored to serve you.',
      contactButton: 'Contact Administration',
    },
    am: {
      title: 'ለመከላከያ ሰራዊት አባላት የአባልነት ፕሮግራም',
      subtitle: 'ለአገልግሎትዎ እውቅና ለመስጠት ለአገልጋዮች እና ለውትድርና ሰራተኞች ልዩ ጥቅሞች።',
      benefitsTitle: 'የአባልነት ጥቅሞች እና ቅናሾች',
      benefits: [
        {
          image: barImage,
          name: 'ባር እና ሬስቶራንት',
          discount: '10-20% ቅናሽ',
          description: 'ከኢትዮጵያ ባህላዊ ምግቦች እስከ አለም አቀፍ ምግቦች እና ከሰፊ የመጠጥ አማራጮችች ከ10-20% ድረስ ቅናሽ ይደሰቱ።',
        },
        {
          image: gymImage,
          name: 'ጂምናዚየም',
          discount: '40-50% ቅናሽ',
          description: 'በጅማችን በየተለያዩ ዘመናዊ የአካል ብቃት እንቅስቃሴ ማሽኖች እና ነፃ የክብደት መሳርያዎችን በመጠቀም በ40-50% ቅናሽ ከፍተኛ የአካል ብቃትዎን ይጠብቁ።',
        },
        {
          image: spaImage,
          name: 'ስፓ እና የእንፋሎት ማዕከል',
          discount: '40-50% ቅናሽ',
          description: 'ሙያዊ የማሳጅ ሕክምና፣ ሳውና እና ስቲም ክፍለ ጊዜዎችን ጨምሮ በሁሉም የጤና አገልግሎቶቻችን ላይ በ40-50% ቅናሽ ዘና ይበሉ።',
        },
        {
          image: tennisImage,
          name: 'የቴኒስ ሜዳ',
          discount: '40-50% ቅናሽ', 
          description: 'በሁሉም የቴኒስ ሜዳዎቻችን ላይ የ40-50% ቅናሽ ያግኙ። ለመዝናኛም ሆነ ለውድድር ጨዋታ ተስማሚ ናቸው።',
        },
        {
          image: conferenceImage,
          name: 'የመሰብሰቢያ አዳራሽ',
          discount: '40-50% ቅናሽ',
          description: 'ለስብሰባዎች፣ ለሴሚናሮች እና ለዝግጅቶች ሁለገብ አዳራሻችንን በማስያዝ የ40-50% ቅናሽ ያግኙ።',
        },
        {
          image: gardenImage,
          name: 'የአትክልት ስፍራ እና ግቢዎች',
          discount: '40-50% ቅናሽ',
          description: 'በውብ የአትክልት ስፍራዎቻችን እና ግቢዎቻችን ውስጥ የግል ዝግጅቶችን ለማስተናገድ የ40-50% ቅናሽ ያግኙ።',
        },
      ],
      howToJoin: 'እንዴት አባል መሆን እንደሚቻል',
      joinInfo: 'አባልነት ለመከላከያ ሰራዊት ሰራተኞች እና ለመኮንኖች ብቻ የተወሰነ ነው። ለመመዝገብ ትክክለኛ የሆነውን ወታደራዊ ወይም የቢሮ መታወቂያዎን በአስተዳደር ቢሮ ያቅርቡ።',
      contactTitle: 'ስለ አባልነት ይጠይቁ',
      contactText: 'ስለ አባልነት ብቁነት ተጨማሪ ዝርዝሮችን ለማግኘት እባክዎ የአስተዳደር ቡድናችንን ያግኙ። እርስዎን ለማገልገል ዝግጁ ናቸው።',
      contactButton: 'አስተዳደርን ያግኙ',
    },
  };

  const selected = content[language] || content.en;

  return (
    <div className='membership-page'>
      <header className='membership-hero'>
        <div className='hero-content'>
          <h1 className='hero-title text-white'>{selected.title}</h1>
          <p className='hero-subtitle'>{selected.subtitle}</p>
        </div>
      </header>

      <section className='membership-benefits-section py-5'>
        <div className='container'>
          <div className='text-center mb-5'>
            <h2 className='fw-bold'>{selected.benefitsTitle}</h2>
          </div>
          <div className='row'>
            {selected.benefits.map((benefit, index) => (
              <div className='col-md-6 col-lg-4 mb-4' key={index}>
                <div className='benefit-card h-100'>
                  <img src={benefit.image} alt={benefit.name} className='benefit-card-img' />
                  <div className='benefit-card-body'>
                    <h3 className='benefit-name'>{benefit.name}</h3>
                    <span className='benefit-discount'>{benefit.discount}</span>
                    <p className='benefit-description'>{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='how-to-join-section py-5 bg-light'>
        <div className='container text-center'>
          <h2 className='fw-bold mb-4'>{selected.howToJoin}</h2>
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <p className='lead'>{selected.joinInfo}</p>
            </div>
          </div>
        </div>
      </section>

      <section className='membership-contact-section py-5'>
        <div className='container text-center'>
          <h2 className='fw-bold'>{selected.contactTitle}</h2>
          <p className='lead my-4'>{selected.contactText}</p>
          <Link to='/contact' className='btn btn-primary btn-lg'>
            {selected.contactButton}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MembershipContent;
