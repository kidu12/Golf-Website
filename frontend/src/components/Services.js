import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';
import orientalImage from '../assets/images/bg_12.webp'; // Replace with actual paths
import ConferenceHall from '../assets/images/hall_3.webp';
import TennisCourt from '../assets/images/bg1.webp'; // new image
import SpaSteamCenter from '../assets/images/Room_03.webp'; // Replace with actual paths
import Gym from '../assets/images/Gym-2.webp';
import GardenAreaGrounds from '../assets/images/gardon_fild.webp'; // new image
import JusebarImg from '../assets/images/juice_bar_image.webp';
import PlaygroundImg from '../assets/images/kids_2.webp';
import CarWashImg from '../assets/images/car_wash.webp';
import CoffeeCeremonyImg from '../assets/images/coffe.webp';
import CateringImg from '../assets/images/catring_32.webp';
import ExhibitionsAndBazaarsImg from '../assets/images/event_05.webp';
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
    en: 'Golf Course',
    am: 'የጎልፍ ስፖርት'
  },
  description: {
    en: 'Nestled within the tranquil landscape, our 18-hole private resort course offers an enriching experience for golfers of all skill levels. With a par of 70 and a total length of 5,529 meters, the course is expertly designed to provide both challenge and enjoyment.',
    am: 'በአዲስ አበባ ጎልፍ ክለብ ረጋ ያለ መልክዓ ምድር ውስጥ የሚገኝ፣ ባለ 18-ቀዳዳ የግል/የሪዞርት ኮርስ በሁሉም የክህሎት ደረጃ ላሉ ተጫዋቾች አርኪ ተሞክሮ ይሰጣል። በ70 እና በድምሩ 5,529 ሜትር ርዝመት ያለው ኮርሱ ፈተናን እና ደስታን ለመስጠት ታስቦ የተዘጋጀ ነው።'
  },
  image: TennisCourt, // TODO: Replace with a more relevant image for the golf field
  link: '/tennis' // Changed from /tennis to be more descriptive
},
{
  title: {
    en: 'Bar & Restaurant',
    am: 'ባር እና ሬስቶራንት'
  },
  description: {
    en: 'our restaurant features a state-of-the-art kitchen managed by talented chefs and a dedicated team focused on culinary excellence. Guests can savor a thoughtfully crafted menu that harmoniously combines traditional Ethiopian flavors with an extensive selection of international dishes, catering to every palate.',
    am: 'በአዲስ አበባ ጎልፍ ክለብ በብቃት በሰለጠኑ ሾፎች እና ሠራተኞች የሚመራ ንፁህ እና ዘመናዊ ወጥ ቤት አለው የኢትዮጵያን ባህላዊ ጣዕሞች ከተለያዩ ዓለም አቀፍ ምግቦችና መጠጦች በጥራት እና በተመጣጣኝ ዋጋ ያጣጥሙ።'
  },
  image: orientalImage,
  link: '/bar'
},
{
  title: {
    en: 'Juice Bar',
    am: 'የፍራፍሬ ጭማቂ ባር'
  },
  description: {
    en: 'Our Juice Bar offers a vibrant selection of freshly squeezed juices and healthy blends, perfect for a refreshing break. Choose from seasonal fruits, energizing smoothies, and custom wellness drinks—all prepared on the spot.',
    am: 'የፍራፍሬ ጭማቂ ባራችን ከተፈጥሮ ፍራፍሬዎች የተዘጋጀ በጤና ላይ የተመሰረተ የጭማቂ እና የስሙዚ ምርጫ ያቀርባል። ከጨዋታ ወይም እንቅስቃሴ በኋላ ለመማማት ወይም ለመቀዝቀዝ ተስማሚ ነው።'
  },
  image: JusebarImg,
  link: '/juice-bar'
},
{
  title: {
    en: 'Children\'s Playground',
    am: 'የልጆች መጫወቻ ሜዳ'
  },
  description: {
    en: 'A safe and fun playground for children to enjoy while you relax. The playground is equipped with modern and secure play structures.',
    am: 'እርስዎ በሚያርፉበት ጊዜ ልጆችዎ በደስታ እንዲጫወቱበት የተዘጋጀ አስተማማኝ እና አስደሳች የመጫወቻ ስፍራ። የመጫወቻ ስፍራው በዘመናዊ እና አስተማማኝ የመጫወቻ አወቃቀሮች የተገጠመለት ነው።'
  },
  image: PlaygroundImg,
  link: '/childrens-playground'
},
{
  title: {
    en: 'Car Wash',
    am: 'የመኪና እጥበት'
  },
  description: {
    en: 'Keep your vehicle sparkling clean with our professional car wash service. We offer a range of cleaning packages, from a quick exterior wash to a full interior and exterior detailing.',
    am: 'ፕሮፌሽናል በሆነው የመኪና እጥበት አገልግሎታችን መኪናዎን ንፁህ እና አንጸባራቂ ያድርጉት። ከፈጣን የውጪ እጥበት እስከ ሙሉ የውስጥ እና የውጪ ዝርዝር ክሊኒንግ ድረስ የተለያዩ የጽዳት ፓኬጆችን እናቀርባለን።'
  },
  image: CarWashImg,
  link: '/car-wash'
},
{
  title: {
    en: 'Traditional Ethiopian Coffee Ceremony',
    am: 'ባህላዊ የኢትዮጵያ ቡና አፈላል ስነ ስርዓት'
  },
  description: {
    en: 'Experience the rich cultural heritage of Ethiopia with our traditional coffee ceremony. A unique and authentic experience for our guests.',
    am: 'የኢትዮጵያን የበለጸገ የባህል ቅርስ በባህላዊ የቡና አፈላል ስነ ስርዓታችን ይለማመዱ። ለእንግዶቻችን ልዩ እና እውነተኛ የሆነ ተሞክሮ።'
  },
  image: CoffeeCeremonyImg,
  link: '/coffee-ceremony'
},
{
  title: {
    en: 'Indoor and Outdoor Catering Service',
    am: 'የቤት ውስጥ እና የውጪ የምግብ አቅርቦት አገልግሎት'
  },
  description: {
    en: 'Our catering services extend to both indoor and outdoor events, providing a seamless and high-quality dining experience.',
    am: 'የምግብ አቅርቦት አገልግሎታችን ለቤት ውስጥ እና ለውጪ ዝግጅቶች የሚዘልቅ ሲሆን እንከን የለሽ እና ከፍተኛ ጥራት ያለው የመመገቢያ ተሞክሮን ይሰጣል።'
  },
  image: CateringImg,
  link: '/catering-service'
},
{
  title: {
    en: 'Exhibitions and Bazaars',
    am: 'ኤግዚቢሽኖች እና ባዛሮች'
  },
  description: {
    en: 'We provide versatile spaces perfect for hosting memorable exhibitions and vibrant bazaars.',
    am: 'የማይረሱ ኤግዚቢሽኖችን እና ንቁ ባዛሮችን ለማስተናገድ ፍጹም የሆኑ ሁለገብ ቦታዎችን እናቀርባለን።'
  },
  image: ExhibitionsAndBazaarsImg,
  link: '/services/exhibitions-and-bazaars'
},
{
  title: {
    en: 'Room Service',
    am: 'የመኝታ አገልግሎት :'
  },
  description: {
    en: 'Enjoy the convenience of our 24/7 room service. Whether it\'s a late-night snack or a full-course meal, our extensive menu offers a wide variety of options delivered right to your door.',
    am: 'ድርጅታችን የመከላከያ ሰራዊት ፋውንዴሽን አዲስ አበባ  ጎልፍ ክለብ ፅዱ እና ምቹ የምኝታ አገልግሎት በተመጣጣኝ ዋጋ ፤ ከተሟላ ፋሲሊቲ ጋር 7/24 እናቀርባለን።'
  },
  image: SpaSteamCenter, // TODO: Replace with an actual Room Service image
  link: '/spa'
},
{
  title: {
    en: 'Gymnasium',
    am: 'ጂምናዚየም'
  },
  description: {
    en: 'Our state-of-the-art gym is tailored to meet the fitness needs of all our guests. It is equipped with advanced workout machines, free weights, and designated areas for both cardio and strength training, offering a comprehensive and invigorating fitness experience.',
    am: 'በስፖርት ሳይንስ  በሰለጠኑ የድርጅታችን ሰራተኞች በመታገዝ በአረንጓዴ የተሸፈነ ማራኪ ተፈጥሮን እየተመለከቱ የተሟላ  ስፓርታዊ እንቅስቃሴ ለማድረግ ምቹ የሆነ የጅም አገልግሎት በተመጣጣኝ ዋጋ መጠቀም ይችላሉ።'
  },
  image: Gym,
  link: '/gym'
},
{
  title: {
    en: 'Garden Area',
    am: 'አረንጓዴ ስፍራ '
  },
  description: {
    en: 'The beautifully landscaped garden remains lush and vibrant year-round, providing a breathtaking outdoor venue for various events. With a capacity to accommodate 10,000 to 15,000 guests, it serves as the perfect backdrop for unforgettable weddings, dynamic concerts, cultural festivals, and much more.',
    am: 'የመከላከያ ሰራዊት ፋውንዴሽን አዲስ አበባ  ጎልፍ ክለብ ዓመቱን ሙሉ  በሚያምር ሁኔታ  አረንጓዴ ለምለም ሆኖ የሚቆይ ከ650,000 ካሬ ሜትር ስፋት ያለው ሰፊ ቦታ ነው። በተጨማሪም ከ10,000-15,000 እንግዶችን ማስተናገድ የሚችለው ይህ ቦታ ለጋብቻዎች፣ ለኮንሰርቶች እና ለፌስቲቫሎች ተስማሚ ነው።'
  },
  image: GardenAreaGrounds,
  link: '/garden'
},
  {
  title: {
    en: 'VIP Conference Room',
    am: 'የ(VIP) ስብሰባ ክፍል'
  },
  description: {
    en: 'Our VIP meeting room is ideal for high-level meetings, trainings, and private events. Equipped with modern furnishings, specialized equipment, and a comfortable atmosphere, the room can accommodate up to 30 guests. It is ideal for board meetings, special meetings, and special private events.',
    am: 'ድርጅታችን የመከላከያ ሰራዊት ፋውንዴሽን አዲስ አበባ  ጎልፍ ክለብ ከ 30 እስከ 50 ተሳታፊዎች ማስተናገድ የሚችል  ምቹ እና ፅዱ  የመሰብሰቢያ አዳራሽ  ያቀርባል።'
  },
  image: ConferenceHall,
  link: '/conference'
},

];

  return (
    <section className="py-5 services-section" id="services">
      <div className="container">
<h2 className="text-center mb-5 fw-bold" style={{ color: '#4D784E' }}>
  {language === 'en' ? 'Our Services' : 'የእኛ አገልግሎቶች'}
</h2>
        <div className="row">
          {services.map((service, index) => (
           <div
  className="col-md-6 col-lg-4 mb-4 d-flex"
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