import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';
import orientalImage from '../assets/images/Bar-11.webp'; // Replace with actual paths
import ConferenceHall from '../assets/images/hall_9.webp';
import TennisCourt from '../assets/images/Court_1.webp'; // new image
import SpaSteamCenter from '../assets/images/Spa-5.webp'; // Replace with actual paths
import Gym from '../assets/images/Gym-2.webp';
import GardenAreaGrounds from '../assets/images/Garden-5.webp'; // new image
import '../styles/services.css';

  
const Services = ({ language })  => {
    const sectionRef = useRef(null);
      const [visible, setVisible] = useState(false);
    
      // Detect when the section is in the viewport
      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setVisible(true);
          },
          { threshold: 0.2 }
        );
    
        if (sectionRef.current) {
          observer.observe(sectionRef.current);
        }
    
        return () => {
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
      }, []);

  const services = [
  {
  title: {
    en: 'Conference Hall',
    am: 'የመሰብሰቢያ አዳራሽ '
  },
  description: {
    en: 'The Ethiopian Defense Force Officers Club features adaptable conference halls suitable for gatherings of any size, ranging from small meetings to large events hosting up to 1,000 attendees.',
    am: 'የኢትዮጵያ መከላከያ ሠራዊት መኮንኖች ክበብ እስከ 1000 ተሳታፊዎች ማስተናገድ የሚችል ሰፊ፣ ምቹ ፣ፅዱ እና የተሟሉ አዳራሾችን ለሰረግ ፣ለምርቃት፣ እና ሌሎች ዝግጅቶች ያቀርባል።'
  },
  image: ConferenceHall,
  link: '/conference'
},
{
  title: {
    en: 'Bar & Restaurant',
    am: 'ባር እና ሬስቶራንት'
  },
  description: {
    en: 'Our restaurant features a pristine, contemporary kitchen run by talented chefs and dedicated staff focused on delivering excellence. Guests can savor an extensive menu that harmoniously combines traditional Ethiopian flavors with a diverse selection of international cuisine.',
    am: 'በብቃት በሰለጠኑ ሾፎች እና ሠራተኞች የሚመራ ንፁህ እና ዘመናዊ ወጥ ቤት አለው የኢትዮጵያን ባህላዊ ጣዕሞች ከተለያዩ ዓለም አቀፍ ምግቦችና መጠጦች በጥራት እና በተመጣጣኝ ዋጋ  በባር እና ሬስቶራቶቻችን ማጣጣመመ ይችላሉ።'
  },
  image: orientalImage,
  link: '/bar'
},
{
  title: {
    en: 'Spa & Steam Center',
    am: 'ስፓ እና ስቲም'
  },
  description: {
    en: 'Crafted to enhance relaxation and rejuvenation, our spa and massage center offers state-of-the-art facilities, including soothing massage rooms, invigorating saunas, and luxurious steam baths.',
    am: 'አካላዊ መዝናናት እና መታደስን ለማግኘት ምቹ ፣ ጥራቱን የጠበቀና በሞያው የሰለጠኑ ባለሞያዎች ያሉት ስፓና ስቲም አገልግሎት ክለባችን አለው።'
  },
  image: SpaSteamCenter,
  link: '/spa'
},
{
  title: {
    en: 'Gymnasium',
    am: 'ጂምናዚየም'
  },
  description: {
    en: 'Our state-of-the-art gym is tailored to fulfill the fitness needs of all guests, boasting modern workout machines and free weights, along with dedicated areas for both cardio and strength training.',
    am: 'ጅማችን የተለያዩ ዘመናዊ የአካል ብቃት እንቅስቃሴ ማሽኖች እና ነፃ የክብደት መሳርያዎችን  በሚመች ቦታ ላይ የያዘ እና ለሁሉም እንግዶች የአካል ብቃት እንቅስቃሴ የማድረግ ፍላጎት ለማሟላት የተነደፈ አገልግሎት አይነት ነው።'
  },
  image: Gym,
  link: '/gym'
},
{
  title: {
    en: 'Garden Area & Grounds',
    am: 'አረንጓዴ ስፍራ '
  },
  description: {
    en: 'The lush garden grounds of the Officers Club remain beautifully green year-round and serve as a breathtaking venue for outdoor events. Capable of hosting up to 6000-10000 guests, the space is perfect for weddings, concerts, and festivals.',
    am: 'የመኮንኖችች ክበብ ዓመቱን  ሙሉ ለሙሉ በሚያምር ሁኔታ ለስላሰና አረንጓዴ መሬት  ሆኖ ይቆያል። በተጨማሪም ከ6000-10000 እንግዶችን ማስተናገድ የሚችለው ይህ ቦታ ለጋብቻዎች፣ ለኮንሰርቶች እና ለፌስቲቫሎች ተስማሚ ነው።'
  },
  image: GardenAreaGrounds,
  link: '/garden'
},
{
  title: {
    en: 'Ground Tennis Court',
    am: 'የሜዳ ቴኒስ ቦታ'
  },
  description: {
    en: 'Our expansive multi-purpose court is perfect for both casual and competitive tennis matches, as well as a variety of recreational activities. Constructed with high-quality materials and offering plenty of space, it provides an excellent environment for all types of play.',
    am: 'ሰፊው የሜዳ ቴኒስ ቦታ ለውድድር ጨዋታ እንዲሁም የሜዳ ቴኒስ ቦታ ሰፊው የሜዳ ቴኒስ ቦታ ለውድድር  ጨዋታ  እንዲሁም ለሌሎች የመዝናኛ እንቅስቃሴዎች ተስማሚ ነው።  ለሌሎች የመዝናኛ እንቅስቃሴዎች ተስማሚ ነው።'
  },
  image: TennisCourt,
  link: '/tennis'
}
];

  return (
    <section className="py-5 services-section" id="services">
      <div className="container">
<h2 className="text-center mb-5 fw-bold">
  {language === 'en' ? 'Our Services' : 'የእኛ አገልግሎቶች'}
</h2>
        <div className="row">
          {services.map((service, index) => (
           <div
  className="col-md-6 col-lg-4 mb-4"
  key={index}
  data-aos="fade-up"
  data-aos-delay={index * 100}
>
<ServiceCard
  link={service.link}       // Now handles both string and object
  title={service.title[language]}
  description={service.description[language]}
  image={service.image}
  language={language}       // Crucial for translation selection
/>

</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;